
import { createRoot } from 'react-dom/client'

import TailwindCss from './TailwindCss.jsx';

import './index.css'; // Or './App.css'



import App from './App.jsx'
import {App1} from './App1.jsx'
import { StrictMode } from 'react';
import Website from './Website.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div>

 {/* <App />
 <App1/> */}
 {/* <TailwindCss/>
  */}
  <Website/>
 
 </div>
 </StrictMode>
)
