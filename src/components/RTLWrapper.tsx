import { useTranslation } from 'react-i18next';
import { isRTL } from '../i18n';

interface RTLWrapperProps {
  children: React.ReactNode;
}

const RTLWrapper: React.FC<RTLWrapperProps> = ({ children }) => {
  const { i18n } = useTranslation();
  
  return (
    <div dir={isRTL(i18n.language) ? 'rtl' : 'ltr'}>
      {children}
    </div>
  );
};

export default RTLWrapper; 