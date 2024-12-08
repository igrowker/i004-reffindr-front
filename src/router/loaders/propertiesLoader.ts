import { LoaderFunctionArgs } from 'react-router-dom';

import { usePropertiesStore } from '@/stores/propertiesStore';

export const getPropertyByIdLoader = async ({ request }: LoaderFunctionArgs) => {
  const query = new URL(request.url).search;
  const pid = query.match(/\d/g)?.join('');

  const getPropertyById = usePropertiesStore.getState().getPropertyById;

  const property = await getPropertyById(pid ?? '0');

  if (property.statusCode === 404) throw new Response('Propiedad no encontrada', { status: 404 });

  return property;
};
