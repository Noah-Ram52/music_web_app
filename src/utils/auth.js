// src/utils/auth.js (or wherever your YoutubeApi.js lives)
export const authorize = (email, password) => {
  // Pretend we did a fetch request that gave us back a token
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Fake validation - accept any non-empty email/password
      if (email && password && email.includes('@')) {
        const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMSIsImVtYWlsIjoieW91ckBlbWFpbC5jb20iLCJpYXQiOjE3MDk5OTk5OTl9.fakeSignature";
        resolve({ 
          token: fakeToken,
          user: { 
            email, 
            name: email.split('@')[0] 
          }
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 500); // Simulate network delay
  });
};

export const checkToken = (token) => {
  // Pretend we did a fetch request that gave us back a user
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Fake token validation - accept any token that looks real
      if (token && token.includes('eyJ')) {
        resolve({
          data: { 
            name: "verified user", 
            email: "fake@example.com", 
            _id: "fake-user-id-123" 
          }
        });
      } else {
        reject(new Error("Invalid token"));
      }
    }, 300); // Simulate network delay
  });
};

export const logout = () => {
  // Pretend we called a logout API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Logged out successfully" });
    }, 200);
  });
};
