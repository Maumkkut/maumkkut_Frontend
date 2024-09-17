import pin from '@assets/images/GroupTrip/Marker.svg';
import GoodColoredIcon from '@assets/images/GroupTrip/GoodColoredIcon.svg';
import BadIcon from '@assets/images/GroupTrip/BadIcon.svg';

export default function ReigonCard() {
  return (
    <div className="flex w-[150px] flex-col items-center gap-y-2 text-xl">
      {/* 이미지 */}
      <div className="h-[120px] w-[120px]">
        <img
          className="h-full w-full"
          src={pin}
          alt="region"
        />
      </div>
      {/* 관광지명 이름 */}
      <div>
        <span>사근진해중공원 전망대</span>
      </div>
      {/* 따봉 */}
      <div className="flex w-full justify-between px-5">
        <img
          src={GoodColoredIcon}
          alt="goodIcon"
        />
        <img
          src={BadIcon}
          alt="badIcon"
        />
      </div>
    </div>
  );
}
