import BannerImg from '@assets/images/GroupTrip/Hero Section.svg';
import ContentLayout from '@/layout/ContentLayout';
import { NavLink, Outlet } from 'react-router-dom';
import {
  useFetchMyGroupList,
  // useFetchGroupDetailToId,
} from '@/hooks/queries/group';

interface GroupData {
  id: number;
  name: string;
}

const GroupTripPage = () => {
  return (
    <ContentLayout>
      <div>
        <img
          src={BannerImg}
          alt="HeroImg"
        />

        <div className="my-20 flex gap-x-10">
          <GroupSideBar />
          <div className="w-[1px] bg-black"></div>
          <div className="grow">
            <Outlet />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

const GroupSideBar = () => {
  const { data } = useFetchMyGroupList();

  return (
    <div className="flex w-[300px] flex-col items-center gap-y-8">
      <NavLink
        to={'/grouptrip/groupmake'}
        className="flex cursor-pointer items-center gap-x-3 text-lg text-black"
      >
        <span className="material-symbols-outlined">add_circle</span>
        <span>그룹 추가</span>
      </NavLink>
      <div className="h-[1px] w-full bg-black"></div>
      <div className="flex flex-col gap-y-7 text-xl font-semibold">
        {data ? (
          data.result.map((item: GroupData) => (
            <div key={item.id}>
              <NavLink
                to={`/grouptrip/${item.id}`}
                className={({ isActive }) =>
                  isActive ? 'text-mk-logo4' : 'text-mk-gray-2'
                }
              >
                {item.name}
              </NavLink>
            </div>
          ))
        ) : (
          <div>
            <p>아직 그룹이 없어요</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupTripPage;
