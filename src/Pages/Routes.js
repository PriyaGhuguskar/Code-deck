import React from 'react';

const Home = React.lazy(() => import('./Home') );
const PlayGround = React.lazy(() => import('./PlayGround') );
const Page404 = React.lazy(() => import('./Page404') );

const routes = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/code/:folderId/:playgroundId",
        component: <PlayGround />
    },
    {
        path: "*",
        component : <Page404 />
    }
]

export default routes
