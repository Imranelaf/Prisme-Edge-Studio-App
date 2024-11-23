'use client';

import React, { useState } from 'react';

interface Game {
  title: string;
  genre: string | null;
  description: string | null;
  releaseDate: string | null;
  platform: string[];
  price: number | null;
  rating: number | null;
  images: {
    id: number;
    url: string;
  }[];
}

function AddGame() {
  const [data, setData] = useState<Game>({
    title: '',
    genre: '',
    description: '',
    releaseDate: null,
    platform: [],
    price: 0,
    rating: 0,
    images: [],
  });

  const [images, setImages] = useState<string[]>(['']);
  const [platforms, setPlatforms] = useState<string[]>(['']);

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const handlePlatformChange = (index: number, value: string) => {
    const updatedPlatforms = [...platforms];
    updatedPlatforms[index] = value;
    setPlatforms(updatedPlatforms);
  };

  const addImageField = () => {
    setImages([...images, '']);
  };

  const addPlatformField = () => {
    setPlatforms([...platforms, '']);
  };

  const removeImageField = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const removePlatformField = (index: number) => {
    const updatedPlatforms = platforms.filter((_, i) => i !== index);
    setPlatforms(updatedPlatforms);
  };

  const handleData = (id: keyof Game, value: string | number | string[]) => {
    setData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedData = {
      ...data,
      platform: platforms,
      images: images.map((url) => ({ url })),
    };

    fetch('api/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedData),
    })
      .then(() => alert('Game Created Successfully'))
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8 p-6 mb-12 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-center text-gray-800">Add New Game</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            value={data.title}
            onChange={(e) => handleData('title', e.target.value)}
            type="text"
            placeholder="Enter game title"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="genre">
            Genre
          </label>
          <input
            id="genre"
            value={data.genre || ''}
            onChange={(e) => handleData('genre', e.target.value)}
            type="text"
            placeholder="Enter game genre"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={data.description || ''}
            onChange={(e) => handleData('description', e.target.value)}
            placeholder="Enter game description"
            rows={3}
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Release Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="releaseDate">
            Release Date
          </label>
          <input
            id="releaseDate"
            onChange={(e) => handleData('releaseDate', e.target.value)}
            type="date"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Platforms */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Platforms</label>
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                placeholder="Enter platform (e.g., PC, Xbox)"
                value={platform}
                onChange={(e) => handlePlatformChange(index, e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => removePlatformField(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addPlatformField}
            className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            + Add another platform
          </button>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            value={data.price || ''}
            onChange={(e) => handleData('price', +e.target.value)}
            type="number"
            placeholder="Enter game price"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image Links</label>
          {images.map((image, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <input
                type="url"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => removeImageField(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            + Add another image
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
        >
          Add Game
        </button>
      </form>
    </div>
  );
}

export default AddGame;
