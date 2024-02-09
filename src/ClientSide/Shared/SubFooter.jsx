import { useEffect, useState } from "react";
import './Footer.css';
import './SubFooter.css';
import { Link } from "react-router-dom";
import Button from "./Button";


const SubFooter = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // const email = 'daisaneformn@gmail.com';
    const [userName, setUserName] = useState('');

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any action with the username here, e.g., send it to a server or store it in state
        console.log('Username submitted:', userName);
    };
    // let screenWidth = screen.width;
    // console.log('screen with is ', screenWidth);
    return (
        <div className="sub-footer-main">
            <div className="main-container flex bg-[#122362] px-[150px] mb-[250px] rounded-3xl">
                <div className="container-1  py-[335px]">
                    <h5 className="contribute text-white text-[35px] font-bold mb-[50px]">Contribute to support Abdi Daisane</h5>
                    <h5 className="make-donation text-white  font-bold text-[70px]">Make a donation today!</h5>

                </div>
                <div className="container-2 py-[158px] ml-[200px] ">
                    {

                        (screenWidth >= 820) ?
                            <div className="btn-group-div 2xl:w-[443px] 2xl:h-[93px] mb-[60px] bg-[#d9d9d9] flex justify-center items-center rounded-lg">
                                <div className="btn-group text-white">
                                    <button className="btn-monthly text-white monthly font-bold text-xl">Monthly</button>
                                    <button className="btn-one-time one-time font-bold text-xl block " style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>One Time</button>
                                </div>
                            </div>
                            :
                            <div>
                                <Button></Button>
                            </div>
                    }

                    {/* <div className="btn-group-div 2xl:w-[443px] 2xl:h-[93px] mb-[60px] bg-[#d9d9d9] flex justify-center items-center rounded-lg">
                        <div className="btn-group text-white">
                            <button className="btn-monthly text-white monthly font-bold text-xl">Monthly</button>
                            <button className="btn-one-time one-time font-bold text-xl block " style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>One Time</button>
                        </div>
                    </div> */}
                    <h5 className="select-amount text-white  font-extrabold text-2xl mb-9">Select amount (in us dollar)</h5>
                    <div className="amount-button text-white text-xl font-bold mb-[35px]">
                        <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 10</button>
                        <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 20</button>
                        <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 40</button>
                        <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 80</button>
                        <button className="option others-button border border-gray-50 py-5 px-9 rounded-xl ">others</button>

                    </div>
                    {/* <div className="amount-button text-white text-xl font-bold mb-[35px]">
                        <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 10</button>
                        <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 20</button>
                        <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 40</button>
                        <button className="option border border-gray-50 py-5 px-9 rounded-xl mr-4">$ 80</button>
                        <button className="option others-button border border-gray-50 py-5 px-9 rounded-xl ">others</button>

                    </div> */}
                    <div className="checkbox-main-div mb-[53px]">
                        <div className="checkbox-div flex text-white text-[25px]">
                            <div>
                                <input id="checkbox" type="checkbox" />
                            </div>

                            <div className="checkbox-title">
                                <label htmlFor="checkbox"> I understand and comply to the <a href="" onClick={(e) => e.preventDefault()}>terms and conditions laid out</a>.</label>
                            </div>
                            {/* <label htmlFor="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label> */}
                        </div>
                    </div>
                    <div>
                        <h5 className="name  text-white font-bold text-[25px] mb-[25px]">Name</h5>
                        <form onSubmit={handleSubmit}>
                            <label>

                                <input className="name-input w-[707px] text-white text-xl outline-none  py-[38.5px] pl-[25px] h-[97px] border border-white mb-[60px] rounded rounded-lg bg-[#12225D]" placeholder="Enter your name" type="text  " value={userName} onChange={handleInputChange} />
                            </label>
                            <br />
                            <Link to="https://secure.actblue.com/donate/daisaneformn" target="_blank" className="donate-button w-[269px] font-bold bg-[#D9D9D9] rounded rounded-3xl text-[#12225D] text-[25px] px-[45px] py-[30px]" type="submit">DONATE NOW</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubFooter;