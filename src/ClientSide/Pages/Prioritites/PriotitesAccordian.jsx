import { useState } from 'react';
import pSide from '/pSide.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./accordian.css"

const PriotitesAccordian = () => {
    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (accordionNumber) => {
        setOpenAccordion(accordionNumber === openAccordion ? 0 : accordionNumber);
    };

    const customFontStyle = {
        fontFamily: "'Oswald', sans-serif",
    };

    const poppinsFontStyle = {
        fontFamily: "'Poppins', sans-serif",
    };

    return (
        <div className='lR xl:flex '>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
        `}
            </style>
            <div>
                <img className='2xl:w-[626px] xl:w-[566px] w-[310px] h-[386px] xl:h-[805px] 2xl:h-[890px] object-cover rounded-[10px]' src={pSide} alt="" />
            </div>
            <div className='2xl:w-[898px] xl:w-[634px] w-[310px] 2xl:ml-[96px] xl:ml-[70px]'>
                <div className=" rounded 2xl:mb-[50px] xl:mb-[35px] mb-[15px] mt-[25px] xl:mt-0 2xl:mt-0 ">
                    <div
                        className="flex items-center justify-between xl:rounded-[10px] rounded-[6px] cursor-pointer xl:pl-[35px] xl:pr-[50px] pl-[15px] pr-[15px]  2xl:pl-[50px] 2xl:pr-[100px] bg-[#12225D]"
                        onClick={() => toggleAccordion(1)}
                    >
                        <h6 className="2xl:text-[30px] xl:text-[25px] xl:py-[41px] text-[12px] py-[14px]    font-bold  2xl:py-[50px] text-white" style={customFontStyle}>Affordable Housing</h6>
                        <span className={`transform ${openAccordion === 1 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            <div className='h-[21px] w-[21px] 2xl:h-[54px] 2xl:w-[54px]  bg-[#B6BACD]  rounded-full flex justify-center items-center'>
                                <KeyboardArrowDownIcon className='2xl:w-40 2xl:h-80'></KeyboardArrowDownIcon>
                            </div>
                        </span>
                    </div>
                    {openAccordion === 1 && (
                        <div className="xl:pl-[35px] xl:pt-[35px] pl-[15px] pt-[15px] 2xl:pl-[50px] 2xl:pt-[50px] bg-white topSpace  ">
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px]  font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Housing is not just a commodity; it is a fundamental human right that lies at the core of a
                                healthy and secure life, offering stability, dignity, and a profound sense of belonging.  </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As someone who has experienced displacement as a refugee, I know too well the importance of stable housing. </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Whether we rent or own our homes, the importance of a secure and affordable place to live
                                cannot be overstated. It is the foundation upon which we build our lives, raise our families, and
                                actively contribute to our community. </p>

                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Despite the historic $1 billion investment spanning the entire housing spectrum, the largest
                                appropriation in the state's history, many families in our community encounter significant
                                hurdles in securing housing that aligns with their needs, budget, facilitates equity-building
                                through homeownership, and fosters a strong sense of safety. </p>

                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As your State Representative, I will: </p>
                            <ul className='list-disc 2xl:pl-[22px] xl:pl-[20px] pl-[16px] '>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Advocate for an increase in state bonding dollars to augment the overall housing
                                    investment across the state. </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Collaborate with renters to ensure equitable treatment by landlords and enforce
                                    existing legal protections.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Foster more public-private partnerships to facilitate the development of additional
                                    affordable housing, coupled with the implementation of new rent control measures in
                                    Saint Cloud.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className=" rounded 2xl:mb-[50px] xl:mb-[35px] mb-[15px]">
                    <div
                        className="flex items-center justify-between xl:rounded-[10px] rounded-[6px] cursor-pointer xl:pl-[35px] xl:pr-[50px] pl-[15px] pr-[15px] 2xl:pl-[50px] 2xl:pr-[100px] bg-[#12225D]"
                        onClick={() => toggleAccordion(2)}
                    >
                        <h6 className="xl:text-[25px] xl:py-[41px] text-[12px] py-[14px] 2xl:text-[30px] font-bold 2xl:py-[50px] text-white" style={customFontStyle}>Invest in Education</h6>
                        <span className={`transform ${openAccordion === 2 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            <div className='h-[21px] w-[21px] 2xl:h-[54px] 2xl:w-[54px] bg-[#B6BACD] rounded-full flex justify-center items-center'>
                                <KeyboardArrowDownIcon className='2xl:w-40 2xl:h-80'></KeyboardArrowDownIcon>
                            </div>
                        </span>
                    </div>
                    {openAccordion === 2 && (
                        <div className="xl:pl-[35px] xl:pt-[35px] pl-[15px] pt-[15px] 2xl:pl-[50px] 2xl:pt-[50px] bg-white  topSpace ">
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px]  font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle} >Every child, regardless of their zip code, deserves access to the best education in the world. This necessitates a substantial investment in our K-12 education system to ensure that every child in
                                Minnesota is equipped with the knowledge and skills required for the contemporary world.
                                Our schools are currently underfunded, our teachers lack the necessary investment, and,
                                unfortunately, our children are bearing the brunt of these deficiencies. </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As your state representative, my commitment to education includes:
                            </p>
                            <ul className='list-disc 2xl:pl-[22px] xl:pl-[20px] pl-[16px] '>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Advocating for the full funding of public education in Minnesota. </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Increasing funding specifically dedicated to early childhood education, including the
                                    provision of need-based subsidies for childcare and transportation. </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}> Championing community-based and culturally competent educational programs
                                    designed for children of all ages</li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}> Advocating for the establishment of full-service community schools that
                                    comprehensively support students and their families, both inside and outside the
                                    classroom.</li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Investing in the professional development and well-being of our educators.</li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Supporting the "Grow Your Own" initiative, aiming to increase the number of educators
                                    from diverse backgrounds to better reflect the increasingly diverse student population. </li>

                            </ul>
                        </div>
                    )}
                </div>

                <div className=" rounded 2xl:mb-[50px] xl:mb-[35px] mb-[15px]">
                    <div
                        className="flex items-center justify-between xl:rounded-[10px] rounded-[6px] cursor-pointer xl:pl-[35px] xl:pr-[50px] pl-[15px] pr-[15px] 2xl:pl-[50px] 2xl:pr-[100px] bg-[#12225D]"
                        onClick={() => toggleAccordion(3)}
                    >
                        <h6 className="xl:text-[25px] xl:py-[41px] text-[12px] py-[14px] 2xl:text-[30px] font-bold 2xl:py-[50px] text-white" style={customFontStyle}>Early Childhood Education</h6>
                        <span className={`transform ${openAccordion === 3 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            <div className='h-[21px] w-[21px] 2xl:h-[54px] 2xl:w-[54px] bg-[#B6BACD] rounded-full flex justify-center items-center'>
                                <KeyboardArrowDownIcon className='2xl:w-40 2xl:h-80'></KeyboardArrowDownIcon>
                            </div>
                        </span>
                    </div>
                    {openAccordion === 3 && (
                        <div className="xl:pl-[35px] xl:pt-[35px] pl-[15px] pt-[15px] 2xl:pl-[50px] 2xl:pt-[50px] bg-white  topSpace ">
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px]  font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Education is a journey that begins at birth, not just when a child enters kindergarten. Every
                                child in Minnesota deserves a solid foundation for a successful life. We must start investing in
                                our children early on and in various community and learning settings.  </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>The childcare industry has been historically underfunded, despite being the initial step in our
                                children's educational journey and a crucial support for our workforce and overall economic
                                health. The lack of safe, quality, and affordable childcare options places undue pressure on
                                residents, often forcing them to make difficult choices, such as staying at home or relocating.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As your legislator, I will support:</p>
                            <ul className='list-disc 2xl:pl-[22px] xl:pl-[20px] pl-[16px] '>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Expand eligibility criteria for childcare assistance program.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Foster childcare provider startups.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Use data to inform early childhood policy decisions.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className=" rounded 2xl:mb-[50px] xl:mb-[35px] mb-[15px]">
                    <div
                        className="flex items-center justify-between xl:rounded-[10px] rounded-[6px] cursor-pointer xl:pl-[35px] xl:pr-[50px] pl-[15px] pr-[15px] 2xl:pl-[50px] 2xl:pr-[100px] bg-[#12225D]"
                        onClick={() => toggleAccordion(4)}
                    >
                        <h6 className="xl:text-[25px] xl:py-[41px] text-[12px] py-[14px] 2xl:text-[30px] font-bold 2xl:py-[50px] text-white" style={customFontStyle}>Supporting Small Businesses
                        </h6>
                        <span className={`transform ${openAccordion === 4 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            <div className='h-[21px] w-[21px] 2xl:h-[54px] 2xl:w-[54px] bg-[#B6BACD] rounded-full flex justify-center items-center'>
                                <KeyboardArrowDownIcon className='2xl:w-40 2xl:h-80'></KeyboardArrowDownIcon>
                            </div>
                        </span>
                    </div>
                    {openAccordion === 4 && (
                        <div className="xl:pl-[35px] xl:pt-[35px] pl-[15px] pt-[15px] 2xl:pl-[50px] 2xl:pt-[50px] bg-white  topSpace ">
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px]  font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Our economy is facing significant challenges that directly impact each and every one of us. The
                                high costs of living have burdened our community. Inflation has further exacerbated the
                                challenges. Rising prices for essential goods and services have put a strain on household
                                budgets, making it even more challenging for families to make ends meet.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Our small businesses, the backbone of our economy, are struggling. They face numerous
                                hurdles, from limited resources to complex, and oftentimes unnecessary regulations.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As a small business owner who has chosen to raise my family here, I understand firsthand the
                                vital role that small businesses play in our community. They not only provide essential jobs that
                                sustain households but also contribute to housing and overall economic stability for families.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As your legislator, I will:</p>
                            <ul className='list-disc 2xl:pl-[22px] xl:pl-[20px] pl-[16px] '>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Support investments in the St. Cloud Downtown Revitalization project to enhance and
                                    benefit our entire region.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Advocate for workers' rights, ensuring they experience safe, secure, and fair working
                                    conditions.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Work to secure additional investments for our small businesses, which serve as critical
                                    economic engines, ensuring they have the support needed to rebuild and thrive.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className=" rounded 2xl:mb-[50px] xl:mb-[35px] mb-[15px]">
                    <div
                        className="flex items-center justify-between xl:rounded-[10px] rounded-[6px] cursor-pointer xl:pl-[35px] xl:pr-[50px] pl-[15px] pr-[15px] 2xl:pl-[50px] 2xl:pr-[100px] bg-[#12225D]"
                        onClick={() => toggleAccordion(5)}
                    >
                        <h6 className="xl:text-[25px] xl:py-[41px] text-[12px] py-[14px] 2xl:text-[30px] font-bold 2xl:py-[50px] text-white" style={customFontStyle}>Climate Justice </h6>
                        <span className={`transform ${openAccordion === 5 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            <div className='h-[21px] w-[21px] 2xl:h-[54px] 2xl:w-[54px] bg-[#B6BACD] rounded-full flex justify-center items-center'>
                                <KeyboardArrowDownIcon className='2xl:w-40 2xl:h-80'></KeyboardArrowDownIcon>
                            </div>
                        </span>
                    </div>
                    {openAccordion === 5 && (
                        <div className="xl:pl-[35px] xl:pt-[35px] pl-[15px] pt-[15px] 2xl:pl-[50px] 2xl:pt-[50px] bg-white  topSpace ">
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px]  font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Climate change is real, and it is an existential threat to our planet and humanity. It affects us all.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>And for our state, it is threatening the very core of our identity: Farmers are grappling with
                                increased challenges in supplying our food, the aging electrical grid is strained by extreme heat,
                                and our winters have become more challenging with prolonged sub-zero cold snaps.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Minnesota is already a leader when it comes to being a leader on climate change, and we
                                need to ensure we continue to champion progressive climate actions.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As your legislator, I will: </p>
                            <ul className='list-disc 2xl:pl-[22px] xl:pl-[20px] pl-[16px] '>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Advocate implementing strategies to significantly reduce carbon emissions, contributing
                                    to the global effort to combat climate change.

                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Promote the growth of green energy sources such as wind, solar, biomass, and other
                                    sustainable alternatives to diversify our energy portfolio and decrease reliance on
                                    traditional fossil fuels.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Pushed for increase investment in state and local infrastructure for waste management
                                    and drinking water, ensuring that our communities have robust systems capable of
                                    withstanding the challenges posed by climate change.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className=" rounded 2xl:mb-[50px] xl:mb-[35px] mb-[15px]">
                    <div
                        className="flex items-center justify-between xl:rounded-[10px] rounded-[6px] cursor-pointer xl:pl-[35px] xl:pr-[50px] pl-[15px] pr-[15px] 2xl:pl-[50px] 2xl:pr-[100px] bg-[#12225D]"
                        onClick={() => toggleAccordion(6)}
                    >
                        <h6 className="xl:text-[25px] xl:py-[41px] text-[12px] py-[14px] 2xl:text-[30px] font-bold 2xl:py-[50px] text-white" style={customFontStyle}>Healthcare </h6>
                        <span className={`transform ${openAccordion === 6 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            <div className='h-[21px] w-[21px] 2xl:h-[54px] 2xl:w-[54px] bg-[#B6BACD] rounded-full flex justify-center items-center'>
                                <KeyboardArrowDownIcon className='2xl:w-40 2xl:h-80'></KeyboardArrowDownIcon>
                            </div>
                        </span>
                    </div>
                    {openAccordion === 6 && (
                        <div className="xl:pl-[35px] xl:pt-[35px] pl-[15px] pt-[15px] 2xl:pl-[50px] 2xl:pt-[50px] bg-white  topSpace ">
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px]  font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Climate change is real, and it is an existential threat to our planet and humanity. It affects us all.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>All Minnesotans deserve access to quality, affordable healthcare services to support their
                                physical and mental well-being. And in doing so, we shouldn’t go bankrupt or sacrifice our
                                family’s safety net to buy a life-saving prescriptions. </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Yet so many in our state are uninsured.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>It is imperative that individuals are not forced to forego necessary medical assistance due to
                                financial constraints. </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As your legislator, I will: </p>
                            <ul className='list-disc 2xl:pl-[22px] xl:pl-[20px] pl-[16px] '>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Advocate the expansion of MinnesotaCare
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Negotiate for reduced pharmaceutical prices to make life-saving medications more
                                    accessible.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Work diligently to eliminate racial, sexual, and gender-based discrimination within the
                                    healthcare system.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className=" rounded 2xl:mb-[50px] xl:mb-[35px] mb-[15px]">
                    <div
                        className="flex items-center justify-between xl:rounded-[10px] rounded-[6px] cursor-pointer xl:pl-[35px] xl:pr-[50px] pl-[15px] pr-[15px] 2xl:pl-[50px] 2xl:pr-[100px] bg-[#12225D]"
                        onClick={() => toggleAccordion(7)}
                    >
                        <h6 className="xl:text-[25px] xl:py-[41px] text-[12px] py-[14px] 2xl:text-[30px] font-bold 2xl:py-[50px] text-white" style={customFontStyle}>Reproductive Rights </h6>
                        <span className={`transform ${openAccordion === 7 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            <div className='h-[21px] w-[21px] 2xl:h-[54px] 2xl:w-[54px] bg-[#B6BACD] rounded-full flex justify-center items-center'>
                                <KeyboardArrowDownIcon className='2xl:w-40 2xl:h-80'></KeyboardArrowDownIcon>
                            </div>
                        </span>
                    </div>
                    {openAccordion === 7 && (
                        <div className="xl:pl-[35px] xl:pt-[35px] pl-[15px] pt-[15px] 2xl:pl-[50px] 2xl:pt-[50px] bg-white  topSpace ">
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px]  font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Women should have the autonomy to make personal decisions about their reproductive health,
                                guided by their own beliefs, values, and circumstances. It is essential to uphold and protect the
                                right to make choices without undue interference, ensuring that women have the freedom to
                                make decisions that are best for their well-being. </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As your legislator, I will: </p>
                            <ul className='list-disc 2xl:pl-[22px] xl:pl-[20px] pl-[16px] '>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Utilize my legislative influence to safeguard and uphold a woman's right to make choices
                                    regarding her reproductive health.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Advocate for legislation that empowers women, allowing them to make well-informed
                                    and safe decisions about their health.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Champion unbiased and comprehensive sex education in schools, ensuring ageappropriate information that equips our children to make informed choices about
                                    sexual activity.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Guarantee access to medical care for women, irrespective of the decision they make
                                    regarding a pregnancy.
                                </li>
                                <li className='xl:text-[19px] 2xl:text-[25px] text-[12px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>
                                    Acknowledge and respect the autonomy of women, trusting them to make the choices
                                    that align with their individual circumstances and well-being.
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className=" rounded 2xl:mb-[50px] xl:mb-[35px] mb-[15px]">
                    <div
                        className="flex items-center justify-between xl:rounded-[10px] rounded-[6px] cursor-pointer xl:pl-[35px] xl:pr-[50px] pl-[15px] pr-[15px] 2xl:pl-[50px] 2xl:pr-[100px] bg-[#12225D]"
                        onClick={() => toggleAccordion(8)}
                    >
                        <h6 className="xl:text-[25px] xl:py-[41px] text-[12px] py-[14px] 2xl:text-[30px] font-bold 2xl:py-[50px] text-white" style={customFontStyle}>Public Safety </h6>
                        <span className={`transform ${openAccordion === 8 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                            <div className='h-[21px] w-[21px] 2xl:h-[54px] 2xl:w-[54px] bg-[#B6BACD] rounded-full flex justify-center items-center'>
                                <KeyboardArrowDownIcon className='2xl:w-40 2xl:h-80'></KeyboardArrowDownIcon>
                            </div>
                        </span>
                    </div>
                    {openAccordion === 8 && (
                        <div className="xl:pl-[35px] xl:pt-[35px] pl-[15px] pt-[15px] 2xl:pl-[50px] 2xl:pt-[50px] bg-white  topSpace ">
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px]  font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Everyone in our community deserves to feel safe. As someone who grew up a troubled part of
                                the world, I understand the high price of an unsafe community, and it is crucial to preserve and
                                protect that sense of safety at all costs.</p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>As a supporter of the Second Amendment, I believe that law-abiding citizens should have access
                                to firearms for self-defense and sporting purposes.  </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>I also believe that we must take steps to ensure the safety of our communities, schools, and
                                citizens from gun violence.  </p>
                            <p className='xl:text-[19px] 2xl:text-[25px] xl:leading-[28.5px] 2xl:leading-[37.5px] mt-[25px] font-normal text-justify text-[#959595] accordianText' style={poppinsFontStyle}>Likewise, I am an advocate for supporting our public safety personnel, including law
                                enforcement. My commitment to this cause is demonstrated through my involvement as a
                                member and signatory of the St Cloud Community Policing Agreement. This initiative has
                                successfully fostered closer collaboration between law enforcement and the diverse
                                communities they serve, ensuring effective protection for all.</p>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PriotitesAccordian;
