import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:5000/api/items/${id}`)
      .then(() => setItems(items.filter((item) => item._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Item List</h1>
      <Link to="/add">Add Item</Link>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <span>{item.name}</span>
            <div>
              <Link to={`/edit/${item._id}`}>Edit</Link>
              <button onClick={() => deleteItem(item._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
