import { Alert } from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Tokyo",
    "London",
    "Paris",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && <Alert onClose ={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
