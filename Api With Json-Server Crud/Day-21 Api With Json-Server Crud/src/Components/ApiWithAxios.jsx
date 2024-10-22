import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ApiWithAxios() {
  const [data, setData] = useState([]);
  const [addPrice, setAddPrice] = useState("");
  const [addReview, setAddReview] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addImage, setAddImage] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:5000/data");
    setData(response.data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAddImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addDataHandler = async () => {
    if (editIndex !== null) {
      const updatedData = {
        price: addPrice,
        review: addReview,
        description: addDescription,
        image: addImage,
      };

      const response = await axios.put(`http://localhost:5000/data/${editIndex}`, updatedData);
      setData(data.map(item => (item.id === editIndex ? response.data : item)));
      setEditIndex(null);
    } else {
      const response = await axios.post("http://localhost:5000/data", {
        price: addPrice,
        review: addReview,
        description: addDescription,
        image: addImage,
      });
      setData([...data, response.data]);
    }

    setAddPrice("");
    setAddReview("");
    setAddDescription("");
    setAddImage("");
  };

  const handleEdit = (id) => {
    const singleData = data.find((item) => item.id === id);
    if (singleData) {
      setAddPrice(singleData.price);
      setAddReview(singleData.review);
      setAddDescription(singleData.description);
      setAddImage(singleData.image);
      setEditIndex(id);
    }
  };

  const handleDelete =  (id) => {
    let deleteData = data.filter((item)=> item.id != id);
    setData(deleteData)
  };

  return (
    <div className="container">
      <h1>ApiWithAxios</h1>

      <input 
        type="text" 
        placeholder="Add price" 
        value={addPrice} 
        onChange={(e) => setAddPrice(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Add Review" 
        value={addReview} 
        onChange={(e) => setAddReview(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Add Description" 
        value={addDescription} 
        onChange={(e) => setAddDescription(e.target.value)} 
      />
      <input type="file" onChange={handleImageChange} />

      <button onClick={addDataHandler}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <div className="data-list">
        {data && data.map((e) => (
          <div key={e.id} className="data-item">
            <img src={e.image} alt="Item" />
            <div className="item-details">
              <p><strong>Review:</strong> {e.review}</p>
              <p><strong>Price:</strong> {e.price}</p>
              <p><strong>Description:</strong> {e.description}</p>
            </div>
            <div className="item-actions">
              <button onClick={() => handleEdit(e.id)}>Edit</button>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
