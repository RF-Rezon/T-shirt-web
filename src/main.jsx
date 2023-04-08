import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import OrderReview from './Components/OrderReview/OrderReview';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path:'review',
        element: <OrderReview></OrderReview>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'contact',
        element: <Contact/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
