import ProfileHome from '@pages/ProfilePage/RigthSidePage/ProfileHome';
import EditProfile from '@/pages/ProfilePage/RigthSidePage/EditProfile';

import ActivityFeed from '@/pages/ProfilePage/RigthSidePage/ActivityFeed';
import GroupManage from '@/pages/ProfilePage/RigthSidePage/GroupManage';

interface RightSidePageProps {
  currentCateory?: number;
  handleCategory: (category: number) => void;
}
export default function RightSidePage({
  currentCateory,
  handleCategory,
}: RightSidePageProps) {
  switch (currentCateory) {
    case 0:
      return <ProfileHome handleCategory={handleCategory} />;
    case 1:
      return <ActivityFeed />;
    case 2:
      return <GroupManage />;
    case 3:
      return <EditProfile />;
  }
}
