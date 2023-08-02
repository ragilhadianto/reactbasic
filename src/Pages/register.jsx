import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = (props) =>{

    return(
        <AuthLayout title="Register">
            <FormRegister/>
            <p className="text-sm mt-5 text-center">
                <Link to="/login">login sekarang</Link>
            </p>
        </AuthLayout>
    );
};

export default RegisterPage;