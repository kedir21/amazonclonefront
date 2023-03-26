import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from '../src/Components/StateProvider';
import reducer, { initialState } from './reducer';
// import  {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
   <StateProvider initialState={initialState} reducer={reducer}>
    <App />
</StateProvider>
 
  </React.StrictMode>
);

