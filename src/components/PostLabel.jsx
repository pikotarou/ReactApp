import InputText from "./InputText";
import Btn from "./Btn";
import { InputDiv, Label } from "../style/Styled";
import { FetchPostApi } from "../api/PostApi";
import { useFormContext } from "react-hook-form";

const PostLabel = ({ setIsMatch }) => {
  const { getValues, setValue, register, resetField } = useFormContext();

  const clickHandler = () => {
    const postCode = getValues("post_code");

    const getAddressData = async () => {
      const addressDetail = await FetchPostApi(postCode);

      if (addressDetail === "存在しない郵便番号") {
        setIsMatch({ postCode: true, address: true });
        resetField("address");
      } else {
        setIsMatch({ postCode: false, address: false });
        setValue("address", addressDetail, { shouldDirty: true });
      }
    };

    getAddressData();
  };

  return (
    <InputDiv>
      <Label htmlFor="post_code">郵便番号</Label>
      <InputText
        type={"post_code"}
        validation={{
          ...register("post_code", {
            required: {
              value: true,
              message: "郵便番号を入力してください",
            },
            pattern: {
              value: /^(\d{1,})$/,
              message: "郵便番号は数値で入力してください",
            },
            minLength: {
              value: 7,
              message: "郵便番号は7桁で入力してください",
            },
            maxLength: {
              value: 7,
              message: "郵便番号は7桁で入力してください",
            },
          }),
        }}
        inputWidth={"20%"}
      />
      <span style={{ minWidth: "5%" }}></span>
      <Btn onClick={clickHandler} color={"orange"} content={"検索"} />
    </InputDiv>
  );
};

export default PostLabel;
