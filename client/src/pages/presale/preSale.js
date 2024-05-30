import React, {useState} from 'react'
import './preSale.css'

function PreSale() {
    const string = '0x7fbB28b8B6daFD35168C7E1f90bfF91b4138d7D4';
    const [buttonText, setButtonText] = useState('COPY');


    const copyToClipboard = () => {
        navigator.clipboard.writeText(string)
            .then(() => {
                setButtonText('COPIED');
                setTimeout(() => {
                    setButtonText('COPY');
                }, 2000); // Reset to "COPY" after 2 seconds
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });

    };
    return (
        <div>
            <div className="presale-div">
                <div className="presale-container">
                    <div className="presale-box">
                        <div className="presale-box-left">
                            <img src={require("./tmp.png")} alt="" srcset="" />
                        </div>
                        <div className="presale-box-right">
                            <h3>Looks familiar, Eh!</h3>
                            <p>TOKEN NAME:</p>
                            <h2>CORNHUB</h2>
                            <p>TOKEN TICKER:</p>
                            <h2>$CORNHUB</h2>
                            <p>CORNHUB token contract address will not be announced</p>

                            <div className="presale-text" style={{ width: "100%",margin:"2px 0" }}>
                                <div className="presale-text-box">
                                    <div className="left-text">
                                        <p>Circulating supply:</p>
                                    </div>
                                    <div className="right-text">
                                        <p>2.1 Trillion CORNHUB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="presale-text" style={{ width: "100%",margin:"2px  0" }}>
                                <div className="presale-text-box">
                                    <div className="left-text">
                                        <p>Units offering:</p>
                                    </div>
                                    <div className="right-text">
                                        <p>48% of Supply</p>
                                    </div>
                                </div>
                            </div>
                            <div className="presale-text" style={{ width: "100%",margin:"2px  0" }}>
                                <div className="presale-text-box">
                                    <div className="left-text">
                                        <p>LP tokens to be burned:</p>
                                    </div>
                                    <div className="right-text">
                                        <p>100%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="presale-text" style={{ width: "100%",margin:"2px  0" }}>
                                <div className="presale-text-box">
                                    <div className="left-text">
                                        <p>Investment token:</p>
                                    </div>
                                    <div className="right-text">
                                        <p>CRO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="presale-text" style={{ width: "100%" }}>
                                <div className="presale-text-box">
                                    <div className="left-text">200 CRO
                                        <h4>MINIMUM PARTICIPATION AMOUNT</h4>
                                    </div>
                                    <div className="right-text">
                                        <h4>200 CRO</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="presale-text" style={{ width: "100%"}}>
                                <div className="presale-text-box">
                                    <div className="left-text">
                                        <h4>MAXIMUM PARTICIPATION AMOUNT</h4>
                                    </div>
                                    <div className="right-text">
                                        <h4>5000 CRO</h4>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="presale-text" style={{ width: "100%",margin:"2px 0" }}>
                                <div className="presale-text-box">
                                    <div className="left-text">
                                        <p>Offering starts:</p>
                                    </div>
                                    <div className="right-text">
                                        <p>May 27th  08:00 AM EST</p>
                                    </div>
                                </div>
                            </div>
                            <div className="presale-text" style={{ width: "100%", margin:"2px 0" }}>
                                <div className="presale-text-box">
                                    <div className="left-text">
                                        <p>Offering ends:</p>
                                    </div>
                                    <div className="right-text">
                                        <p>June 1st 08:00 AM EST</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tokenid" style={{margin:"10px"}}>
                                <span>{string}</span>
                                <button onClick={copyToClipboard} style={{ backgroundColor: '#ff9900', padding: '4px 8px', fontWeight: 'bold', borderRadius: "15px", border: "none"}}>
                                    {buttonText}
                                </button>
                            </div>
                            <div className="last-text">
                                <p>CRO sent after offering end or amount less then 200 CRO will be burnt.</p>
                                <p>Total CRO required for Pre-sale to end is undisclosed. Presale will end either at the end of offering time or when the expected amount is raised.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreSale
