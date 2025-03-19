

import { CheckedIcon } from './icons';
import { subscriptionBenefits, subscriptionData } from '../constants/data';
import { useTranslation } from 'react-i18next';
import SubscriptionCard from './SubscriptionCard';

const Item = ({ title }: { title: string }) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='flex w-[18px] h-[18px]'>
                <CheckedIcon />
            </div>
            <span className='font-[400] mt-[1px] text-[18px] text-dark-300'>
                {title}
            </span>
        </div>
    );
};

const SubscriptionSectionContainer = () => {
    const { t: translate } = useTranslation();
    //   const { openSubscriptionPage } = useSubscription();

    return (
        <div className='bg-gray-100 py-[72px] px-[48px] md:px-[96px] z-10 relative'>
            <svg
                className='absolute top-0 left-0 z-[-1]'
                width='264'
                height='490'
                viewBox='0 0 264 490'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M144.565 401.7L251.72 149.939C280.577 82.16 253.502 2.82986 188.728 -34.5671L-84.9038 -192.549C-149.677 -229.945 -231.917 -213.728 -276.187 -154.848L-440.611 63.8487C-465.621 97.1114 -474.978 139.687 -466.242 180.662C-457.549 221.642 -431.547 257.248 -394.952 278.377L-64.0512 469.422C-27.4856 490.533 16.3513 495.248 56.2177 482.304C96.037 469.372 128.26 439.999 144.565 401.7ZM32.6945 414.222C11.3601 421.142 -11.1643 418.72 -30.7228 407.428L-357.92 218.52C-377.508 207.211 -390.876 188.911 -395.512 166.996C-400.186 145.06 -395.367 123.2 -381.99 105.387L-219.41 -110.857C-196.079 -141.886 -152.703 -150.456 -118.546 -130.736L152.025 25.479C186.174 45.1948 200.452 87.0414 185.242 122.769L79.2885 371.706C70.5505 392.197 53.9916 407.279 32.6945 414.222Z'
                    fill='white'
                />
            </svg>

            <h2 className='font-[700] text-[30px] text-primary text-center'>
                {translate('pricingTitle')}
            </h2>
            <span className='font-[400] mt-1 block text-[18px] text-dark-200 text-center'>
                {translate('pricingDesc')}
            </span>

            <span className='block font-[700] my-[32px] text-[30px] text-dark text-center'>
                {translate('monthlySub')}
            </span>

            <div className='w-full grid justify-center mt-[10px] mb-[8px]'>
                <div className='grid grid-cols-2 gap-y-[20px] gap-x-[40px]'>
                    {subscriptionBenefits.map((item, index) => (
                        <Item title={translate(item)} key={index} />
                    ))}
                </div>
            </div>

            <div className='flex justify-center flex-wrap mt-[32px] gap-[40px]'>
                {subscriptionData.map((item) => (
                    <SubscriptionCard
                        id={item.id}
                        plan={item.plan}
                        key={item.id}
                        price={item.price}
                        type={item.type}
                        agents={item.agents}
                        onSelect={() => { }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubscriptionSectionContainer;
