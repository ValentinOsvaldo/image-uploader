import React from 'react';
import ReactDOM from 'react-dom/client';
import { ImageUploader } from './ImageUploader';
import './styles/index.css';
import { ImageProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ImageProvider>
      <ImageUploader />
    </ImageProvider>
  </React.StrictMode>
);
