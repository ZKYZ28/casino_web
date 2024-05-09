import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from "../pages/Home/HomePage.tsx";
import GamePage from "../pages/Game/GamePage.tsx";
import RegisterPage from "../pages/Auth/RegisterPage.tsx";

const Routes = () => {
    const routesForPublic = [
        {
            path: '',
            element: <HomePage />,
        },
        {
            path: 'game',
            element: <GamePage />,
        },
    ];

    const routesForNotAuthenticatedOnly = [
        {
            path: 'register',
            element: <RegisterPage />,
        }
    ];

    const router = createHashRouter([
        ...routesForPublic,
        ...routesForNotAuthenticatedOnly,
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;
