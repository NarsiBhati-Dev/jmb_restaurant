import getPageMetadata from '@/lib/getPageMetadata';
import React from 'react';
import { menuItems } from '@/data/menuList';
import MenuItemCard from '@/components/menu-item-card';
import { JSON_LD_Menu } from '@/data/json-ld';

export const metadata = getPageMetadata({ title: 'Menu', path: 'menu' });

const MenuPage = () => {
  return (
    <main className='mx-auto max-w-5xl px-2 py-12 text-gray-800 md:px-8'>
      <h1 className='text-jmb-red mb-8 text-center text-4xl font-extrabold md:text-6xl'>
        Our Menu
      </h1>

      <div className='space-y-8'>
        {Object.entries(menuItems).map(([category, items]) => (
          <section
            id={category}
            key={category}
            className='rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg'
            aria-labelledby={`${category}-heading`}
          >
            <h2
              id={`${category}-heading`}
              className='text-jmb-red mb-6 text-2xl font-bold capitalize md:text-3xl'
            >
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h2>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {items.map(item => (
                <MenuItemCard
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  key={`${category}-${item.name}`}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_Menu) }}
      />
    </main>
  );
};

export default MenuPage;
