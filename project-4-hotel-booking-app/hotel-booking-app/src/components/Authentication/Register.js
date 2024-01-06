import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthAction = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
    } catch (error) {
      setError('Failed to log out');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="container mt-5 my-5 card shadow">
        <div className="col-md-6 offset-md-3">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
          <div className="mt-3">
            <Link to="/rooms">Go to Rooms</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 my-5 card shadow">
    <div className="col-md-6 offset-md-3">
      <h2 className="mb-4">{isLogin ? 'Log In' : 'Register Now'}</h2>
      <div className="mb-3">
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
      {/* Login/Register Form */}
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" placeholder='type email' className="form-control shadow" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input type="password" placeholder='password..' className="form-control shadow" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {!isLogin && (
        <div className="mb-3">
          <label className="form-label">Confirm Password:</label>
          <input type="password" placeholder='confirm pass..' className="form-control shadow" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
      )}
      <button className="btn btn-primary" onClick={handleAuthAction}>
        {isLogin ? 'Log In' : 'Register'}
      </button>
      <div className="text-center mt-3">
        <p>{isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Log In'}
          </span>
        </p>
      </div>
    </div>
  </div>
  );
}

export default Register;
