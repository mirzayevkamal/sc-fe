import { useTranslation } from "react-i18next";

const MainBanner = () => {

    const { t: translate } = useTranslation();

    return (
        <div className='bg-secondary-300 p-[40px]'>
            <h1 className='font-[700] text-[60px] text-primary text-center'>
                {translate('sallaChat')}
            </h1>
            <p className='font-[400] text-[24px] text-center text-primary mt-[8px] max-w-[760px] mx-auto'>
                {translate('sallaDescription')}
            </p>
            <div className='flex justify-center mt-[24px]'>
                <button
                    className='bg-primary text-secondary-100 rounded-[8px] py-[12px] px-[24px]'
                >
                    {translate('ctaButton')}
                </button>
            </div>
            <div className='flex justify-center my-[24px] max-w-[750px] mx-auto'>
                <img
                    width={650}
                    height={560}
                    src='/assets/svg/mainbanner.svg'
                    alt='banner'
                />
            </div>
        </div>
    );
};

export default MainBanner;
