import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import Bag from './routes/Bag.jsx'
import Home from './routes/Homeee.jsx'
import {Provider} from "react-redux"
import myntraStore from './store/index.js'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/bag",
      element:<Bag/>,

    },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
  </React.StrictMode>,
)