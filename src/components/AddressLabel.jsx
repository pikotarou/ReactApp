import InputText from "./InputText";
import { InputDiv, Label } from "../style/Styled";
import { useFormContext } from "react-hook-form";
const AddressLabel = ({ isMatch }) => {
  const { register } = useFormContext();

  return (
    <InputDiv>
      <Label htmlFor="address">詳細住所</Label>
      <InputText
        type={"address"}
        validation={{
          ...register("address"),
        }}
        inputWidth={"45%"}
        disabled={!isMatch["address"]}
      />
    </InputDiv>
  );
};
export default AddressLabel;
