import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from "../pages/Home/HomePage.tsx";

const Routes = () => {
    const routesForPublic = [
        {
            path: '',
            element: <HomePage />,
        },
    ];

    const router = createHashRouter([
        ...routesForPublic,
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;
