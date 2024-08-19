import { Heading } from "./components/atoms/heading";
import { Button } from "./components/atoms/button";

function App() {
  const handleClick = () => {
    console.log("Hello world!");
  };

  return (
    <>
      <Heading level="h1">Hello world!</Heading>
      <Button
        styleType="solid"
        variant="warning"
        type="submit"
        onClick={handleClick}
      >
        Puede ser más tarde
      </Button>
    </>
  );
}

export default App;
