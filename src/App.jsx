import UserGreeting from "./components/UserGreeting/UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Owolabi" />
    </>
  );
}

export default App;
