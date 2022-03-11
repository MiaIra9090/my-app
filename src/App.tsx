import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Content } from 'components';
import { Issues } from 'components/Issues';
import { store } from 'store';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="issues/:id" element={<Issues />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
};

export default App;
