import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import CreateEmployee from "./pages/CreateEmployee/index";
import EmployeeList from "./pages/EmployeeList/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CreateEmployee />} />
        <Route path="/employeelist" element={<EmployeeList />} />
      </Route>
    </Routes>
  );
}

export default App;
