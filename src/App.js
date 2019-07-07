import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './layout/Layout';
import Home from './components/home/Home';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
        <Layout >
          {/* put switch here */}
          <Home/>
          </Layout>
    </div>
  );
}

export default App;
