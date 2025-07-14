import { GoogleOAuthProvider } from '@react-oauth/google';
import HomePage from './pages/HomePage';

function App() {
  return (
    <GoogleOAuthProvider clientId="282550678301-nkvqlh9ntqe3na5n39gj4gs4j4f04589.apps.googleusercontent.com">
      <HomePage />
    </GoogleOAuthProvider>
  );
}

export default App;
