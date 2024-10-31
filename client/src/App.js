import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import Accounts from './pages/Accounts';
import Auth from './pages/Auth';
import CashFlow from './pages/CashFlow';
import Transactions from './pages/Transactions';
import Overview from './pages/Overview';
import EducationResources from './pages/Educational_resources'; // Import the new component
import Root from './pages/Root';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataProvider from './store/DataProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Navigate to='/auth' replace />,
    children: [
      {
        index: true,
        element: <Navigate to='/auth' replace />
      },
      { path: 'auth', element: <Auth /> }, // Auth page
      { path: 'accounts', element: <Accounts /> },
      { path: 'cash-flow', element: <CashFlow /> },
      { path: 'transactions', element: <Transactions /> },
      { path: 'overview', element: <Overview /> },
      { path: 'education-resources', element: <EducationResources /> } 
    ]
  }
]);

const App = () => {
  return (
    <DataProvider>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router} />
    </DataProvider>
  );
};

export default App;
