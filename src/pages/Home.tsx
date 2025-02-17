import { useState } from 'react';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import OrderModal from '../components/OrderModal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos sandwichs populaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <MenuCard 
              key={item.id}
              {...item}
              onOrder={() => handleOpenModal(item)}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi nous choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ingrédients Frais</h3>
              <p className="text-gray-500">Des produits locaux et de saison</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Préparation Minute</h3>
              <p className="text-gray-500">Chaque sandwich préparé à la commande</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Livraison Rapide</h3>
              <p className="text-gray-500">Livraison en 30 minutes ou moins</p>
            </div>
          </div>
        </div>
      </div>

      <OrderModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
};

export default Home;
