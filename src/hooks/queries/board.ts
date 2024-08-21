import { useQuery, useMutation, queryOptions } from '@tanstack/react-query';
import {
  fetchBoard,
  fetchBoardDetail,
  fetchBoardComment,
  postBoard,
  postBoardComment,
  updateBoardComment,
} from '@/api/board';
import { useNavigate } from 'react-router-dom';

export const useFetchBoard = (boardType: string, page: string) => {
  return useQuery({
    queryKey: [`${boardType}board`, page],
    queryFn: () => fetchBoard(boardType, page),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export const useFetchBoardDetail = (boardType: string, id: number) => {
  return useQuery({
    queryKey: [`${boardType}boardDetail`, id],
    queryFn: () => fetchBoardDetail(boardType, id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useFetchBoardComment = (id: number) => {
  return useQuery({
    queryKey: [`boardComment`, id],
    queryFn: () => fetchBoardComment(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const usePostBoard = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postBoard,
    onSuccess: async () => {
      navigate('/community/free');
    },
  });
};

export const usePostBoardComment = () => {
  return useMutation({
    mutationFn: postBoardComment,
  });
};

export const useUpdateBoardComment = () => {
  return useMutation({
    mutationFn: updateBoardComment,
  });
};

export function boardQueryHelper(boardType: string, page: string) {
  return queryOptions({
    queryKey: [`${boardType}board`],
    queryFn: () => fetchBoard(boardType, page),
    staleTime: Infinity,
  });
}
