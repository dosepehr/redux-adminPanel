import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Users from '../Pages/Users/Users';
import Infos from '../Pages/Infos/Infos';
import Courses from '../Pages/Courses/Courses';
import Blogs from '../Pages/Blogs/Blogs';
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
            },
            {
                path: '/courses',
                element: <Courses />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
            }
        ],
    },
]);

export default router;
