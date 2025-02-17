import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import { MenuItem } from '../types/menu';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: MenuItem | null;
}

type DeliveryType = 'surplace' | 'emporter' | 'livraison';

const FRAIS_LIVRAISON = 2.50; // Frais de livraison en euros

const SAUCES_DISPONIBLES = [
  'Mayonnaise',
  'Ketchup',
  'Moutarde',
  'Sauce BBQ',
  'Sauce Andalouse',
  'Sauce Samouraï'
];

const INGREDIENTS_GRATUITS = [
  'Salade',
  'Tomates',
  'Oignons',
  'Cornichons',
  'Olives',
  'Concombre'
];

const BOISSONS = [
  { name: 'Coca-Cola 33cl', price: 2.50 },
  { name: 'Fanta Orange 33cl', price: 2.50 },
  { name: 'Sprite 33cl', price: 2.50 },
  { name: 'Eau minérale 50cl', price: 1.50 },
  { name: 'Ice Tea 33cl', price: 2.50 },
  { name: 'Orangina 33cl', price: 2.50 }
];

const DESSERTS = [
  { name: 'Brownie', price: 3.00 },
  { name: 'Cookie', price: 2.00 },
  { name: 'Tiramisu', price: 4.00 },
  { name: 'Mousse au chocolat', price: 3.50 },
  { name: 'Fruit frais', price: 2.50 }
];

