import React from "react";
import Button from "./components/Elements/Button"
import InputForm from "./components/Elements/Input";
import FormLogin from "./components/Fragments/FormLogin";
import AuthLayout from "./components/Layouts/AuthLayout";
import LoginPage from "./Pages/login";
import Register from "./Pages/register";


function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <LoginPage></LoginPage>
      {/* <Register></Register> */}
    </div>
  )
}

export default App
