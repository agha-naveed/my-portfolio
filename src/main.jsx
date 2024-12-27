import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './Home'
import '@fontsource/poppins'; 
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)