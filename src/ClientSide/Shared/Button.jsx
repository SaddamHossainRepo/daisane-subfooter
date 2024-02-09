import './Button.css';

const Button = () => {
    return (
        <div>
            <div className='main-div rounded-md flex justify-center bg-[#D9D9D9] mb-[60px] h-[97px] w-[443px]'>
                <btn className='monthly-btn rounded-md flex justify-center items-center mt-5 mb-5 pt-[21px] pb-[21px] pl-[57px] pr-[57px]'>
                    Monthly
                </btn>
                <btn className='one-time-btn rounded-md flex justify-center items-center pt-[21px] mt-5 mb-5 pb-[21px] pl-[57px] pr-[57px]'>
                    One Time
                </btn>
            </div>
        </div>
    );
};

export default Button;