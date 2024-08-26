import List from "./components/List/List";

function App() {

  const fruits = [
    { id: 1, name: 'Apple', calories: 52 },
    { id: 2, name: 'Banana', calories: 96 },
    { id: 3, name: 'Cherry', calories: 50 },
    { id: 4, name: 'Coconut', calories: 283 },
    { id: 5, name: 'Pineapple', calories: 50 }
  ];
  const vegetables = [
    { id: 6, name: 'Broccoli', calories: 55 },
    { id: 7, name: 'Carrot', calories: 41 },
    { id: 8, name: 'Cucumber', calories: 15 },
    { id: 9, name: 'Potato', calories: 77 },
    { id: 10, name: 'Tomato', calories: 18 }
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
    </>
  );
}

export default App;
