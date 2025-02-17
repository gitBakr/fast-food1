import { useState } from 'react';
import OrderModal from '../components/OrderModal';
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

const MENU_ITEMS = [
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
    description: 'Jambon, fromage, salade, tomates, mayonnaise maison'
  },
  {
    id: 'vegetarien',
    name: 'Le Végétarien',
    type: 'vegetarien',
    image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc',
    price: {
      base: 9.50,
      supplements: [
        { name: 'Double légumes', price: 1.50 },
        { name: 'Avocat', price: 2.00 }
      ]
    },
    category: 'Végétariens',
    description: 'Légumes grillés, houmous, roquette, sauce tahini'
  },
  {
    id: 'poulet',
    name: 'Le Chicken Deluxe',
    type: 'special',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0',
    price: {
      base: 10.50,
      supplements: [
        { name: 'Double poulet', price: 2.50 },
        { name: 'Extra fromage', price: 1.00 }
      ]
    },
    category: 'Spécialités',
    description: 'Poulet grillé, cheddar fondu, bacon, sauce BBQ'
  },
  {
    id: 'italien',
    name: "L'Italien",
    type: 'special',
    image: 'https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c',
    price: {
      base: 11.00,
      supplements: [
        { name: 'Double mozzarella', price: 2.00 },
        { name: 'Jambon Parme', price: 2.50 }
      ]
    },
    category: 'Spécialités',
    description: 'Mozzarella, tomates, basilic, jambon cru, pesto'
  },
  {
    id: 'thon',
    name: 'Le Thon',
    type: 'classique',
    image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304',
    price: {
      base: 8.50,
      supplements: [
        { name: 'Double thon', price: 2.00 },
        { name: 'Œuf', price: 1.00 }
      ]
    },
    category: 'Sandwichs Classiques',
    description: 'Thon, mayonnaise, œuf, salade, tomates, oignons'
  },
  {
    id: 'falafel',
    name: 'Le Falafel',
    type: 'vegetarien',
    image: 'https://images.unsplash.com/photo-1593001874117-c99c800e3eb5',
    price: {
      base: 9.50,
      supplements: [
        { name: 'Extra falafels', price: 2.00 },
        { name: 'Houmous', price: 1.50 }
      ]
    },
    category: 'Végétariens',
    description: 'Falafels maison, houmous, légumes croquants, sauce tahini'
  },
  {
    id: 'mexicain',
    name: 'Le Mexicain',
    type: 'special',
    image: 'https://images.unsplash.com/photo-1628191013085-990d39ec25b8',
    price: {
      base: 10.50,
      supplements: [
        { name: 'Guacamole', price: 2.00 },
        { name: 'Jalapeños', price: 1.00 }
      ]
    },
    category: 'Spécialités',
    description: 'Poulet épicé, guacamole, poivrons, oignons, sauce piquante'
  },
  {
    id: 'saumon',
    name: 'Le Saumon',
    type: 'special',
    image: 'https://images.unsplash.com/photo-1485451456034-3f9391c6f769',
    price: {
      base: 12.50,
      supplements: [
        { name: 'Double saumon', price: 3.00 },
        { name: 'Avocat', price: 2.00 }
      ]
    },
    category: 'Spécialités',
    description: 'Saumon fumé, cream cheese, avocat, concombre, aneth'
  }
];

const Menu = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('menu.title')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 mt-1">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-amber-600">
                    {t('menu.price_from')} {item.price.base.toFixed(2)}{t('menu.currency')}
                  </span>
                  <button
                    onClick={() => handleOpenModal(item)}
                    className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    {t('common.order')}
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

export default Menu; 