import { HStack } from '@chakra-ui/react';
import NavigationBar from 'components/NavigationBar';
import React, { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { authRoutes } from 'routes';

function App() {
  const routing = useRoutes(authRoutes);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      {routing}
      <NavigationBar />
    </div>
  );
}

export default App;
