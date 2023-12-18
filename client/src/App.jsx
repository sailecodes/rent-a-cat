import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Gift from "./components/pages/Gift";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "gift",
        element: <Gift />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
