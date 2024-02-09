
import access from "/family.jpg"
import "./Access.css"
import { Link } from "react-router-dom";
const Access = () => {
    // const customFontStyle = {
    //     fontFamily: "'Oswald', sans-serif",
    // };

    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };

    return (
        <div>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
            </style>
            <div className="lR xl:grid xl:grid-cols-2 2xl:gap-x-[96px] xl:gap-x-[68px]">
                <div>
                    <img className="2xl:h-[979px] 2xl:w-[803px] xl:w-[635px] xl:h-[774px] w-[310px] h-[386px] rounded-[10px] object-cover accessImg " src={access} alt="" />
                </div>
                <div>

                    <div className=" font-normal  ">
                        <p className="xl:leading-[37.5px] leading-[18px] xl:mt-[-12px] 2xl:mt-[-10px] mt-[25px]" style={poppinsFontStyle}>Access is a powerful thing. While growing up in one of the world’s largest refugee camps, the hope of getting access to opportunities sustained me.</p>
                        <p className="xl:leading-[37.5px] leading-[18px] 2xl:pt-[50px] xl:pt-[35px] pt-[25px] para" style={poppinsFontStyle}>Access to secure and stable housing. Access to better education. Access to security and safety. Access to a better healthcare system.</p>
                        <p className="xl:leading-[37.5px] leading-[18px] 2xl:pt-[50px] xl:pt-[35px] pt-[25px] para" style={poppinsFontStyle}>Access to opportunities that pave the way for a better life</p>
                        <p className="xl:leading-[37.5px] leading-[18px] 2xl:pt-[50px] xl:pt-[35px] pt-[25px] para" style={poppinsFontStyle}>
                            When I arrived in the United States fifteen years ago as an immigrant, I felt, for the first time, that a better life was within reach; and it was because of the opportunities this country provides.
                        </p>
                        <p className="xl:leading-[37.5px] leading-[18px] 2xl:pt-[50px] xl:pt-[35px] pt-[25px] para" style={poppinsFontStyle}>I’ve channeled my efforts and experiences into embracing virtually every opportunity I was given or came across. I have graduated from St. Cloud State University twice. I’ve started small businesses and become an employer right here in St. Cloud. I’ve served in and supported numerous important and life-changing organizations and initiatives.</p>
                        <p className="xl:leading-[37.5px] leading-[18px] 2xl:pt-[50px] xl:pt-[35px] pt-[25px] para" style={poppinsFontStyle}>I am a small business owner, a father of a five-year-old, and an advocate for a more just, better, and brighter future for our children and our community. What does that look like? I want thriving small businesses, high-quality educational systems and opportunities, an improved quality of life, and a society that values individual well-being, liberty, and freedom.</p>
                        <p className="xl:leading-[37.5px] leading-[18px] 2xl:pt-[50px] xl:pt-[35px] pt-[25px] para" style={poppinsFontStyle}>Join me in my bid for the Minnesota House of Representatives to ensure our community has a strong, effective, and hopeful leader representing us in our state’s capital, to ensure our community has access to opportunities and resources in building a more vibrant community.</p>
                    </div>
                    <div className="2xl:mt-[50px] xl:mt-[35px] mt-[25px] xl:mb-[200px] 2xl:mb-[250px] mb-[60px] para">
                        <Link to= "/priorities"><button className="py-[10px] px-[10px] xl:py-[21px] xl:text-[25px] text-[12px] font-medium xl:px-[32px] text-white bg-[#12225D] xl:rounded-[10px] rounded-[6px]" style={poppinsFontStyle}>Learn about Abdi's Priorities</button></Link>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Access;