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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        formData
      );
      console.log('New beer created:', response.data);
    } catch (error) {
      console.error('Error creating new beer:', error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            className="form-control rounded-5"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tagline" className="form-label fw-bold">
            Tagline
          </label>
          <input
            type="text"
            className="form-control rounded-5"
            id="tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label fw-bold">
            Description
          </label>
          <textarea
            className="form-control rounded-4"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label fw-bold">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control rounded-5"
            id="first_brewed"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label fw-bold">
            Brewers Tips
          </label>
          <input
            type="text"
            className="form-control rounded-5"
            id="brewers_tips"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label fw-bold">
            Attenuation Level
          </label>
          <input
            type="number"
            className="form-control rounded-5"
            id="attenuation_level"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label fw-bold">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control rounded-5"
            id="contributed_by"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-info container rounded-5 text-white">
          ADD NEW
        </button>
      </form>
    </div>
  );
};

export default NewBeer;
