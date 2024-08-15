import { useQuery, useMutation, queryOptions } from '@tanstack/react-query';
import { fetchBoard, postBoard } from '@/api/board';
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

export function boardQueryHelper(boardType: string, page: string) {
  return queryOptions({
    queryKey: [`${boardType}board`],
    queryFn: () => fetchBoard(boardType, page),
    staleTime: Infinity,
  });
}
