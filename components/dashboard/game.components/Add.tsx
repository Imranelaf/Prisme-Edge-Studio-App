'use client';
import React, { useState } from 'react';

interface Game {
  id: number;
  title: string;
  genre: string | null;
  description: string | null;
  releaseDate: Date | null;
  platform: string[];
  price: number | null;
  rating: number | null;
  images: {
    id: number;
    url: string;
  }[];
}

function AddGame() {
  const [data, setData] = useState<Game>()
  const [images, setImages] = useState<string[]>(['']);

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = [...images];
    updatedImages[index] = value;
    setImages(updatedImages);
  };

  const addImageField = () => {
    setImages([...images, '']);
  };

  const removeImageField = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4 text-center text-gray-800">Add New Game</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter game title"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="genre">
            Genre
          </label>
          <input
            id="genre"
            type="text"
            placeholder="Enter game genre"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter game description"
            rows={3}
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="releaseDate">
            Release Date
          </label>
          <input
            id="releaseDate"
            type="date"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="number"
            placeholder="Enter game price"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

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
