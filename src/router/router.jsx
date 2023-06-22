import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Users from '../Pages/Users/Users';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/users',
                element: <Users />,
            },
        ],
    },
]);

export default router;
