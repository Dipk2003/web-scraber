import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import ScraperDisplay from '../components/ScraperDisplay';

function HomePage() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Web Scraper</h1>

      {!user ? (
        <GoogleLogin
          onSuccess={credentialResponse => setUser(credentialResponse)}
          onError={() => console.log('Login Failed')}
        />
      ) : (
        <>
          <button onClick={() => { googleLogout(); setUser(null); }}>
            Logout
          </button>
          <ScraperDisplay />
        </>
      )}
    </div>
  );
}

export default HomePage;
