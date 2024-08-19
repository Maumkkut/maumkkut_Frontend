import HomePage from '@pages/HomePage';
import GlobalLayout from '@layout/GlobalLayout';
import SignupPage from '@/pages/SignupPage';
import SigninPage from '@/pages/SigninPage';
import CommunityPage from '@pages/CommunityPage';
import CommunityPost from '@pages/CommunityPage/CommunityPost';
import CommunityBoard from '@pages/CommunityPage/CommunityBoard';
import NotFound from '@/pages/NotFound';
import CommunityDetail from '@/pages/CommunityPage/CommunityDetail';

const routerInfo = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/signin', element: <SigninPage /> },
      {
        path: '/community',
        element: <CommunityPage />,
        children: [
          // 전체 보기
          { path: 'free/:page', element: <CommunityBoard /> },
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
    ],
  },
];

export default routerInfo;
