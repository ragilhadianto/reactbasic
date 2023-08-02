import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = (props) => {
    return(
        <form className="" action="">
          <InputForm label="Name" type="text" placeholder="input your name here..." name="email"></InputForm>
          <InputForm label="Email" type="email" placeholder="lorem@impus.com" name="email"></InputForm>
          <InputForm label="Password" type="password" placeholder="***" name="password"></InputForm>
          <InputForm label="Confirm Password" type="password" placeholder="***" name="confirmpassword"></InputForm>
          <Button variant="bg-blue-600">Register</Button>

        </form>

    );
};

export default FormRegister;