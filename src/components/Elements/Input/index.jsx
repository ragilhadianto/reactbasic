import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
    const { label, name, placeholder, type } = props;
    return (
        <div className="mb-6">
            <Label htmlfor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    );
}

export default InputForm;