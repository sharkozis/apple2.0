

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Products from "./component/Products/Products";
import Cart from "./component/Cart/Cart";
import ProductDetails from "./component/ProductDetails/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: ()=> fetch('/Utils/fakeDb.JSON')
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        // loader: ({params}) => fetch(`url-${param.id}`)

      },
    ],
    errorElement: <div>There Something Went Wrong!</div>
  },
]);
function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
