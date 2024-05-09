import { RouterProvider, createHashRouter } from 'react-router-dom';
import HomePage from "../pages/Home/HomePage.tsx";
import GamePage from "../pages/Game/GamePage.tsx";

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

    const router = createHashRouter([
        ...routesForPublic,
    ]);

    return <RouterProvider router={router} />;
}

export default Routes;
