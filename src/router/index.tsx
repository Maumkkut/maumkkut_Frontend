import HomePage from '@pages/HomePage';
import GlobalLayout from '@layout/GlobalLayout';
import SignupPage from '@/pages/SignupPage';

const routerInfo = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/signup', element: <SignupPage /> },
    ],
  },
];

export default routerInfo;
