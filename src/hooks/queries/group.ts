import { useQuery, useMutation } from '@tanstack/react-query';
import {
  fetchMyGroupList,
  fetchGroupDetailToId,
  postMakeGroup,
} from '@/api/group';

export const useFetchMyGroupList = () => {
  return useQuery({
    queryKey: [`groupList`],
    queryFn: () => fetchMyGroupList(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useFetchGroupDetailToId = (id: number) => {
  return useQuery({
    queryKey: [`groupDetail`, id],
    queryFn: () => fetchGroupDetailToId(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const usePostMakeGroup = () => {
  return useMutation({
    mutationFn: postMakeGroup,
  });
};
