import { useState } from 'react';
import { RouterProvider } from 'react-router';

import './App.css';
import router from './navigation/Routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
