interface Ingredient {
  name: string;
  icon?: string;
}

interface MenuCardProps {
  name: string;
  image: string;
  price: {
    base: number;
    supplements?: {
      name: string;
      price: number;
    }[];
  };
  description: string;
  onOrder: () => void;
}

const MenuCard = ({ 
  name, 
  image, 
  price, 
  description,
  onOrder 
}: MenuCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          À partir de {price.base.toFixed(2)}€
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="mb-4 bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Prix de base</span>
            <span className="font-medium">{price.base.toFixed(2)}€</span>
          </div>
          
          {price.supplements && price.supplements.length > 0 && (
            <>
              <p className="text-xs text-gray-500 mb-1">Suppléments disponibles :</p>
              <div className="space-y-1">
                {price.supplements.map((supplement, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{supplement.name}</span>
                    <span className="text-gray-600">+{supplement.price.toFixed(2)}€</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <button
          onClick={onOrder}
          className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
        >
          <span>Commander</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MenuCard; 