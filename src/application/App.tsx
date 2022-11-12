import { RouterProvider as Routes } from 'react-router';

import router from '../navigation/Routes';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes router={router} />;
    </>
  );
}

export default App;
