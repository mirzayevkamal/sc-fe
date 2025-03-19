
import { useTranslation } from 'react-i18next';
import { SubscriptionCardItem } from '../types/common.types';

const SubscriptionCard = ({
    price,
    onSelect,
    agents,
    plan,
}: SubscriptionCardItem) => {
    const { t: translate } = useTranslation();

    return (
        <div className='p-[40px] bg-white rounded-[26px] grid gap-[20px] w-full max-w-[400px]'>
            <div className='flex flex-col items-start'>
                <span className='font-[400] text-[20px] text-dark mb-[10px]'>
                    {translate(plan || '')}
                </span>
                <div className='flex items-center gap-2'>
                    <span className='font-[700] text-[36px] text-dark mb-[10px]'>
                        {price}
                    </span>
                    <span>{translate('perMonth')}</span>
                </div>
                <span className='font-[500] text-[24px] text-dark'>
                    {translate('perEmployee', { count: agents })}
                </span>
            </div>
            <button
                onClick={onSelect}
                className='bg-secondary-400 text-primary rounded-[3.5px] h-[50px]'
            >
                {translate('subscribeNow')}
            </button>
        </div>
    );
};

export default SubscriptionCard;
