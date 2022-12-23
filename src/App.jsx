import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import Layouts from "./layouts/Layout";
import Form from "./components/Form";
import { FormContext } from "./context/FormContext";

function App() {
  // テスト
  return (
    <ChakraProvider theme={theme}>
      <Layouts>
        <FormContext>
          <Form />
        </FormContext>
      </Layouts>
    </ChakraProvider>
  );
}

export default App;
