import 'react-native-gesture-handler';
import React from 'react';

import { AuthProvider } from './screens/AuthContext';
import AppNav from './screens/AppNav';

function App () {
  return (
    <AuthProvider>
    <AppNav />
    </AuthProvider>
  );
}

export default App;

