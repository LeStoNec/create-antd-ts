import Loadable from 'react-loadable';
import Loading from '../components/Loading';
import { RouteConfig } from 'react-router-config';
    const routes: RouteConfig[] = [
        {
            path: '/',
            component: Loadable({
              loader: () => import('../layouts/WithFramedLayout'),
              loading: Loading,
            }),
            routes: [
              {
                exact: true,
                component: Loadable({
                  loader: () => import('../pages/versionManage/index'),
                  loading: Loading,
                }),
              },
            ],
          },
    ]
export default routes;