import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch categories from the JSON server
    axios.get('http://localhost:3000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Function to submit feedback
  const submitFeedback = (categoryId, photoId) => {
    const nameInput = document.getElementById(`name-${photoId}`);
    const commentInput = document.getElementById(`comment-${photoId}`);

    const feedbackData = {
      category_id: categoryId,
      photo_id: photoId,
      visitor_name: nameInput.value,
      comment: commentInput.value
    };

    // Send feedback data to the JSON server
    axios.post('http://localhost:3000/feedbacks', feedbackData)
      .then(() => {
        alert('Feedback submitted successfully!');
        // Optionally, you can update the UI to reflect the new feedback.
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });

      
  };

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    const selectedCategoryId = parseInt(event.target.value, 10);
    setSelectedCategory(selectedCategoryId);
  };

  return (
    <div className="App">
      {/* Dropdown menu for selecting a category */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value={null}>Select a category</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>

      {/* Display photos based on the selected category */}
      {selectedCategory && (
        <div>
          <h2>{categories.find(category => category.id === selectedCategory).name}</h2>
          {categories
            .find(category => category.id === selectedCategory)
            .photos.map(photo => (
              <div key={photo.id}>
                <img src={photo.url} alt={photo.title} style={{ maxWidth: '300px' }} />
                <p>{photo.title}</p>
                <input type="text" placeholder="Your Name" id={`name-${photo.id}`} />
                <textarea placeholder="Leave a comment" id={`comment-${photo.id}`} />
                <button onClick={() => submitFeedback(selectedCategory, photo.id)}>
                  Submit Feedback
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
