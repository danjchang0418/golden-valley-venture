import "./App.css";

import { useEffect } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import Faq from "./pages/faq/Faq";
import Features from "./pages/features/Features";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRouter from "./components/layout/ProtectedRouter";
import { notFoundPath } from "./core/util/pathBuilder.util";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRouter>
          <Dashboard />
        </ProtectedRouter>
      ),
    },
    {
      path: notFoundPath(),
      element: <NotFoundPage />
    }
  ]);
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;