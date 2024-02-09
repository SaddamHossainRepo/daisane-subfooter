
import supportImg from "/support.jpeg"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "sonner";
import "./EndrosmentSupport.css"

const EndrosmentSupport = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5fvqx5m', 'template_0gdndmj', form.current, 'TPPs56mCVgYp5HZlj')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };
    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
      };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
            </style>
            <Toaster />
            <div className="lR xl:grid xl:grid-cols-2   2xl:mb-[250px] xl:mb-[200px] mb-[60px]">
                <div className="2xl:w-[732px] 2xl:h-[836px] xl:w-[629px] xl:h-[735px] w-[310px] h-[386px] supportImg  ">
                    <img className="w-[100%] h-[100%] object-cover rounded-[10px]" src={supportImg} alt="support Img" />
                </div>
                <div className="xl:ml-[70px] 2xl:ml-auto ">
                    <h2 className="2xl:mt-[-20px] xl:mt-[-12px] mt-[25px]  2xl:leading-[91px] xl:leading-[70px] leading-[18px]  text" style={customFontStyle}>Join to support Abdi Daisane</h2>
                    <p className="2xl:pt-[50px]  xl:pt-[35px] xl:pb-[35px] pt-[15px] pb-[25px] 2xl:pb-[100px] TextSub" style={poppinsFontStyle}>As Abdi Daisane is building his political base, we would like to hear from you and possibly get your support. Please fill out the brief form if you would like to endorse Abdi Daisane for Minnesota House 14A. We will follow up with you!</p>

                    <div className="bg-[#F3F0F8] rounded-[10px]">
                        <div className="2xl:pt-[50px] xl:pt-[25px] xl:px-[50px] pt-[25px] px-[15px]">
                            <h4 className="text-black 2xl:text-[25px] xl:text-[20px] text-[12px]  2xl:mb-[7px] xl:mb-[15px] mb-[10px] font-semibold  formHeading" style={poppinsFontStyle}>ORGANIZATION OR THE PERSON'S NAME</h4>
                            <input className="xl:py-[19px] xl:pl-[15px] text-[#A4A4A4] xl:text-[20px] py-[11px] pl-[10px] text-[12px] outline-none bg-[#F3F0F8] border w-full border-[#444444] xl:rounded-[10px]  rounded-[6px]" style={poppinsFontStyle} type="text" name="user_name" placeholder="name" />
                        </div>
                        <div className="2xl:pt-[50px] xl:pt-[25px] xl:px-[50px] pt-[15px] px-[15px]">
                            <h4 className="text-black 2xl:text-[25px] xl:text-[20px] text-[12px] 2xl:mb-[7px] xl:mb-[15px] mb-[10px] font-semibold  formHeading" style={poppinsFontStyle}>EMAIL</h4>
                            <input className="xl:py-[19px] xl:pl-[15px] text-[#A4A4A4] xl:text-[20px] py-[11px] pl-[10px] text-[12px] outline-none bg-[#F3F0F8] border w-full border-[#444444] xl:rounded-[10px]  rounded-[6px]" style={poppinsFontStyle} type="text" name="user_email" placeholder="Email Address" />
                        </div>
                        <div className="2xl:pt-[50px] xl:pt-[25px] xl:px-[50px] pt-[15px] px-[15px]">
                            <h4 className="text-black 2xl:text-[25px] xl:text-[20px] text-[12px] 2xl:mb-[7px] xl:mb-[15px] mb-[10px] font-semibold  formHeading" style={poppinsFontStyle}>PHONE</h4>
                            <input className="xl:py-[19px] xl:pl-[15px] text-[#A4A4A4] xl:text-[20px] py-[11px] pl-[10px] text-[12px] outline-none bg-[#F3F0F8] border w-full border-[#444444] xl:rounded-[10px]  rounded-[6px]" style={poppinsFontStyle} type="text" name="user_phone" placeholder="Phone Address" />
                        </div>
                        <div className="2xl:pt-[50px] xl:pt-[25px] xl:px-[50px] pt-[15px] px-[15px]">
                            <h4 className="text-black 2xl:text-[25px] xl:text-[20px] text-[12px] 2xl:mb-[7px] xl:mb-[15px] mb-[10px] font-semibold  formHeading" style={poppinsFontStyle}>ADDRESS</h4>
                            <input className="xl:py-[19px] xl:pl-[15px] text-[#A4A4A4] xl:text-[20px] py-[11px] pl-[10px] text-[12px] outline-none bg-[#F3F0F8] border w-full border-[#444444] xl:rounded-[10px]  rounded-[6px]" name="user_address"  style={poppinsFontStyle} type="text" placeholder=" Address" />
                        </div>
                        <div className="2xl:pt-[50px] 2xl:pb-[50px]  xl:pt-[25px] xl:pb-[25px]   xl:px-[50px] pt-[15px] pb-[25px] px-[15px]">
                            <h4 className="text-black 2xl:text-[25px] xl:text-[20px] text-[12px] 2xl:mb-[7px] xl:mb-[15px] mb-[10px] font-semibold  formHeading" style={poppinsFontStyle}>WEBSITE</h4>
                            <input className="xl:py-[19px] xl:pl-[15px] text-[#A4A4A4] xl:text-[20px] py-[11px] pl-[10px] text-[12px] outline-none bg-[#F3F0F8] border w-full border-[#444444] xl:rounded-[10px]  rounded-[6px]" type="text" name="user_website" style={poppinsFontStyle} placeholder="www.exmple.com" />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => toast.success('Email Sent')} type="submit" className="w-full 2xl:mt-[50px] xl:mt-[35px] mt-[25px] bg-[#12225D] 2xl:text-[25px] xl:text-[20px] text-[12px] font-semibold rounded-[10px] 2xl:py-[30px] xl:py-[19px] py-[15px] text-white formHeading" style={poppinsFontStyle}>SEND</button>
                    </div>
                </div>
            </div>
        </form>
       
    );
};

export default EndrosmentSupport;