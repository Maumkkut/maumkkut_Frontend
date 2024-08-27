import { useQuery, useMutation, queryOptions } from '@tanstack/react-query';
import {
  fetchBoard,
  fetchBoardSearch,
  fetchBoardDetail,
  fetchBoardComment,
  postBoard,
  postBoardComment,
  updateBoardComment,
} from '@/api/board';

export const useFetchBoardSearch = (
  boardType: string,
  page: string,
  days: string | null,
  search_type: string | null,
  content: string | null,
) => {
  return useQuery({
    queryKey: [`${boardType}board`, page],
    queryFn: () =>
      fetchBoardSearch(boardType, page, days, search_type, content),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
};

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
  return useMutation({
    mutationFn: postBoard,
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
