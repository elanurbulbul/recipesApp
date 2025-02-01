import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ViewHome,
  ViewRecipeSingle,
  ViewRecipeList,
  ViewSearchResult,
  ViewError,
  ViewTypeList,
} from "./views";
import BaseLayout from "./layouts/BaseLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ViewError />,
    children: [
      { index: true, element: <ViewHome/> },
      { path: "/recipes/:typeOf/:typeName", element: <ViewRecipeList/> },
      { path: "/recipes/:id", element: <ViewRecipeSingle/> },
      { path: "/recipes/search", element: <ViewSearchResult/> },
      { path: "/types/:typeId", element: <ViewTypeList/> },
      { path: "*", element: <ViewError/> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
