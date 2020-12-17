import React from 'react';
 
const Login = () => {
    return (
      <div class="main">
         <div id="landing" class="column-1 box">
            <div class="header-login">
               <h1>Please login</h1>
            </div>
            <div class="header-body">
               <form>
                  <label for="uname">User Name</label>
                  <input type="text" id="uname" name="uname"></input><br></br>
                  <br/>
                  <label for="pname">Password</label>
                  <input type="password" id="pname" name="pname"></input>
               </form>
            </div>
         </div>
      </div>  
    );
}
 
export default Login;