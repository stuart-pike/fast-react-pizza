import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as upDateOrderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';

// declaring the route/s outside the JSX in a JS array is necessary in React Router 6.4 in order to enable data fetching and loading.
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errors will bubble up to the parent route unless they are handled elsewhere in the nested routes.
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader, // 2. Provide loader
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        // A Form submission on this route will call the function createOrderAction
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: upDateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
