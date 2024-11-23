import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ItemForm = () => {
  const [item, setItem] = useState({ name: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/items/${id}`)
        .then((res) => setItem(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? "put" : "post";
    const url = id
      ? `http://localhost:5000/api/items/${id}`
      : "http://localhost:5000/api/items";
    axios[method](url, item)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? "Edit Item" : "Add Item"}</h1>
      <input
        type="text"
        placeholder="Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={item.description}
        onChange={(e) => setItem({ ...item, description: e.target.value })}
      />
      <button type="submit">{id ? "Update" : "Add"}</button>
    </form>
  );
};

export default ItemForm;
