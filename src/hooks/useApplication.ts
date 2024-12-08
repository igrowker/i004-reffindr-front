/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';

import { toaster } from '@/components/ui/toaster';
import { createApplication, getMyAplications } from '@/services/applicationService';

export const useApplication = () => {
  const navigate = useNavigate();

  const applicationProperty = async (propertyId: number) => {
    if (propertyId) {
      const myApplications = await getMyAplications();
      const applicationExists = myApplications?.data?.some(
        (application: any) => application?.propertyId === propertyId
      );

      if (applicationExists) {
        toaster.error({
          title: 'Ya has aplicado a esta propiedad',
        });
        navigate('/home');
        return;
      }

      await createApplication(propertyId);

      toaster.success({
        title: 'Has aplicado correctamente',
      });

      navigate('/home');
    }
  };

  return {
    applicationProperty,
  };
};
