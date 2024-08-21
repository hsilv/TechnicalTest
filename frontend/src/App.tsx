import { Heading } from "@atoms/heading";
import { Button } from "@atoms/button";
import { Input } from "@atoms/input";
import { IconizedButton } from "@molecules/IconizedButton";
import { ReactComponent as PlusIcon } from "@assets/plus.svg";

function App() {
  const handleClick = () => {
    console.log("Hello world!");
  };

  return (
    <>
      <Heading level="h1">Hello world!</Heading>
      <Button
        styleType="solid"
        variant="primary"
        type="submit"
        onClick={handleClick}
      >
        Puede ser más tarde
      </Button>
      <Input
        styleType="outlined"
        variant="primary"
        type="text"
        placeholder="Enter text"
      />
      <IconizedButton icon={PlusIcon}></IconizedButton>
    </>
  );
}

export default App;
