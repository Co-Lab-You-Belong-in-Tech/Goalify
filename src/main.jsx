import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ErrorPage from './pages/error';
import Dashboard from './pages/dashboard/dashboard';
import App from './App';
import './index.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import GoalPage from './pages/goalPage/GoalPage.jsx';

import InitialGoalMessage from "./components/stepper/InitialGoalMessage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/createGoal',
    element: <InitialGoalMessage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/goals/:goalId',
    element: <GoalPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
