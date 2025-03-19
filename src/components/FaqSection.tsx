import { SAccordion, SAccordionGroup } from '@salla.sa/admin-ui-react';
import { faqData } from '../constants/data';
import { useTranslation } from 'react-i18next';


const FAQSectionContainer = () => {
    const { t: translate } = useTranslation();

    return (
        <div className='bg-white px-[48px] md:px-[140px] py-[72px] w-full'>
            <h2 className='font-[700] text-[36px] text-primary'>
                {translate('faq')}
            </h2>
            <span className='block mb-[34px] font-[400] text-[18px] text-dark-200'>
                {translate('faqDesc')}
            </span>
            <SAccordionGroup id='faq' name='faq' theme='default'>
                {faqData.map((item, index) => (
                    <SAccordion
                        key={index}
                        id={item.id.toString()}
                        theme='light'
                        wide
                        className='border-b border-[#EEEEEE]'
                    >
                        <div slot='head' className='flex items-center gap-2'>
                            <span className='flex items-center justify-center text-[14px] font-[700] w-[32px] h-[32px] text-primary rounded-full bg-secondary-300'>
                                {index + 1}
                            </span>
                            <span className='font-[700] text-[18px]'>
                                {translate(item.title)}
                            </span>
                        </div>
                        <div slot='body' className='text-start'>{translate(item.description)}</div>
                    </SAccordion>
                ))}
            </SAccordionGroup>
        </div>
    );
};

export default FAQSectionContainer;
