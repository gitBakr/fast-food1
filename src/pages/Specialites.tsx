const Specialites = () => {
  const specialites = [
    {
      name: "Le Méditerranéen",
      image: "https://images.unsplash.com/photo-1628191010210-a59de33e5941",
      price: 12.50,
      description: "Pain pita, falafels maison, houmous, légumes grillés, sauce tahini",
      ingredients: ["Falafels", "Houmous", "Aubergines grillées", "Tomates", "Concombres", "Sauce tahini"],
      tags: ["Végétarien", "Méditerranéen"]
    },
    {
      name: "L'Italien",
      image: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c",
      price: 13.50,
      description: "Focaccia maison, jambon de Parme, mozzarella, roquette, pesto basilic",
      ingredients: ["Jambon de Parme", "Mozzarella", "Roquette", "Tomates séchées", "Pesto basilic"],
      tags: ["Italien", "Signature"]
    },
    {
      name: "Le New-Yorkais",
      image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847",
      price: 14.50,
      description: "Pain de seigle, pastrami, pickles maison, moutarde à l'ancienne",
      ingredients: ["Pastrami", "Cornichons", "Oignons caramélisés", "Moutarde à l'ancienne"],
      tags: ["Américain", "Signature"]
    },
    {
      name: "Le Mexicain",
      image: "https://images.unsplash.com/photo-1628191010210-a59de33e5941",
      price: 11.50,
      description: "Wrap, poulet mariné, guacamole, haricots rouges, sauce piquante",
      ingredients: ["Poulet épicé", "Guacamole", "Haricots rouges", "Maïs", "Sauce chipotle"],
      tags: ["Mexicain", "Épicé"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Spécialités</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos créations uniques, inspirées des cuisines du monde entier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialites.map((specialite, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src={specialite.image}
                  alt={specialite.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full">
                  {specialite.price.toFixed(2)}€
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{specialite.name}</h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {specialite.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 mb-4">{specialite.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ingrédients :</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {specialite.ingredients.map((ingredient, ingredientIndex) => (
                      <li key={ingredientIndex}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-amber-600 text-white py-3 px-4 rounded-md hover:bg-amber-700 transition-colors">
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Pourquoi nos spécialités sont uniques ?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ingrédients Premium</h3>
              <p className="text-gray-600">Sélectionnés avec soin auprès de producteurs locaux</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Recettes Originales</h3>
              <p className="text-gray-600">Créées par nos chefs passionnés</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600 mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Préparation Minute</h3>
              <p className="text-gray-600">Chaque sandwich est préparé à la commande</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialites; 