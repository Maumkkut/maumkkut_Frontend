import { useQuery } from '@tanstack/react-query';
import {
  fetchProfileFeedCounts,
  fetchProfileCommentList,
  fetchProfileLikeList,
  fetchProfilePostList,
} from '@/api/profile';

export const useFetchProfileFeedCounts = () => {
  return useQuery({
    queryKey: [`profile`, 'feedCount'],
    queryFn: () => fetchProfileFeedCounts(),
  });
};
export const useFetchProfileCommentList = () => {
  return useQuery({
    queryKey: [`profile`, 'commentList'],
    queryFn: () => fetchProfileCommentList(),
  });
};
export const useFetchProfileLikeList = () => {
  return useQuery({
    queryKey: [`profile`, 'likeList'],
    queryFn: () => fetchProfileLikeList(),
  });
};
export const useFetchProfilePostList = () => {
  return useQuery({
    queryKey: [`profile`, 'postList'],
    queryFn: () => fetchProfilePostList(),
  });
};
