import { Dialog } from '@headlessui/react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName: string;
  pricePerDay: number;
}

const ReservationModal = ({ isOpen, onClose, carName, pricePerDay }: ReservationModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
          <Dialog.Title className="text-lg font-medium text-gray-900">
            Réserver {carName}
          </Dialog.Title>
          <div className="mt-4">
            <p className="text-gray-600">
              Prix par jour: {pricePerDay}€
            </p>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Annuler
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md"
            >
              Confirmer
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ReservationModal; 