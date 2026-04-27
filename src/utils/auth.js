const API_URL = 'http://localhost:3001/api';

 function checkResponse(res) {
   if (res.ok) {
     return res.json();
   }
   return res.json().then((errorData) => {
     throw new Error(errorData.message || `Error ${res.status}`);
   });
 }

const authorize = (email, password) => {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then(checkResponse);
};

const signup = (name, email, password) => {
  return fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  }).then(checkResponse);
};


const checkToken = (token) => {
  if (!token) throw new Error('No token provided');

  return fetch(`${API_URL}/auth`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(checkResponse)
    .then((data) => ({ data }));
};

const capitalizeFirst = (str = "") =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


export { authorize, signup, checkToken, capitalizeFirst };