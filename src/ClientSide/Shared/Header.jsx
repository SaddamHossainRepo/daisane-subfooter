



import { useState } from 'react';
import logo from "/daisaneLogo.png";
import { Link } from 'react-router-dom';
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <div className="tB lR lefRight hidden sm:block">
                <style>
                    {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
                </style>
                <div className="flex items-center justify-between  ">
                    <img className="Headerlogo topLogo " src={logo} alt="Daisane Logo" />
                    <div className="flex xl:mx-[140px] 2xl:mx-[250px]  menu menuSize" style={poppinsFontStyle}>
                        <Link to="/" className="2xl:mr-[70px] xl:mr-[40px] font-bold text-[20px] menuGap menuSize">Home</Link>
                        <Link to="/priorities" className="2xl:mr-[70px] xl:mr-[40px] font-bold text-[20px] menuGap menuSize">Prioritites</Link>
                        <Link to="/endorsements" className="2xl:mr-[70px] xl:mr-[40px] font-bold text-[20px] menuGap menuSize">Endorsements</Link>
                        <Link to="/news" className="font-bold text-[20px] menuSize">News & Events</Link>
                    </div>
                    <div>
                        <Link to="https://secure.actblue.com/donate/daisaneformn" target="_blank"><button className="text-[20px] font-medium py-[10px] pl-[31px] pr-[31.49px] bg-[#12225D] text-white rounded-[10px]" style={poppinsFontStyle}>Donate</button></Link>
                    </div>
                </div>

            </div>

            <div className="sm:hidden">
                <div className='mx-[25px] flex justify-between items-center py-[20px] relative'>
                    <img src={logo} className='w-[71px] h-[25.82px]' alt="daisane logo" />
                    <h4 onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            // Close icon or any other close representation
                            <CloseIcon className='text-[#12225D]'></CloseIcon>
                        ) : (
                            // Menu icon or any other open representation
                            <MenuIcon className='text-[#12225D]'></MenuIcon>
                        )}
                    </h4>
                </div>

                {isMobileMenuOpen && (
                    <div className="flex flex-col py-[25px] pr-[25px] z-50 absolute bg-[#D9D9D9] right-0  w-[50%]  text-right">
                        <Link to="/" className="font-bold text-[12px]  mb-[15px]" style={poppinsFontStyle}>Home</Link>
                        <Link to="/priorities" className="font-bold text-[12px]  mb-[15px]" style={poppinsFontStyle}>Priorities</Link>
                        <Link to="/endorsements" className="font-bold text-[12px]  mb-[15px]"style={poppinsFontStyle} >Endorsements</Link>
                        <Link to="/news" className="font-bold text-[12px]  ">News & Events</Link>
                        {/* <Link to="https://secure.actblue.com/donate/daisaneformn" target="_blank">
                            <button className="text-[12px] font-medium py-[10px] pl-[31px] pr-[31.49px] bg-[#12225D] text-white rounded-[10px]" style={poppinsFontStyle}>Donate</button>
                        </Link> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
