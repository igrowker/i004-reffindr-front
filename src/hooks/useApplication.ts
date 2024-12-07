import { useNavigate } from 'react-router-dom';

import { createApplication } from '@/services/applicationService';

export const useApplication = () => {
  const navigate = useNavigate();
  const applicationProperty = async (propertyId: number) => {
    if (propertyId) {
      await createApplication(propertyId);
      navigate('/home');
    }
  };

  return {
    applicationProperty,
  };
};
