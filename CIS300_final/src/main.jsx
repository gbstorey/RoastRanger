import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from "./routes/Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Preferences from "./routes/Preferences.jsx";
import YourStores from "./routes/YourStores.jsx";
import RecommendationOne from "./routes/RecommendationOne.jsx";
import RecommendationTwo from "./routes/RecommendationTwo.jsx";
import RecommendationThree from "./routes/RecommendationThree.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/preferences",
                element: <Preferences />
            },
            {
                path: "/your_stores",
                element: <YourStores />
            },
            {
                path: "/infusion",
                element: <RecommendationOne />
            },
            {
                path: "/recommendation2",
                element: <RecommendationTwo />
            },
            {
                path: "/recommendation3",
                element: <RecommendationThree />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
