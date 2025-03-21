import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router';


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
    <Suspense fallback={`<p className="text-2xl text-red-500">Loading</p>`}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)