import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';
import AddExercise from './components/addExercise';
import ViewExercises from './components/viewExercise';
import DeleteExercise from './components/deleteExercise';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Homepage from './components/Home';
import './file.css';

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path='/Home' element={<Homepage />} />
            <Route path='/Add' element={<AddExercise />} />
            <Route path='/Delete' element={<DeleteExercise />} />
            <Route path='/View' element={<ViewExercises />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;


