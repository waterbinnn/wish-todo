import styles from "./Olaf.css";
import { Link } from "react-router-dom";

export default function Olaf() {
    return (
        <>
            <div className="wrapper">
                <div className="olaf">
                    <div className="face">
                        <div className="mainHead"></div>
                        <div className="forhead"></div>
                    </div>
                    <div className="hair first"></div>
                    <div className="hair middle"></div>
                    <div className="hair last"></div>
                    <div className="all">
                        <div className="tooth"></div>
                        <div className="mouth"></div>
                        <div className="mouthHider"></div>

                        {/* <!-- eyebrow  --> */}
                        <div className="eyebrow left"></div>
                        <div className="eyebrow right"></div>
                        <div className="eyebrowHider"></div>

                        <div className="blush left"></div>
                        <div className="blush right"></div>

                        {/* <!-- eye  --> */}
                        <div className="eyehole left"></div>
                        <div className="eyehole right"></div>

                        <div className="eyeOutline left"></div>
                        <div className="eyeOutline right"></div>

                        <div className="eyeInline left"></div>

                        <div className="eyeInline right"></div>
                        <Link to="/wish">
                            <div className="eye left"></div>
                        </Link>

                        <Link to="/wish">
                            <div className="eye right"></div>
                        </Link>

                        <div className="nosewrapper">
                            <div className="carrot first"></div>
                            <div className="carrot sec"></div>
                            <div className="carrot third"></div>
                            <div className="nose"></div>
                            <div className="carrotline first"></div>
                            <div className="carrotline sec"></div>
                        </div>
                    </div>
                </div>
                {/* <img
                    className="effect"
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f3db340a-ef66-4e52-96ab-6d27ea591208/elec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220903T175600Z&X-Amz-Expires=86400&X-Amz-Signature=4b3cdf65a637e32adeb3770a9d9fd6b41053bf6fa7f246ddb53ea5e6ee52f7ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22elec.png%22&x-id=GetObject"
                    alt=""
                /> */}
            </div>
        </>
    );
}
