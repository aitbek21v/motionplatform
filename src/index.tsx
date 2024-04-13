import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Admin from './pages/Admin';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/login',
    element:<Admin/>
  }
])
root.render(
   <RouterProvider router={router}/>
);

