import React from 'react';
import { useHistory } from 'react-router-dom';

function Home () {

  let history = useHistory();

  const redirectLogin = () => {
    history.push('/login')
  }

  const redirectSignup = () => {
    history.push('/signup')
  }

  const redirectTextReading = () => {
    history.push('/readtext')
  }

  const redirectTryExercise = () => {
    history.push('tryexercise')
  }

  return (
        <div class="main">
        <div id="landing" class="column-1 box">
          <h1>What is Appfrica</h1>
          <br/>
          <p>Appfrica gives free access to the Hebrew Bible in the NoSQL Hebrew database HebrewETCBC4 and
              GreekNestle1904 text of the Greek New Testament with grammatical annotations; furthermore,
              teachers can use exercises developed for Appfrica or create their own.
          </p>
          <br/>
          <p>Appfrica runs on Raspberry Pi mini-computers used as servers to support e-learning in hard-
              to-reach-areas and provices learners with a unique learning experience.
          </p>
          <br/>
          <p>The source code for Appfica is available at Github. We hope developers will for this code
              and join us to add additiobnal features.
          </p>
          <br/>
          <p>Have fun</p> 
        </div>
        <div id="login" class="column-1 box">
          <h1>Press the Button to Login</h1>
          <form>
            <button onClick={redirectLogin} type="button">Login</button> 
          </form>
          <br />
          <br />
          <h1>No login...?</h1>
          <form>
            <button onClick={redirectSignup} type="button">Sign up</button> 
          </form>
          <br/>
          <form>
            <button onClick={redirectTextReading} type="button">Start Text Reading</button>
          </form>
          <br/>
          <form>
            <button onClick={redirectTryExercise} type="button">Try an exercise</button>
          </form>
        </div>
      </div>               
      );
}
 
export default Home;