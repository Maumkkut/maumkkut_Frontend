import HomePage from '@pages/HomePage';
import Layout from '@components/Layout';

const routerInfo = [
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export default routerInfo;
