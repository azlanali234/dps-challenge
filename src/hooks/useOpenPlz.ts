import { useQuery } from '@tanstack/react-query';
import { fetchLocalities } from '../services/api';

export const useOpenPlz = (postalCode: string, name: string) => {
  return useQuery({
    queryKey: ['localities', postalCode, name],
    queryFn: () => fetchLocalities({ postalCode: postalCode || undefined, name: name || undefined }),
    enabled: Boolean(postalCode) || Boolean(name),
    staleTime: 1000 * 60 * 60, // Cache results for 1 hour to prevent redundant API calls
  });
};
