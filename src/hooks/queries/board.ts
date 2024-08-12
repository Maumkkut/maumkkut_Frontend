import { useQuery, useMutation } from '@tanstack/react-query';
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

export const useFetchBoard = (boardType: string) => {
  return useQuery({
    queryKey: [`${boardType}board`],
    queryFn: () => fetchBoard(boardType),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
};
