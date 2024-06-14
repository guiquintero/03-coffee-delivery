import { AiOutlineMinus } from "react-icons/ai"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import { useState } from "react";
import { Button, Input, SpinButtonDiv } from "./styles";

export default function SpinButton() {
  const [value, setValue] = useState(1);

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    if (value < 10) {
      setValue(value + 1);
    }
  };

  return (
    <SpinButtonDiv>
      <Button onClick={decrement}><AiOutlineMinus /></Button>
      <Input type="text" value={value} readOnly />
      <Button onClick={increment}><AiOutlinePlus /></Button>
    </SpinButtonDiv>
  );
}