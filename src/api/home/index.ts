import { instance } from '@api/axios';
import { FestivalListResponse } from '@/types/home';

export async function getFestivals(): Promise<FestivalListResponse> {
  const res = await instance.get<FestivalListResponse>('home/festival/');
  return res.data;
}
