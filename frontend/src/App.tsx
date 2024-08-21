import { Heading } from "@atoms/heading";
import { Button } from "@atoms/button";
import { Input } from "@atoms/input";

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
    </>
  );
}

export default App;
