import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    deliveryType: '',
    items: [] as Array<{
      id: string;
      name: string;
      price: number;
      quantity: number;
      extras: string[]
    }>,
    deliveryAddress: '',
    deliveryTime: '',
    notes: ''
  });

  if (!isOpen) return null;

  const menuItems = [
    { id: 'classique', name: 'Le Classique', price: 8.50 },
    { id: 'vegetarien', name: 'Le Végétarien', price: 9.50 },
    { id: 'gourmet', name: 'Le Gourmet', price: 11.50 }
  ];

  const extras = [
    { id: 'fromage', name: 'Extra Fromage', price: 1.00 },
    { id: 'bacon', name: 'Bacon', price: 1.50 },
    { id: 'avocat', name: 'Avocat', price: 2.00 }
  ];

  const deliveryOptions = [
    { value: 'pickup', label: 'À emporter' },
    { value: 'delivery', label: 'Livraison' },
    { value: 'surplace', label: 'Sur place' }
  ];

  const timeSlots = Array.from({ length: 12 }).map((_, index) => {
    const hour = 11 + Math.floor(index / 2);
    const minutes = index % 2 === 0 ? '00' : '30';
    return `${hour}:${minutes}`;
  });

  const calculateTotal = () => {
    let subtotal = formData.items.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      const extrasTotal = item.extras.reduce((sum, extraId) => {
        const extra = extras.find(e => e.id === extraId);
        return sum + (extra?.price || 0);
      }, 0) * item.quantity;
      return total + itemTotal + extrasTotal;
    }, 0);

    const deliveryFee = formData.deliveryType === 'delivery' ? 2.50 : 0;
    const tax = subtotal * 0.10; // TVA 10%
    
    return {
      subtotal,
      deliveryFee,
      tax,
      total: subtotal + deliveryFee + tax
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddItem = (itemId: string) => {
    const item = menuItems.find(m => m.id === itemId);
    if (item) {
      setFormData(prev => ({
        ...prev,
        items: [...prev.items, { ...item, quantity: 1, extras: [] }]
      }));
    }
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity > 0) {
      const newItems = [...formData.items];
      newItems[index].quantity = newQuantity;
      setFormData(prev => ({ ...prev, items: newItems }));
    }
  };

  const handleExtraToggle = (itemIndex: number, extraId: string) => {
    const newItems = [...formData.items];
    const item = newItems[itemIndex];
    item.extras = item.extras.includes(extraId)
      ? item.extras.filter(id => id !== extraId)
      : [...item.extras, extraId];
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const handleSubmit = () => {
    setStep(4);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-6">
        {[1, 2, 3].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= stepNumber ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {stepNumber}
            </div>
            {stepNumber < 3 && (
              <div className={`w-12 h-1 mx-1 ${
                step > stepNumber ? 'bg-amber-600' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    );
  };

  const priceDetails = calculateTotal();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {step === 4 ? 'Confirmation' : 'Commander'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {step < 4 && renderStepIndicator()}

        {/* Étape 1: Sélection des produits */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Choisissez vos sandwichs</h3>
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleAddItem(item.id)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-amber-500 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span>{item.price.toFixed(2)}€</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {formData.items.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Votre commande</h3>
                {formData.items.map((item, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.name}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(index, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(index, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {extras.map(extra => (
                        <label key={extra.id} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={item.extras.includes(extra.id)}
                            onChange={() => handleExtraToggle(index, extra.id)}
                            className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                          />
                          <span className="ml-2">
                            {extra.name} (+{extra.price.toFixed(2)}€)
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => formData.items.length > 0 && setStep(2)}
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 disabled:opacity-50"
              disabled={formData.items.length === 0}
            >
              Continuer
            </button>
          </div>
        )}

        {/* Étape 2: Informations personnelles */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Retour
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 disabled:opacity-50"
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
              >
                Continuer
              </button>
            </div>
          </div>
        )}

        {/* Étape 3: Livraison et paiement */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de commande
              </label>
              <div className="space-y-3">
                {deliveryOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center p-3 border-2 border-gray-200 rounded-md hover:border-amber-300 hover:bg-gray-50 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="deliveryType"
                      value={option.value}
                      checked={formData.deliveryType === option.value}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-amber-600 border-2 border-gray-300 focus:ring-amber-500"
                    />
                    <span className="ml-3">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.deliveryType === 'delivery' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse de livraison
                </label>
                <textarea
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Heure souhaitée
              </label>
              <select
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleInputChange}
                className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                required
              >
                <option value="">Sélectionnez une heure</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes spéciales
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={2}
                className="w-full p-2 border-2 border-gray-200 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                placeholder="Allergies, préférences..."
              />
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4 space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Récapitulatif</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{priceDetails.subtotal.toFixed(2)}€</span>
                </div>
                {priceDetails.deliveryFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frais de livraison</span>
                    <span>{priceDetails.deliveryFee.toFixed(2)}€</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">TVA (10%)</span>
                  <span>{priceDetails.tax.toFixed(2)}€</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-amber-600">{priceDetails.total.toFixed(2)}€</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Retour
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700"
                disabled={!formData.deliveryType || !formData.deliveryTime}
              >
                Commander
              </button>
            </div>
          </div>
        )}

        {/* Étape 4: Confirmation */}
        {step === 4 && (
          <div className="text-center space-y-4">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Commande confirmée !
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Merci {formData.firstName} pour votre commande.
                <br />
                {formData.deliveryType === 'delivery' 
                  ? `Votre commande sera livrée à ${formData.deliveryTime}`
                  : formData.deliveryType === 'pickup'
                  ? `Votre commande sera prête à ${formData.deliveryTime} pour le retrait`
                  : `Votre table sera prête à ${formData.deliveryTime}`
                }
                <br />
                Montant total : {priceDetails.total.toFixed(2)}€
                <br />
                Vous recevrez bientôt un email de confirmation à l'adresse {formData.email}.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal; 