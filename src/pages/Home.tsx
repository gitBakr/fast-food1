import { useState } from 'react';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import OrderModal from '../components/OrderModal';
import WhyUs from '../components/WhyUs';
import { useTranslation } from 'react-i18next';

interface MenuItem {
  id: string;
  name: string;
  type: string;
  image: string;
  price: {
    base: number;
    supplements: { name: string; price: number; }[];
  };
  category: string;
  description: string;
}

const featuredItems = [
  {
    id: 'classique',
    name: 'Le Classique',
    type: 'classique',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569',
    price: {
      base: 8.50,
      supplements: [
        { name: 'Double viande', price: 2.00 },
        { name: 'Fromage supplémentaire', price: 1.00 },
        { name: 'Bacon', price: 1.50 }
      ]
    },
    category: 'Sandwichs Classiques',
    description: 'Jambon, fromage, salade, tomates, mayonnaise maison',
    ingredients: [
      { name: 'Jambon' },
      { name: 'Fromage' },
      { name: 'Salade' },
      { name: 'Tomates' },
      { name: 'Mayonnaise' }
    ],
    isVegetarian: false,
    isSpicy: false,
    calories: 450
  },
  {
    id: 'vegetarien',
    name: 'Le Végétarien',
    type: 'vegetarien',
    image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc',
    price: {
      base: 9.50,
      supplements: [
        { name: 'Double portion légumes', price: 1.50 },
        { name: 'Avocat', price: 2.00 },
        { name: 'Fromage végétal', price: 1.50 }
      ]
    },
    category: 'Végétariens',
    description: 'Légumes grillés, houmous, roquette, sauce tahini',
    ingredients: [
      { name: 'Légumes grillés' },
      { name: 'Houmous' },
      { name: 'Roquette' },
      { name: 'Sauce tahini' }
    ],
    isVegetarian: true,
    isSpicy: false,
    calories: 380
  },
  {
    id: 'gourmet',
    name: 'Le Gourmet',
    type: 'gourmet',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980',
    price: {
      base: 11.50,
      supplements: [
        { name: 'Double poulet', price: 2.50 },
        { name: 'Extra avocat', price: 2.00 },
        { name: 'Double bacon', price: 2.00 }
      ]
    },
    category: 'Spécialités',
    description: 'Poulet grillé, avocat, bacon, tomates séchées, sauce spéciale',
    ingredients: [
      { name: 'Poulet grillé' },
      { name: 'Avocat' },
      { name: 'Bacon' },
      { name: 'Tomates séchées' },
      { name: 'Sauce spéciale' }
    ],
    isVegetarian: false,
    isSpicy: true,
    calories: 580
  }
];

const Home = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-amber-50 to-white">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t('menu.popular')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <MenuCard 
              key={item.id}
              id={item.id}
              name={t(`menuItems.${item.id}.name`)}
              description={t(`menuItems.${item.id}.description`)}
              image={item.image}
              price={item.price}
              onOrder={() => handleOpenModal(item)}
            />
          ))}
        </div>
      </div>

      <WhyUs />

      <OrderModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
};

export default Home;
