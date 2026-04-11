const API_URL = 'http://localhost:3001/api';

export const authorize = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }
  
  return response.json();  // Returns: { token, user: { id, name, email } }
};

export const signup = async (name, email, password) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Signup failed');
  }
  
  return response.json();  // Returns: { token, user: { id, name, email } }
};

export const checkToken = async (token) => {
  if (!token) throw new Error('No token provided');
  
  const response = await fetch(`${API_URL}/auth`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Invalid token');
  }
  
  const data = await response.json();
  return { data };  // Matches your old format: { data: { name, email, _id } }
};

export const capitalizeFirst = (str = "") =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const logout = () => {
  localStorage.removeItem('token');
  return Promise.resolve({ message: 'Logged out successfully' });
};
