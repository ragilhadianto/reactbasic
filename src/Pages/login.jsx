import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = (props) =>{

    return(
        <AuthLayout title="Login">
            <FormLogin/>
            <p className="text-sm mt-5 text-center">
                <Link to="/register">datar sekarang</Link>
            </p>
        </AuthLayout>
    );
};

export default LoginPage;