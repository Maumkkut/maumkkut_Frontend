import HomePage from '@pages/HomePage';
import GlobalLayout from '@layout/GlobalLayout';

const routerInfo = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default routerInfo;
