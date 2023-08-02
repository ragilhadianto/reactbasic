import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = (props) => {
    return(
        <form className="" action="">
          <InputForm label="Email" type="email" placeholder="lorem@impus.com" name="email"></InputForm>
          <InputForm label="Password" type="password" placeholder="***" name="password"></InputForm>
          <Button variant="bg-blue-600">Login</Button>

        </form>

    );
};

export default FormLogin;