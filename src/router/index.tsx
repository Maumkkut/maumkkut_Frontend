import HomePage from '@pages/HomePage';
import GlobalLayout from '@layout/GlobalLayout';
import SignupPage from '@/pages/SignupPage';
import SigninPage from '@/pages/SigninPage';
import CommunityPage from '@pages/CommunityPage';
import CommunityPost from '@pages/CommunityPage/CommunityPost';
import CommunityBoard from '@pages/CommunityPage/CommunityBoard';

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
          { index: true, element: <CommunityBoard /> },
          { path: 'post', element: <CommunityPost /> },
        ],
      },
    ],
  },
];

export default routerInfo;
