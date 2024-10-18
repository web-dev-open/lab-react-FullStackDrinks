// src/components/NewBeer.js
import React, { useState } from 'react';
import './style.css';
import newBeerImg from '../assets/new-beer.png'; // Import your image

const NewBeer = ({ addBeer }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBeer = {
            name,
            description,
            image,
        };
        addBeer(newBeer); // Call the function passed from App.js
        setName('');
        setDescription('');
        setImage('');
    };
    return (
        <div className="new-beer">
            <h2>Add a New Beer</h2>
            <img src={newBeerImg} alt="New Beer" className="new-beer-image" />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Beer Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <button type="submit">Add Beer</button>
            </form>
        </div>
    );
};

export default NewBeer;
