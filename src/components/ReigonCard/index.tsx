import pin from '@assets/images/GroupTrip/Marker.svg';
import GoodColoredIcon from '@assets/images/GroupTrip/GoodColoredIcon.svg';
import GoodIcon from '@assets/images/GroupTrip/GoodIcon.svg';
import BadColoredIcon from '@assets/images/GroupTrip/BadColoredIcon.svg';
import BadIcon from '@assets/images/GroupTrip/BadIcon.svg';
import { useUpdateTourLike } from '@/hooks/queries/group';
import { TTour, TUserLikeTourList } from '@/types/group';

import { useQueryClient } from '@tanstack/react-query';
interface ReigonCardProps {
  data: TTour;
  userLikeList: TUserLikeTourList[];
  groupId: number;
}
export default function ReigonCard({
  data,
  userLikeList,
  groupId,
}: ReigonCardProps) {
  const queryClient = useQueryClient();
  const { mutateAsync } = useUpdateTourLike();
  const { is_liked, is_disliked } = userLikeList.find(
    (item) => item.tour_id === data.id,
  ) || { is_liked: false, is_disliked: false };

  const handleTourLike = async () => {
    if (!is_liked && !is_disliked) {
      const payload = {
        tour_id: data.id,
        is_liked: true,
        is_disliked: false,
      };
      mutateAsync(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['groupTourGroupLikeList', groupId],
          });
          queryClient.invalidateQueries({
            queryKey: ['groupTourUserLikeList', groupId],
          });
        },
      });
    } else {
      const payload = {
        tour_id: data.id,
        is_liked: !is_liked,
        is_disliked: !is_disliked,
      };
      mutateAsync(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['groupTourGroupLikeList', groupId],
          });
          queryClient.invalidateQueries({
            queryKey: ['groupTourUserLikeList', groupId],
          });
        },
      });
    }
  };

  const handleTourUnLike = async () => {
    if (!is_liked && !is_disliked) {
      const payload = {
        tour_id: data.id,
        is_liked: false,
        is_disliked: true,
      };
      mutateAsync(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['groupTourGroupLikeList', groupId],
          });
          queryClient.invalidateQueries({
            queryKey: ['groupTourUserLikeList', groupId],
          });
        },
      });
    } else {
      const payload = {
        tour_id: data.id,
        is_liked: !is_liked,
        is_disliked: !is_disliked,
      };
      mutateAsync(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['groupTourGroupLikeList', groupId],
          });
          queryClient.invalidateQueries({
            queryKey: ['groupTourUserLikeList', groupId],
          });
        },
      });
    }
  };
  return (
    <div className="flex w-[150px] flex-col items-center gap-y-2 text-xl">
      {/* 이미지 */}
      <div className="h-[120px] w-[120px]">
        <img
          className="h-full w-full"
          src={data.image === '' ? pin : data.image}
          alt="region"
        />
      </div>
      {/* 관광지명 이름 */}
      <div>
        <span>{data.title}</span>
      </div>
      {/* 따봉 */}
      <div className="flex w-full justify-between px-5">
        {is_liked ? (
          <button onClick={() => handleTourLike()}>
            <img
              src={GoodColoredIcon}
              alt="goodIcon"
            />
          </button>
        ) : (
          <button onClick={() => handleTourLike()}>
            <img
              src={GoodIcon}
              alt="goodIcon"
            />
          </button>
        )}
        {is_disliked ? (
          <button onClick={() => handleTourUnLike()}>
            <img
              src={BadColoredIcon}
              alt="badIcon"
            />
          </button>
        ) : (
          <button onClick={() => handleTourUnLike()}>
            <img
              src={BadIcon}
              alt="badIcon"
            />
          </button>
        )}
      </div>
    </div>
  );
}
