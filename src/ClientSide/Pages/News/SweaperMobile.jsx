import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import line from '../../../assets/images/news/line1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Sweaper.css';
// import './NewsCarousel.css';

import person2 from '../../../assets/images/news/person2.png';
import person3 from '../../../assets/images/news/person3.png';
import person4 from '../../../assets/images/news/person4.png';


// import required modules
import { Pagination } from 'swiper/modules';

export default function SweaperMobile() {
    return (
        <div className='pb-0 '>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                <div>
                    <SwiperSlide className='single-swiper pb-[56px]'>
                        <div className='single-card-div pb-10'>
                            {/* card 1 */}
                            <div className="carousel-card card-1 border rounded-2xl mr-[83px] w-[485px]  bg-base-100 shadow-xl">
                                <figure><img className='carousel-card-img mb-[35px] object-cover' src={person2} alt="Shoes" /></figure>
                                <div className="carousel-des-div">
                                    <h5 className='title-2 carousel-title mb-[25px] font-bold text-[25px] pl-5'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                                    <h5 className='title-3 carousel-des mb-[40px] text-[#7B7882] font-normal pl-5 text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                                    <div className="justify-start pl-5 pb-5">
                                        <div className="badge text-[12px]  learn-more">READ MORE</div>
                                        <div className='w-16 pt-1'>
                                            <img src={line} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </SwiperSlide>

                    {/* ----------- slider 2 -------- */}
                    <SwiperSlide className='single-swiper pb-[56px]'>
                        <div className='single-card-div pb-10'>
                            {/* card 2 */}
                            <div className="carousel-card card-1 mr-[83px] w-[485px]  bg-base-100 shadow-xl">
                                <figure><img className='carousel-card-img mb-[35px] object-fill' src={person3} alt="Shoes" /></figure>
                                <div className="carousel-des-div">
                                    <h5 className='title-2 carousel-title mb-[25px] font-bold  pl-5 text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                                    <h5 className='title-3 carousel-des mb-[40px] text-[#7B7882]  pl-5 text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                                    <div className=" justify-start pl-5 pb-5">
                                        <div className="badge text-[12px]  learn-more">READ MORE</div>
                                        <div className='w-16 pt-1'>
                                            <img src={line} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>


                    {/* ----------- slider 3 -------- */}
                    <SwiperSlide className='single-swiper pb-[56px]'>
                        <div className='single-card-div pb-10'>
                            {/* card 1 */}
                            <div className="carousel-card card-1 border rounded-2xl mr-[83px] w-[485px]  bg-base-100 shadow-xl">
                                <figure><img className='carousel-card-img mb-[35px] object-cover' src={person2} alt="Shoes" /></figure>
                                <div className="carousel-des-div">
                                    <h5 className='title-2 carousel-title mb-[25px] font-bold text-[25px] pl-5'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                                    <h5 className='title-3 carousel-des mb-[40px] text-[#7B7882] font-normal pl-5 text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                                    <div className="justify-start pl-5 pb-5">
                                        <div className="badge text-[12px]  learn-more">READ MORE</div>
                                        <div className='w-16 pt-1'>
                                            <img src={line} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                </div>

            </Swiper>
        </div>
    );
}
