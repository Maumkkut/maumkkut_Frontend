import HomePage from '@pages/HomePage';
import GlobalLayout from '@layout/GlobalLayout';
import SignupPage from '@/pages/SignupPage';
import SigninPage from '@/pages/SigninPage';
import CommunityPage from '@/pages/CommunityPage';

const routerInfo = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/signin', element: <SigninPage /> },
      { path: '/community', element: <CommunityPage /> },
    ],
  },
];

export default routerInfo;
