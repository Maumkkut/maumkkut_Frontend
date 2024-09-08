import HomePage from '@pages/HomePage';
import GlobalLayout from '@layout/GlobalLayout';
import SignupPage from '@/pages/SignupPage';
import SigninPage from '@/pages/SigninPage';
import CommunityPage from '@pages/CommunityPage';
import CommunityPost from '@pages/CommunityPage/CommunityPost';
import CommunityBoard from '@pages/CommunityPage/CommunityBoard';
import NotFound from '@/pages/NotFound';
import CommunityDetail from '@/pages/CommunityPage/CommunityDetail';
import SocialLoadingPage from '@/pages/SocialLoadingPage';
import TravelTastTestPage from '@/pages/TravelTasteTest/TravelTastTestPage';
import GroupTripPage from '@/pages/GroupTripPage';
import RightSideBar from '@/pages/GroupTripPage/RightSideBar';

import GroupMake from '@/pages/GroupTripPage/RightSideBar/GroupMake';

const routerInfo = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/signup', element: <SignupPage /> },
      {
        path: '/signin',
        element: <SigninPage />,
      },
      { path: '/signin/loading', element: <SocialLoadingPage /> },
      {
        path: '/community/*',
        element: <CommunityPage />,
        children: [
          // 전체 보기
          { path: 'free/*', element: <CommunityBoard /> },
          { path: 'travel/:page', element: <CommunityBoard /> },
          { path: 'all/:page', element: <CommunityBoard /> },
          // 개별 디테일
          { path: 'free/detail/:page', element: <CommunityDetail /> },
          { path: 'travel/detail/:page', element: <CommunityDetail /> },
          { path: 'all/detail/:page', element: <CommunityDetail /> },
          // 글 작성
          { path: 'post', element: <CommunityPost /> },
        ],
      },
      { path: '*', element: <NotFound /> },
      { path: '/signin', element: <SigninPage /> },
      // TravelTasteTest 뒤에 뭐가 붙든 일단 TravelTasteTestPage로 감
      { path: '/TravelTasteTest/*', element: <TravelTastTestPage /> },
      {
        path: '/grouptrip/*',
        element: <GroupTripPage />,
        children: [
          { path: '*', element: <RightSideBar /> },
          { path: 'groupmake', element: <GroupMake /> },
        ],
      },
    ],
  },
];

export default routerInfo;
