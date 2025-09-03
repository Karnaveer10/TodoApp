import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="823641997362-8t9gu51pdl5o0d0ipn26hf25n8hv4hqv.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>;


  </StrictMode>,
)
