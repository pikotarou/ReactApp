import InputText from "./InputText";
import { InputDiv, Label } from "../style/Styled";
import { useFormContext } from "react-hook-form";
const NameLabel = () => {
  const { register } = useFormContext();

  return (
    <InputDiv>
      <Label htmlFor="last_name">氏名</Label>
      <InputText
        type={"last_name"}
        validation={{
          ...register("last_name", {
            required: {
              value: true,
              message: "名前を入力してください",
            },
          }),
        }}
        inputWidth={"20%"}
      />
      <span style={{ minWidth: "5%" }}></span>
      <InputText
        type={"first_name"}
        validation={{
          ...register("first_name", {
            required: {
              value: true,
              message: "苗字を入力してください",
            },
          }),
        }}
        inputWidth={"20%"}
      />
    </InputDiv>
  );
};

export default NameLabel;
