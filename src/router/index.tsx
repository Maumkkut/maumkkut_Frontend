import AuthGuard from '@router/AuthGuard';

import HomePage from '@pages/HomePage';
import GlobalLayout from '@layout/GlobalLayout';
import SignupPage from '@/pages/Auth/SignupPage';
import SigninPage from '@/pages/Auth/SigninPage';
import CommunityPage from '@pages/CommunityPage';
import CommunityPost from '@pages/CommunityPage/CommunityPost';
import CommunityBoard from '@pages/CommunityPage/CommunityBoard';
import NotFound from '@/pages/NotFound';
import CommunityDetail from '@/pages/CommunityPage/CommunityDetail';
import SocialLoadingPage from '@/pages/Auth/SocialLoadingPage';
import TravelTastTestPage from '@/pages/TravelTasteTest/TravelTastTestPage';
import GroupTripPage from '@/pages/GroupTripPage';
import RightSideBar from '@/pages/GroupTripPage/RightSideBar';
import RandomTravelPage from '@/pages/RandomTravel/RandomTravelPage';
import GroupDetail from '@/pages/GroupTripPage/RightSideBar/GroupDetail';
import ProfilePage from '@/pages/ProfilePage';

import GroupMake from '@/pages/GroupTripPage/RightSideBar/GroupMake';
import DiscoverGangwon from '@/pages/DiscoverGangwonPage/DiscoverGangwonPage';

import AddInfoPage from '@/pages/Auth/AddInfoPage';

const routerInfo = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/signup',
        element: (
          <AuthGuard auth={false}>
            <SignupPage />
          </AuthGuard>
        ),
      },
      {
        path: '/signin',
        element: (
          <AuthGuard auth={false}>
            <SigninPage />
          </AuthGuard>
        ),
      },
      {
        path: '/signin/loading',
        element: (
          <AuthGuard auth={false}>
            <SocialLoadingPage />
          </AuthGuard>
        ),
      },
      {
        path: '/profile/addinfo',
        element: (
          <AuthGuard auth={true}>
            <AddInfoPage />
          </AuthGuard>
        ),
      },
      {
        path: '/profile',
        element: (
          <AuthGuard auth={true}>
            <ProfilePage />
          </AuthGuard>
        ),
      },
      {
        path: '/community/*',
        element: <CommunityPage />,
        children: [
          // 전체 보기
          { path: 'free/*', element: <CommunityBoard /> },
          { path: 'travel/*', element: <CommunityBoard /> },
          { path: 'all/*', element: <CommunityBoard /> },
          // 개별 디테일
          { path: 'free/detail/:page', element: <CommunityDetail /> },
          { path: 'travel/detail/:page', element: <CommunityDetail /> },
          { path: 'all/detail/:page', element: <CommunityDetail /> },
          // 글 작성
          {
            path: 'post',
            element: (
              <AuthGuard auth={true}>
                <CommunityPost />
              </AuthGuard>
            ),
          },
        ],
      },
      { path: '*', element: <NotFound /> },
      // TravelTasteTest 뒤에 뭐가 붙든 일단 TravelTasteTestPage로 감
      {
        path: '/TravelTasteTest/*',
        element: (
          <AuthGuard auth={true}>
            <TravelTastTestPage />
          </AuthGuard>
        ),
      },

      {
        path: '/grouptrip/*',
        element: (
          <AuthGuard auth={true}>
            <GroupTripPage />,
          </AuthGuard>
        ),
        children: [
          { path: '*', element: <RightSideBar /> },
          { path: ':groupId', element: <GroupDetail /> },
          { path: 'groupmake', element: <GroupMake /> },
        ],
      },
      { path: '/RandomTravel/*', element: <RandomTravelPage /> },
      { path: '/DiscoverGangwon/*', element: <DiscoverGangwon /> },
    ],
  },
];

export default routerInfo;
