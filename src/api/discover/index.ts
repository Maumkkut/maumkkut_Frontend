import { ApiResponse } from '@/types/discover';
import { instance } from '@api/axios';

export async function getTypeTravel(travel_type: string): Promise<ApiResponse> {
  const res = await instance.get('home/type/', {
    params: {
      travel_type: travel_type,
    },
  });
  return res.data;
}
