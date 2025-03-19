'use client';
import clsx from 'clsx';
import { useState } from 'react';

import { InfoItem } from '../types/common.types';
import { useTranslation } from 'react-i18next';
import { infoData } from '../constants/data';


const Item = ({
    title,
    description,
    isActive,
    onClick,
}: {
    title: string;
    description: string;
    isActive?: boolean;
    onClick?: () => void;
}) => {
    const { t: translate } = useTranslation();
    return (
        <div
            onClick={onClick}
            className={clsx(
                'flex flex-col p-[16px] rounded-[4px] gap-[8px] border border-white cursor-pointer',
                isActive && 'bg-[#EEFCF9] border border-secondary-400 ',
            )}
        >
            <h4 className='font-[700] text-[30px] text-primary'>
                {translate(title)}
            </h4>
            <span className='font-[400] text-[14px] text-dark-300'>
                {translate(description)}
            </span>
        </div>
    );
};

const InformationSection = () => {
    const [selectedItem, setSelectedItem] = useState<InfoItem>(infoData[0]);
    const { t: translate } = useTranslation();

    return (
        <div className='grid  bg-white p-[48px]'>
            <h2 className='font-[700] text-[30px] text-primary text-center'>
                {translate('whyUsTitle')}
            </h2>
            <div className='grid md:grid-cols-2 md:px-[96px] py-[48px] items-center gap-[56px]'>
                <div className='grid order-2 md:order-1'>
                    {infoData.map((item) => (
                        <Item
                            onClick={() => setSelectedItem(item)}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            isActive={item.id === selectedItem.id}
                        />
                    ))}
                </div>
                <div className='md:h-[450px] order-1 md:order-2 flex justify-center items-center'>
                    <img width={650} height={550} src={selectedItem.image} alt='banner' />
                </div>
            </div>
        </div>

    );
};

export default InformationSection;
