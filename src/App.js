import './App.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense } from "react";
// import AdminRoutes from "./Routes/AdminRoutes";
// import EmployerRoutes from './Routes/EmployerRoutes';

import { Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./Routes/ProtectedRoute";
// import Dashboard from "./component/AdminLayout/index";
import LoginPage from "./pages/LoginPage/index";
// import AdminLogin from "./pages/LoginPage/AdminLogin";
// import DefaultLayout from "./pages/Employee/DefaultLayout";
// import UserDefaultLayout from "./pages/User/DefaultLayout";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
      <Route path="/" element={<LoginPage/>}/>
      </Routes>
      </Suspense>
  );
}

export default App;
