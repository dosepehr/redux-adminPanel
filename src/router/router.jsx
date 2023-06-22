import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Users from '../Pages/Users/Users';
import Infos from '../Pages/Infos/Infos';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/infos',
                element: <Infos/>,
            }
        ],
    },
]);

export default router;
