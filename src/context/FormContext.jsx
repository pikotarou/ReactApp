import { useForm, FormProvider } from "react-hook-form";

const FormContext = ({ children }) => {
  const methods = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export { FormContext };
