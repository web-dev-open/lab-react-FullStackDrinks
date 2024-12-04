import React from 'react'
import { useState } from 'react';


const NewBeerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => alert('Beer added successfully!'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow p-4 rounded mt-8"
    >
      {Object.keys(formData).map(field => (
        <div className="mb-4" key={field}>
          <label className="block text-sm font-bold mb-1">
            {field.replace('_', ' ')}
          </label>
          <input
            type={field === 'attenuation_level' ? 'number' : 'text'}
            className="w-full border rounded-full p-2"
            value={formData[field]}
            onChange={e =>
              setFormData({ ...formData, [field]: e.target.value })
            }
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
      >
        Add Beer
      </button>
    </form>
  );
}

export default NewBeerPage
