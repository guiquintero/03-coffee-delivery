import { AiOutlineMinus } from "react-icons/ai"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import { useState } from "react";
import { Button, Input, SpinButtonDiv } from "./styles";

interface SpinButtonProps {
  initialValue?: number;
  id?: string;
  onChange?: (value: number) => void;
}

export default function SpinButton({ initialValue, onChange }: SpinButtonProps) {
  const [value, setValue] = useState(initialValue ?? 1);

  const decrement = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const increment = () => {
    if (value < 10) {
      const newValue = value + 1;
      setValue(newValue);
      if (onChange) onChange(newValue);
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