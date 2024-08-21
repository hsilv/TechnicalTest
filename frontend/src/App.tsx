import { Heading } from "./components/atoms/heading";
import { Button } from "./components/atoms/button";
import { Input } from "./components/atoms/input";
import { ReactComponent as SampleIcon } from "./assets/vite.svg";
import { Icon } from "./components/atoms/icon";

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
      <Icon svg={SampleIcon} size={36} color="red" />
    </>
  );
}

export default App;
