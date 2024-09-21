import { useQuery, useMutation } from '@tanstack/react-query';
import {
  fetchMyGroupList,
  fetchGroupDetailToId,
  postMakeGroup,
  fetchGroupTourListGroupLike,
  fetchGroupTourListUserLike,
  fetchGroupTourList,
  updateTourLike,
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

export const useFetchGroupTourListGroupLike = (id: number) => {
  return useQuery({
    queryKey: [`groupTourGroupLikeList`, id],
    queryFn: () => fetchGroupTourListGroupLike(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useFetchGroupTourListUserLikee = (id: number) => {
  return useQuery({
    queryKey: [`groupTourUserLikeList`, id],
    queryFn: () => fetchGroupTourListUserLike(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useFetchGroupTourList = (id: number) => {
  return useQuery({
    queryKey: [`groupTourList`, id],
    queryFn: () => fetchGroupTourList(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useUpdateTourLike = () => {
  return useMutation({
    mutationFn: updateTourLike,
  });
};
