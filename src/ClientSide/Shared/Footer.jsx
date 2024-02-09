import "./Footer.css";
import abdiDaisane from '../../assets/images/footer/daisane-logo.png';
// import abdiDaisane2 from '../../assets/images/footer/abdiDaisane.png';
import phone from '../../assets/images/footer/phone.png';
import emailIcon from '../../assets/images/footer/email.png';
import x from '../../assets/images/footer/x.png';
import facebook from '../../assets/images/footer/facebook.png';
import linkedin from '../../assets/images/footer/linkedin.png';
import google from '../../assets/images/footer/google.png';
import line from '../../assets/images/footer/line.png';
import { Link } from "react-router-dom";
import SubFooter from "./SubFooter";

const Footer = () => {
    const email = 'daisaneformn@gmail.com';

    let width = screen.width;
    console.log('screen with is ', width)

    return (
        <div className="">
            {/* make a donation */}
            {/* <SubFooter></SubFooter> */}
            {/* footer bottom */}
            <div className="footer-container bg-[#122362] px-[150px]">
                <div className="footer-sub-container flex justify-between ">
                    <div className="left-div mt-[100px] ">
                        <img className="daisane-logo h-[102px] w-[303px] mb-[49px]" src={abdiDaisane} alt="" />
                        {/* <img className="daisane-logo h-[102px] w-[303px] mb-[49px]" src={abdiDaisane2} alt="" /> */}
                        <h5 className="our-office text-white text-[25px] leading-[37px] font-bold	 mb-[25.43px]">Our Office</h5>
                        <h5 className="po-box  font-light text-lg text-[#D5D5D6] mb-[50px]">PO BOX 2354, Saint Cloud, MN 56302</h5>

                        <h5 className="phone-number text-[#D5D5D6]  leading-[27px] text-lg mb-[19px]"><img className="phone-icon inline w-[27.87px] h-[27.87px] mr-4" src={phone} alt="" /> 320-223-4902
                        </h5>

                        <h5 className="phone-number text-[#D5D5D6]   leading-[27px] text-lg"><img className="email-icon inline w-[30px] h-[25px] mr-[15.5px]" src={emailIcon} alt="" /> <a href={`mailto:${email}`}>
                            <span>{email}</span>
                        </a></h5>
                        {/* <h5 className="underline-transparent hover:underline underline-offset-[3px] ">
                        <img className="inline w-[30px] h-[25px] mr-[15.5px]" src={emailIcon} alt="" />
                        <a href={`mailto:${email}`}>
                            <span>{email}</span>
                        </a>
                    </h5> */}

                    </div>
                    <div className="middle-div pt-0 mt-[246px] ">
                        <h2 className="link-title text-white text-[25px] mb-[13.34px] ">Links</h2>
                        <div className="copyright-link  flex flex-col text-lg text-[#D5D5D6]">
                            <Link to='/' className="home-link font-light mb-3"> {">"} <span className="ml-[15px]  "> Home</span></Link>
                            <Link to='/priorities' className="priorities-link font-light mb-3"> {">"} <span className="ml-[15px] ">  Priorities</span></Link>
                            <Link to='/endorsements' className="endorsements-link font-light mb-3"> {">"} <span className="ml-[15px] ">  Endorsements</span></Link>
                            <Link to='/news' className="news-link font-light mb-3"> {">"} <span className="ml-[15px] ">  Events</span></Link>
                            <Link to='/priorities' className="privacy-link font-light mb-3"> {">"} <span className="ml-[15px] ">  Privacy</span> & Policy</Link>
                            <Link to='/priorities' className="condition-link font-light mb-3"> {">"} <span className="ml-[15px] ">  Terms</span> & Conditions</Link>
                        </div>
                    </div>
                    <div className="last-div pt-0 mt-[246px]  ">
                        <h2 className="paid-for  text-white text-[40px] mb-[25px]">Paid for by Daisane for MN</h2>
                        <div className="paid-for-line flex justify-end  mb-[60px]">
                            <img className="" src={line} alt="" />
                        </div>
                        <p className="social-media flex justify-end  text-white leading-[37.05px] text-[25px] font-bold mb-[25px]">Our Social Media</p>
                        <div className="social-media-icon flex justify-end">
                            <Link to='https://web.facebook.com/ahdaisane/?_rdc=1&_rdr' target="_blank"><img className="fb-icon pr-10" src={facebook} alt="" /></Link>
                            <Link to='https://twitter.com/AbdiFor14A/status/1616890753187291137' target="_blank"><img className="x-icon pr-10" src={x} alt="" /></Link>
                            <Link to='https://www.linkedin.com/in/abdidaisane/' target="_blank"><img className="in-icon" src={linkedin} alt="" /></Link>
                        </div>
                    </div>
                </div>

                <div className="copyright-container flex items-center justify-center pt-[100px] pb-[100px]">
                    <h5 className="copyright text-[#F5F5F5]">Designed and Developed by Fowzi Media. Copyright © Daisane For State Representative. All rights reserved.</h5>
                </div>
            </div>

        </div>
    );
}

export default Footer;