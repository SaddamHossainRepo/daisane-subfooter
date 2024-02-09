import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import person2 from '../../../assets/images/news/person2.png';
import person3 from '../../../assets/images/news/person3.png';
import person4 from '../../../assets/images/news/person4.png';
import './NewsCarousel.css';


const NewsCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='carousel-div'>
            <Carousel responsive={responsive}>
                <div className='single-card-div pb-10'>
                    {/* card 1 */}
                    <div className="carousel-card border rounded-2xl mr-[83px] w-[485px]  bg-base-100 shadow-xl">
                        <figure><img className='carousel-card-img mb-[35px] object-cover' src={person2} alt="Shoes" /></figure>
                        <div className="carousel-des-div">
                            <h5 className='title-2 carousel-title mb-[25px] font-bold text-[25px] pl-5'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                            <h5 className='title-3 carousel-des mb-[40px] text-[#7B7882] font-normal pl-5 text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                            <div className="justify-start pl-5 pb-5">
                                <div className="badge mt-0    learn-more">READ MORE</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-card-div'>
                    {/* card 2 */}
                    <div className="carousel-card mr-[83px] w-[485px]  bg-base-100 shadow-xl">
                        <figure><img className='carousel-card-img mb-[35px] object-fill' src={person3} alt="Shoes" /></figure>
                        <div className="carousel-des-div">
                            <h5 className='title-2 carousel-title mb-[25px] font-bold  pl-5 text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                            <h5 className='title-3 carousel-des mb-[40px] text-[#7B7882]  pl-5 text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                            <div className=" justify-start pl-5 pb-5">
                                <div className="badge mt-0  learn-more">READ MORE</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-card-div'>
                    {/* card 3 */}
                    <div className="carousel-card mr-[83px] w-[485px]  bg-base-100 shadow-xl">
                        <figure><img className='carousel-card-img mb-[35px] object-fill' src={person4} alt="Shoes" /></figure>
                        <div className="carousel-des-div">
                            <h5 className='title-2 carousel-title mb-[25px] font-bold pl-5 text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                            <h5 className='title-3 carousel-des mb-[40px] text-[#7B7882] pl-5 text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                            <div className="card-actions justify-start pl-5 pb-5">
                                <div className="badge  learn-more">READ MORE</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='single-card-div'>
                    <div className="carousel-card mr-[83px] w-[485px]  bg-base-100 shadow-xl">
                        <figure><img className='carousel-card-img mb-[35px] object-fill' src={person2} alt="Shoes" /></figure>
                        <div className="carousel-des-div">
                            <h5 className='title-2 carousel-title mb-[25px] font-bold pl-5 text-[25px]'>Abdi Daisane: Entrepreneurial work for the community good</h5>
                            <h5 className='title-3 carousel-des mb-[40px] text-[#7B7882] pl-5 text-[25px]'>Abdi Daisane came to St. Cloud to finish his education. Since then, he’s been paying it forward.</h5>
                            <div className="card-actions justify-start pl-5 pb-5">
                                <div className="badge  learn-more">READ MORE</div>

                            </div>
                        </div>
                    </div>

                </div>
            </Carousel>;
        </div>
    );
};

export default NewsCarousel;