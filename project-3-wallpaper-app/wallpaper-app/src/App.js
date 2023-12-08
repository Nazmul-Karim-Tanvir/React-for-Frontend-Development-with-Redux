import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import './styles.css';

const firebaseConfig = {
  apiKey: "AIzaSyDrbmSVmKN6rtCykFlavOU92AHf72y8Wh4",
  authDomain: "wallpaper-app-71800.firebaseapp.com",
  projectId: "wallpaper-app-71800",
  storageBucket: "wallpaper-app-71800.appspot.com",
  messagingSenderId: "297009811287",
  appId: "1:297009811287:web:a39e67e35683565958b812",
  measurementId: "G-F8VV43STX5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Fetch categories from the JSON server
    axios.get('http://localhost:3000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));

    return () => unsubscribe();
  }, [auth]);

  const submitFeedback = (categoryId, photoId) => {
    if (!user) {
      alert('Please log in to submit feedback.');
      return;
    }

    const nameInput = document.getElementById(`name-${photoId}`);
    const commentInput = document.getElementById(`comment-${photoId}`);

    const feedbackData = {
      category_id: categoryId,
      photo_id: photoId,
      visitor_name: nameInput.value,
      comment: commentInput.value
    };

    axios.post('http://localhost:3000/feedbacks', feedbackData)
      .then(() => {
        alert('Feedback submitted successfully!');
        // Optionally, you can update the UI to reflect the new feedback.
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  const handleCategoryChange = (event) => {
    const selectedCategoryId = parseInt(event.target.value, 10);
    setSelectedCategory(selectedCategoryId);
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
    } catch (error) {
      console.error('Error creating account:', error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="App">
      <h1 style={{
        backgroundImage: 'linear-gradient(to right, #FF8C00, #FFD700, #FF4500)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}>Choose Your Favorite Full HD Wallpaper Now</h1>

      {user ? (
        <div>
          <button onClick={logout}>Logout</button>

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
                    <img
                      src={`http://localhost:3000${photo.url}`}
                      alt={photo.title}
                      style={{ maxWidth: '300px' }}
                    />

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
      ) : (
        // Render login/signup form if the user is not logged in
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signUp}>Sign Up</button>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
