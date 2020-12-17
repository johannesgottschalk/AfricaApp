import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
   let history = useHistory();

   const redirectTextAndExercises = () => {
      history.push('/textandexercises')
   }

   const redirectUserAccess = () => {
      history.push('/useraccess')
   }

   const redirectLanguage = () => {
      history.push('/language')
   }

    return (
       <div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li>
               <div class="dropdown">
                  <button class="dropbtn"onClick={redirectTextAndExercises} >Text and Exercises</button>
                     <div class="dropdown-content">
                        <a href="/displaytext">Display Text</a>
                        <a href="/exercises">Exercises</a>
                     </div>
                  </div>
            </li>
            <li>
               <div class="dropdown">
                  <button class="dropbtn"onClick={redirectUserAccess} >User Access</button>
                     <div class="dropdown-content">
                        <a href="/login">Login</a>
                        <a href="/privacy">Privacy Policy</a>
                     </div>
                  </div>
            </li>
            <li>
               <div class="dropdown">
                  <button class="dropbtn"onClick={redirectLanguage} >Language</button>
                     <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                     </div>
                  </div>
            </li>
          </ul>
          
       </div>
    );
}
 
export default Navigation;
