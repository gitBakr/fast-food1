import { useState } from 'react';
import OrderModal from '../components/OrderModal';

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

const SPECIALITES: MenuItem[] = [
  {
    id: 'mega-burger',
    name: 'Méga Burger',
    type: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    price: {
      base: 14.50,
      supplements: [
        { name: 'Double viande', price: 3.00 },
        { name: 'Extra fromage', price: 1.50 },
        { name: 'Bacon', price: 2.00 }
      ]
    },
    category: 'Burgers',
    description: 'Double steak haché, cheddar, bacon, oignons caramélisés, sauce spéciale'
  },
  {
    id: 'club-deluxe',
    name: 'Club Deluxe',
    type: 'club',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821',
    price: {
      base: 12.90,
      supplements: [
        { name: 'Double poulet', price: 2.50 },
        { name: 'Avocat', price: 2.00 }
      ]
    },
    category: 'Clubs',
    description: 'Triple étage avec poulet grillé, bacon, avocat, tomates, salade'
  },
  {
    id: 'wrap-supreme',
    name: 'Wrap Suprême',
    type: 'wrap',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f',
    price: {
      base: 11.50,
      supplements: [
        { name: 'Double garniture', price: 2.50 },
        { name: 'Sauce supplémentaire', price: 0.50 }
      ]
    },
    category: 'Wraps',
    description: 'Poulet croustillant, légumes frais, sauce caesar, parmesan'
  },
  {
    id: 'panini-gourmet',
    name: 'Panini Gourmet',
    type: 'panini',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586',
    price: {
      base: 10.90,
      supplements: [
        { name: 'Extra mozzarella', price: 2.00 },
        { name: 'Pesto', price: 1.00 }
      ]
    },
    category: 'Paninis',
    description: 'Mozzarella di bufala, tomates séchées, jambon de Parme, roquette'
  }
];

const Specialites = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Spécialités</h1>
        <p className="text-lg text-gray-600 mb-8">Découvrez nos créations uniques et gourmandes</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIALITES.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-amber-600">
                      {item.price.base.toFixed(2)}€
                    </span>
                  </div>
                  <button
                    onClick={() => handleOpenModal(item)}
                    className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
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

export default Specialites; 