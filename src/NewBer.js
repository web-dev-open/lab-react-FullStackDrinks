// NewBeer.js
import React, { useState } from 'react';
import axios from 'axios';

const NewBeer = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData);
      // Handle success, maybe redirect or show a success message
    } catch (error) {
      // Handle error, maybe show an error message
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a New Beer</h2>
      <form onSubmit={handleSubmit}>
        {/* Render form fields here */}
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
