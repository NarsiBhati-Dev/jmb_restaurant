import React from 'react';
import Image from 'next/image';

interface MenuItemCardProps {
  name: string;
  image: string;
  price: string;
  description: string;
}

const MenuItemCard = ({
  name,
  image,
  price,
  description,
}: MenuItemCardProps) => {
  return (
    <div className='w-full rounded-lg shadow-xl'>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className='aspect-video h-56 w-full rounded-t-lg sm:aspect-square'
      />
      <div className='p-4'>
        <h4 className='text-2xl font-bold'>{name}</h4>
        <p className='py-2 tracking-tight text-gray-600'>{description}</p>
        <p className='text-jmb-red py-2 font-bold'>{price}</p>
      </div>
    </div>
  );
};
export default MenuItemCard;
