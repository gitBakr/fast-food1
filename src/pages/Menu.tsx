import { useState } from 'react';
import OrderModal from '../components/OrderModal';

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSandwich, setSelectedSandwich] = useState<string | null>(null);

  const categories = [
    'Tous', 'Classiques', 'Végétariens', 'Spécialités'
  ];

  const sandwiches = [
    {
      name: 'Le Classique',
      image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980',
      price: 8.50,
      category: 'Classiques',
      description: 'Jambon, fromage, salade, tomates',
      allergenes: 'Gluten, Lactose'
    },
    {
      name: 'Le Végétarien',
      image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc',
      price: 9.50,
      category: 'Végétariens',
      description: 'Avocat, légumes grillés, houmous',
      allergenes: 'Gluten, Sésame'
    },
    {
      name: 'Le Gourmet',
      image: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c',
      price: 11.50,
      category: 'Spécialités',
      description: 'Poulet grillé, bacon, avocat, sauce spéciale',
      allergenes: 'Gluten, Œufs'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSandwiches = sandwiches.filter(sandwich => {
    const matchesCategory = selectedCategory === 'Tous' || sandwich.category === selectedCategory;
    const matchesSearch = sandwich.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sandwich.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Notre Menu</h1>
          <p className="mt-2 text-gray-600">Découvrez nos délicieux sandwichs préparés avec des ingrédients frais</p>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recherche */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Rechercher
              </label>
              <input
                type="text"
                id="search"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                placeholder="Rechercher un sandwich..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Catégories */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Liste des sandwichs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSandwiches.map((sandwich, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={sandwich.image}
                alt={sandwich.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{sandwich.name}</h2>
                  <span className="text-amber-600 font-bold">{sandwich.price.toFixed(2)}€</span>
                </div>
                <p className="text-gray-600 mb-4">{sandwich.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  Allergènes: {sandwich.allergenes}
                </div>
                <button
                  onClick={() => {
                    setSelectedSandwich(sandwich.name);
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
                >
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredSandwiches.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Aucun sandwich ne correspond à vos critères
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos filtres pour voir plus de résultats
            </p>
          </div>
        )}
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Menu; 