// Ajouter cette enum pour les étapes
enum OrderStep {
  DELIVERY_QUANTITY = 0,
  CUSTOMIZATION = 1,
  DRINKS = 2,
  DESSERTS = 3,
  CUSTOMER_INFO = 4
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  const [quantity, setQuantity] = useState(1);
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('surplace');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [selectedSauces, setSelectedSauces] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedBoissons, setSelectedBoissons] = useState<{[key: string]: number}>({});
  const [selectedDesserts, setSelectedDesserts] = useState<{[key: string]: number}>({});
  const [currentStep, setCurrentStep] = useState<OrderStep>(OrderStep.DELIVERY_QUANTITY);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const steps = [
    { title: "Livraison et quantité", color: "amber" },
    { title: "Personnalisation", color: "amber" },
    { title: "Boissons", color: "amber" },
    { title: "Desserts", color: "amber" },
    { title: "Vos informations", color: "amber" }
  ];

  const fillTestData = () => {
    setQuantity(2);
    setDeliveryType('livraison');
    setClientName('John Doe');
    setClientPhone('0612345678');
    setClientAddress('123 Rue de la Paix\n75000 Paris');
    setSpecialInstructions('Sonner à l\'interphone 42B');
    setSelectedSauces(['Mayonnaise', 'Ketchup']);
    setSelectedIngredients(['Salade', 'Tomates', 'Oignons']);
    setSelectedBoissons({
      'Coca-Cola 33cl': 2,
      'Eau minérale 50cl': 1
    });
    setSelectedDesserts({
      'Cookie': 2
    });
  };

  const calculateTotal = () => {
    const basePrice = (item?.price?.base || 0) * quantity;
    const livraisonPrice = deliveryType === 'livraison' ? FRAIS_LIVRAISON : 0;
    
    const boissonsTotal = Object.entries(selectedBoissons)
      .reduce((total, [name, qty]) => {
        const boisson = BOISSONS.find(b => b.name === name);
        return total + (boisson?.price || 0) * qty;
      }, 0);

    const dessertsTotal = Object.entries(selectedDesserts)
      .reduce((total, [name, qty]) => {
        const dessert = DESSERTS.find(d => d.name === name);
        return total + (dessert?.price || 0) * qty;
      }, 0);

    return (basePrice + livraisonPrice + boissonsTotal + dessertsTotal).toFixed(2);
  };

  const handleSauceToggle = (sauce: string) => {
    setSelectedSauces(prev => 
      prev.includes(sauce) 
        ? prev.filter(s => s !== sauce)
        : [...prev, sauce]
    );
  };

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleBoissonsChange = (name: string, quantity: number) => {
    setSelectedBoissons(prev => ({
      ...prev,
      [name]: quantity
    }));
  };

  const handleDessertsChange = (name: string, quantity: number) => {
    setSelectedDesserts(prev => ({
      ...prev,
      [name]: quantity
    }));
  };

  const handleNext = () => {
    if (currentStep < OrderStep.CUSTOMER_INFO) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > OrderStep.DELIVERY_QUANTITY) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep !== OrderStep.CUSTOMER_INFO) {
      handleNext();
      return;
    }

    // Vérification des champs obligatoires
    if (!clientName || !clientPhone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (deliveryType === 'livraison' && !clientAddress) {
      alert('Veuillez renseigner votre adresse pour la livraison');
      return;
    }

    // Générer un numéro de commande aléatoire
    const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Estimer le temps de préparation/livraison
    const estimatedTime = deliveryType === 'livraison' ? '30-45 minutes' : '15-20 minutes';

    const details = {
      clientName,
      deliveryType: deliveryType === 'surplace' ? 'Sur place' : 
                    deliveryType === 'emporter' ? 'À emporter' : 'Livraison',
      totalPrice: calculateTotal(),
      orderNumber,
      estimatedTime
    };

    setOrderDetails(details);
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    onClose();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case OrderStep.DELIVERY_QUANTITY:
        return (
          <div className="p-4 bg-amber-50 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">1. Choix de la livraison et quantité</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de livraison
                </label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="surplace"
                      checked={deliveryType === 'surplace'}
                      onChange={(e) => setDeliveryType(e.target.value as DeliveryType)}
                      className="mr-2"
                    />
                    Sur place
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="emporter"
                      checked={deliveryType === 'emporter'}
                      onChange={(e) => setDeliveryType(e.target.value as DeliveryType)}
                      className="mr-2"
                    />
                    À emporter
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="livraison"
                      checked={deliveryType === 'livraison'}
                      onChange={(e) => setDeliveryType(e.target.value as DeliveryType)}
                      className="mr-2"
                    />
                    Livraison à domicile (+{FRAIS_LIVRAISON.toFixed(2)}€)
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantité
                </label>
                <div className="flex items-center space-x-2">
                  <button 
                    type="button"
                    className="px-3 py-1 border rounded-md"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button 
                    type="button"
                    className="px-3 py-1 border rounded-md"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case OrderStep.CUSTOMIZATION:
        return (
          <div className="p-4 bg-amber-50 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">2. Personnalisation gratuite</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sauces gratuites
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SAUCES_DISPONIBLES.map(sauce => (
                    <label key={sauce} className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={selectedSauces.includes(sauce)}
                        onChange={() => handleSauceToggle(sauce)}
                        className="rounded text-amber-600"
                      />
                      <span className="text-sm">{sauce}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fruits et Légumes gratuits
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {INGREDIENTS_GRATUITS.map(ingredient => (
                    <label key={ingredient} className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={selectedIngredients.includes(ingredient)}
                        onChange={() => handleIngredientToggle(ingredient)}
                        className="rounded text-amber-600"
                      />
                      <span className="text-sm">{ingredient}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case OrderStep.DRINKS:
        return (
          <div className="p-4 bg-amber-50 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">3. Choix des boissons</h3>
            
            <div className="space-y-2">
              {BOISSONS.map(boisson => (
                <div key={boisson.name} className="flex items-center justify-between p-2 border rounded-md">
                  <div>
                    <span className="text-sm">{boisson.name}</span>
                    <span className="text-sm text-gray-500 ml-2">{boisson.price.toFixed(2)}€</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      type="button"
                      className="px-2 py-1 border rounded-md"
                      onClick={() => handleBoissonsChange(boisson.name, (selectedBoissons[boisson.name] || 0) - 1)}
                      disabled={!selectedBoissons[boisson.name]}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{selectedBoissons[boisson.name] || 0}</span>
                    <button 
                      type="button"
                      className="px-2 py-1 border rounded-md"
                      onClick={() => handleBoissonsChange(boisson.name, (selectedBoissons[boisson.name] || 0) + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case OrderStep.DESSERTS:
        return (
          <div className="p-4 bg-amber-50 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">4. Choix des desserts</h3>
            
            <div className="space-y-2">
              {DESSERTS.map(dessert => (
                <div key={dessert.name} className="flex items-center justify-between p-2 border rounded-md">
                  <div>
                    <span className="text-sm">{dessert.name}</span>
                    <span className="text-sm text-gray-500 ml-2">{dessert.price.toFixed(2)}€</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      type="button"
                      className="px-2 py-1 border rounded-md"
                      onClick={() => handleDessertsChange(dessert.name, (selectedDesserts[dessert.name] || 0) - 1)}
                      disabled={!selectedDesserts[dessert.name]}
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{selectedDesserts[dessert.name] || 0}</span>
                    <button 
                      type="button"
                      className="px-2 py-1 border rounded-md"
                      onClick={() => handleDessertsChange(dessert.name, (selectedDesserts[dessert.name] || 0) + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case OrderStep.CUSTOMER_INFO:
        return (
          <div className="p-4 bg-amber-50 rounded-lg space-y-4">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">5. Vos informations</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom *
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              {deliveryType === 'livraison' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse de livraison *
                  </label>
                  <textarea
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md"
                    rows={2}
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Instructions spéciales
                </label>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center overflow-y-auto p-4 min-h-screen">
        <div className="relative bg-white p-6 rounded-lg max-w-md w-full my-8">
          <div className="sticky top-0 bg-white pb-4 border-b mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <div className="flex gap-2">
                <button 
                  type="button"
                  onClick={fillTestData}
                  className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
                >
                  Données Test
                </button>
                <button 
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full text-xl font-bold"
                  aria-label="Fermer"
                >
                  ×
                </button>
              </div>
            </div>
          </div>

          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />

          {/* Indicateur d'étapes */}
          <div className="flex justify-between mb-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center ${
                  index === currentStep ? 'text-amber-600' : 'text-gray-400'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                  index === currentStep 
                    ? 'bg-amber-100 border-2 border-amber-600' 
                    : index < currentStep
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100'
                }`}>
                  {index + 1}
                </div>
                <div className="text-xs text-center hidden sm:block">{step.title}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {renderStepContent()}

            {/* Navigation et total */}
            <div className="border-t pt-4 bg-white sticky bottom-0">
              {currentStep === OrderStep.CUSTOMER_INFO && (
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Prix unitaire:</p>
                    <p className="text-gray-600">{item.price.base.toFixed(2)}€</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Quantité:</p>
                    <p className="text-gray-600">× {quantity}</p>
                  </div>
                  <div className="flex justify-between font-medium">
                    <p className="text-gray-600">Sous-total:</p>
                    <p className="text-gray-600">{(item.price.base * quantity).toFixed(2)}€</p>
                  </div>
                  {deliveryType === 'livraison' && (
                    <div className="flex justify-between">
                      <p className="text-gray-600">Frais de livraison:</p>
                      <p className="text-gray-600">+ {FRAIS_LIVRAISON.toFixed(2)}€</p>
                    </div>
                  )}
                  {Object.entries(selectedBoissons).map(([name, qty]) => {
                    if (qty > 0) {
                      const boisson = BOISSONS.find(b => b.name === name);
                      return (
                        <div key={name} className="flex justify-between">
                          <p className="text-gray-600">{name} (×{qty}):</p>
                          <p className="text-gray-600">+ {((boisson?.price || 0) * qty).toFixed(2)}€</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                  {Object.entries(selectedDesserts).map(([name, qty]) => {
                    if (qty > 0) {
                      const dessert = DESSERTS.find(d => d.name === name);
                      return (
                        <div key={name} className="flex justify-between">
                          <p className="text-gray-600">{name} (×{qty}):</p>
                          <p className="text-gray-600">+ {((dessert?.price || 0) * qty).toFixed(2)}€</p>
                        </div>
                      );
                    }
                    return null;
                  })}
                  <div className="flex justify-between text-xl font-bold pt-2 border-t">
                    <p>Total:</p>
                    <p>{calculateTotal()}€</p>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Retour
                  </button>
                )}
                <button 
                  type="submit"
                  className="flex-1 bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 font-bold text-lg shadow-md transition-colors"
                >
                  {currentStep === OrderStep.CUSTOMER_INFO ? 'Confirmer la commande' : 'Suivant'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        orderDetails={orderDetails}
      />
    </>
  );
};

export default OrderModal; 