import axios from 'axios';

const api = axios.create({
  baseURL: 'https://openplzapi.org/de',
});

export interface LocalityItem {
  name: string;
  postalCode: string;
  municipality: { key: string; name: string };
  district: { key: string; name: string };
  governmentRegion: { key: string; name: string };
  federalState: { key: string; name: string };
}

export const fetchLocalities = async (params: { postalCode?: string; name?: string }): Promise<LocalityItem[]> => {
  // If no params are provided, return empty to prevent fetching all
  if (!params.postalCode && !params.name) return [];
  
  const response = await api.get<LocalityItem[]>('/Localities', { params });
  return response.data;
};
