import { useQuery, useMutation, queryOptions } from '@tanstack/react-query';
import {
  fetchBoard,
  postBoard,
  fetchBoardDetail,
  fetchBoardComment,
} from '@/api/board';
import { useNavigate } from 'react-router-dom';

export const usePostBoard = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postBoard,
    onSuccess: async () => {
      navigate('/community/free');
    },
  });
};

export const useFetchBoard = (boardType: string, page: string) => {
  console.log(boardType, page);
  return useQuery({
    queryKey: [`${boardType}board`, page],
    queryFn: () => fetchBoard(boardType, page),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
};

export const useFetchBoardDetail = (boardType: string, id: number) => {
  console.log(boardType, id);
  return useQuery({
    queryKey: [`${boardType}boardDetail`, id],
    queryFn: () => fetchBoardDetail(boardType, id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useFetchBoardComment = (id: number) => {
  console.log(id);
  return useQuery({
    queryKey: [`boardComment`, id],
    queryFn: () => fetchBoardComment(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export function boardQueryHelper(boardType: string, page: string) {
  return queryOptions({
    queryKey: [`${boardType}board`],
    queryFn: () => fetchBoard(boardType, page),
    staleTime: Infinity,
  });
}
