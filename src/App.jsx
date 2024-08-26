import Button from "./components/Button";

function App() {
  const onClick = (e) => { console.log(e.target) };

  return (
    <>
      <Button onClick={onClick}>Click me</Button>
    </>
  );
}

export default App;
