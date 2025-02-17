interface MenuCardProps {
  name: string;
  image: string;
  price: number;
  category: string;
  ingredients: string[];
  allergenes: string;
}

const MenuCard = ({ name, image, price, category, ingredients, allergenes }: MenuCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {price.toFixed(2)}€
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <span className="inline-block bg-amber-100 text-amber-800 text-sm px-2 py-1 rounded mb-2">
          {category}
        </span>
        
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Ingrédients :</h4>
          <p className="text-gray-600 text-sm">
            {ingredients.join(', ')}
          </p>
        </div>
        
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Allergènes :</h4>
          <p className="text-gray-600 text-sm">
            {allergenes}
          </p>
        </div>

        <button className="mt-4 w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors">
          Commander
        </button>
      </div>
    </div>
  );
};

export default MenuCard; 