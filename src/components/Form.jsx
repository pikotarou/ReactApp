import { useFormContext } from "react-hook-form";
import { useState } from "react";
import AddressLabel from "./AddressLabel";
import Btn from "./Btn";
import NameLabel from "./NameLabel";
import PostLabel from "./PostLabel";
import { Div, P } from "../style/Styled";

const Form = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useFormContext();

  const onSubmit = (data) => {
    console.log(JSON.stringify({ customer_info: { ...data } }));
    setIsMatch({ postCode: false, address: true });
    reset();
  };

  const [isMatch, setIsMatch] = useState({ postCode: false, address: true });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ marginTop: "90px" }}
      action="#"
    >
      <NameLabel />
      {errors.last_name?.types.required && (
        <P>{errors.last_name.types.required}</P>
      )}
      {errors.first_name?.types.required && (
        <P>{errors.first_name.types.required}</P>
      )}
      <PostLabel isMatch={isMatch} setIsMatch={setIsMatch} />
      {errors.post_code?.types.required && (
        <P>{errors.post_code.types.required}</P>
      )}
      {errors.post_code?.types.minLength && (
        <P>{errors.post_code.types.minLength}</P>
      )}
      {errors.post_code?.types.maxLength && (
        <P>{errors.post_code.types.maxLength}</P>
      )}
      {errors.post_code?.types.pattern && (
        <P>{errors.post_code.types.pattern}</P>
      )}
      {isMatch.postCode && <P>入力された郵便番号は存在しませんでした</P>}

      <AddressLabel isMatch={isMatch} />

      <Div>
        <Btn
          color={"linkedin"}
          content={"申込内容を送信"}
          type={"submit"}
          disabled={
            !isValid ||
            !dirtyFields.last_name ||
            !dirtyFields.first_name ||
            !dirtyFields.post_code ||
            !dirtyFields.address
          }
        />
      </Div>
    </form>
  );
};

export default Form;
