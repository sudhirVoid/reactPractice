import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact.jsx';
import Root from './Components/Root.jsx';
import EmailUs from './Components/EmailUs.jsx';
import Landing from './Components/Landing.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
    <Route path='' element={<Landing />} />
      <Route path='contact' element={<Contact />} />
      <Route path='emailUs' element={<EmailUs />} />
    </Route>


  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
