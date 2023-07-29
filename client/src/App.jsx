import React from "react";
import { useState } from "react";
import requestService from "../services/requestService";

function App() {
  const [items, setItems] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleRequest = (e) => {
    e.preventDefault();

    const itemsObject = {
      items,
      quantity,
    };

    requestService.createRequest(itemsObject).then((returnedRequest) => {
      setItems("");
      setQuantity("");
      alert("Request sent. Thank you!");
    });
  };
  return (
    <div>
      <h2>Request Page</h2>
      <div>
        <form onSubmit={handleRequest}>
          <input
            type="text"
            placeholder="items"
            value={items}
            onChange={(e) => setItems(e.target.value)}
          />
          <input
            type="text"
            placeholder="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default App;
