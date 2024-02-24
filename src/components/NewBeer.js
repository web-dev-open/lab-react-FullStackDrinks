// src/components/NewBeer.js

import React, { useState } from 'react';

function NewBeer() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('New beer successfully created!');
      } else {
        console.error('Failed to create new beer');
      }
    } catch (error) {
      console.error('Error creating new beer:', error);
    }
  };

  return (
    <div>
      <h1>Create a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Tagline:
          <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          First Brewed:
          <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} required />
        </label>
        <label>
          Brewers Tips:
          <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} required />
        </label>
        <label>
          Attenuation Level:
          <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} required />
        </label>
        <label>
          Contributed By:
          <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} required />
        </label>
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
