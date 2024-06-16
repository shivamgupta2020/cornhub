
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'
import './wallet.css'
import { BrowserProvider } from 'ethers'
import { useWeb3Modal } from '@web3modal/ethers/react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';



// 1. Your WalletConnect Cloud project ID
const projectId = '44edf0158fdf526d0442a899f373f249'

// 2. Set chains
const mainnet1 = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
}

const mainnet2 = {
    chainId: 25,
    name: 'Chronos',
    currency: 'CRO',
    explorerUrl: 'https://explorer.cronos.org',
    rpcUrl: 'https://evm.cronos.org'
}


// 3. Create a metadata object
const metadata = {
    name: 'Cornhub',
    description: 'AppKit Example',
    url: 'https://www.cornhub.video/', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
    ethersConfig,
    chains: [mainnet1, mainnet2],
    projectId,
    enableAnalytics: true,
    themeMode: 'dark', // Optional - defaults to your Cloud configuration

})


export default function ConnectButton() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { open, close } = useWeb3Modal()
    const { address, chainId, isConnected } = useWeb3ModalAccount()

    useEffect(() => {
        axios.get('https://cornhub-backend.vercel.app/get-user')
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
                console.log("Users fetched:", res.data);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        if (address && !loading) {
            console.log("New address:", address);
            console.log("Current users:", users);

            // Check if user already exists in the users array
            const userExists = users.some(user => user.address === address);
            console.log("User exists:", userExists);

            if (!userExists || users.length === 0) {
                // Define the new user data
                const newUser = {
                    address: address,
                    share: 0,
                    // Add other user data here if needed
                };

                console.log("Posting new user:", newUser);

                // Post user data to the API
                axios.post('https://cornhub-backend.vercel.app/post-user', newUser)
                    .then(response => {
                        const createdUser = response.data;
                        console.log("Created user:", createdUser);

                        // Add the new user to the users array
                        axios.get('https://cornhub-backend.vercel.app/get-user')
                            .then((res) => {
                                setUsers(res.data);
                                setLoading(false);
                                console.log("Users fetched:", res.data);
                            })
                            .catch((err) => {
                                console.log(err);
                                setLoading(false);
                            });
                    })
                    .catch(error => {
                        console.error('Error posting user data:', error);
                    });
            }
        }
    }, [address,loading, users]);
    // 4. Use modal hook
    
    const formatAddress = (address) => {
        if (!address) return '';
        return `${address.slice(0, 5)}...${address.slice(-5)}`;
    };
    const formatAddressMobile = (address) => {
        if (!address) return '';
        return `${address.slice(0, 3)}...${address.slice(-3)}`;
    };
    //check whther screen is mobile or not
    const isMobile = window.innerWidth < 768;

    return (
        <>
            <button onClick={() => open()} style={{ textOverflow: "ellipsis", border:"none", }}>
                {isConnected ? (!isMobile ? formatAddress(address) : formatAddressMobile(address) ): 'Connect'}
            </button>
        </>
    )
} 

