import { useState } from "react";
import { createBeer } from "../api";
import "../App.css";


const NewBeer = () => {
    const [form, setForm] = useState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
    });
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form);
      alert("Beer added successfully!");
    };
  
    return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" type="text" onChange={handleChange} required />
  
          <label>Tagline</label>
          <input name="tagline" type="text" onChange={handleChange} required />
  
          <label>Description</label>
          <textarea name="description" onChange={handleChange} required />
  
          <button type="submit">Add Beer</button>
        </form>
      </div>
    );
  };
  
  export default NewBeer;