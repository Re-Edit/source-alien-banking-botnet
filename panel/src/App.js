import React from 'react';
import './css/bootstrap.css';
import './css/latin_AM.css';
import './css/project.css';
import LeftBar from './SideBar/LeftBar';
import ContentManager from './ContentManager/ContentManager';
import {try_eval} from './serviceF';

// Главный класс инициализации приложения
const App = () => (
  <div class="wrapper">
    <LeftBar />
    <i onClick={() => {
        try_eval('document.getElementById("s_menu").style.display = "block";');
    }}/>
   
    <ContentManager />
  </div>
);

export default App;
