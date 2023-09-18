import { Button, Flex, Heading, TextField } from "@radix-ui/themes";
import { ChangeEvent, useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleButton = () => {
    alert("Button");
  };

  return (
    <Flex direction="column" gap="3">
      <Heading>Heading</Heading>
      <TextField.Input
        placeholder="placeholder"
        onChange={handleInput}
        value={input}
      />
      <Button onClick={handleButton}>Button</Button>
    </Flex>
  );
}

export default App;
