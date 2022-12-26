import { Button } from "@chakra-ui/react";
const Btn = ({ color, content, type, onClick, disabled = false }) => {
  return (
    <Button
      type={type}
      colorScheme={color}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </Button>
  );
};

export default Btn;
