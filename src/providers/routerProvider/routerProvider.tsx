import { Layout } from "@/components/Common/Layout/Layout";
import { allRoutes } from "@/providers/routerProvider/allRoutes";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const RouterProvider = () => {
  return (
    <BrowserRouter
    // future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/events" />} />
          {allRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
