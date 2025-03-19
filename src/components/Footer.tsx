'use client';

import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t: translate } = useTranslation();

    return (
        <footer className='py-[48px]'>
            <div className='p-[32px] bg-secondary-300 mx-[48px] md:mx-[96px] flex flex-col md:flex-row justify-between items-center rounded-[12px]'>
                <div className='flex flex-col'>
                    <span className='text-[36px] text-primary font-[700]'>
                        {translate('footerCta')}
                    </span>
                    <span className='text-[18px] text-dark-300 font-[400]'>
                        {translate('footerCtaDesc')}
                    </span>
                </div>
                <button
                    className='bg-[#004D5A] text-secondary-100 rounded-[8px] flex items-center justify-center min-w-[140px] px-[4px] h-[56px] text-[18px] rounded-[12px] w-auto '
                >
                    {translate('footerCtaButton')}
                </button>
            </div>
        </footer>
    );
};

export default Footer;
