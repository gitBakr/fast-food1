import React from 'react';
import { useTranslation } from 'react-i18next';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderDetails: {
    clientName: string;
    deliveryType: string;
    totalPrice: string;
    orderNumber: string;
    estimatedTime: string;
  };
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, orderDetails }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full m-4 relative">
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('confirmation.title')}
          </h2>
          
          <div className="bg-amber-50 p-4 rounded-lg mb-4">
            <p className="text-lg font-medium text-amber-800">
              {t('confirmation.thank_you', { name: orderDetails.clientName })}
            </p>
            <p className="text-sm text-amber-700 mt-1">
              {t('confirmation.order_number', { number: orderDetails.orderNumber })}
            </p>
          </div>

          <div className="space-y-3 text-left mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">{t('confirmation.delivery_type')}:</span>
              <span className="font-medium">{orderDetails.deliveryType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('confirmation.total')}:</span>
              <span className="font-medium">{orderDetails.totalPrice}€</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('confirmation.estimated_time')}:</span>
              <span className="font-medium">{orderDetails.estimatedTime}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            {t('confirmation.sms_notification')}
          </p>

          <button
            onClick={onClose}
            className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 font-bold text-lg shadow-md transition-colors"
          >
            {t('common.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal; 