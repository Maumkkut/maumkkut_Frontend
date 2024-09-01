import HomePage from '@pages/HomePage';
import GlobalLayout from '@layout/GlobalLayout';
import SignupPage from '@/pages/SignupPage';
import SigninPage from '@/pages/SigninPage';
import TravelTastTestPage from '@/pages/TravelTasteTest/TravelTastTestPage';

const routerInfo = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/signup', element: <SignupPage /> },
      { path: '/signin', element: <SigninPage /> },
      // TravelTasteTest 뒤에 뭐가 붙든 일단 TravelTasteTestPage로 감
      { path: '/TravelTasteTest/*', element: <TravelTastTestPage /> },
    ],
  },
];

export default routerInfo;
