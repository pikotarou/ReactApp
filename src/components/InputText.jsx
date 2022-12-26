import { Input } from "@chakra-ui/react";
const InputText = ({ inputWidth, type, validation, disabled = false }) => {
  return (
    <Input
      type={type}
      {...validation}
      style={{ width: inputWidth, backgroundColor: "#fff" }}
      id={type}
      variant="outline"
      disabled={disabled}
    />
  );
};

export default InputText;
