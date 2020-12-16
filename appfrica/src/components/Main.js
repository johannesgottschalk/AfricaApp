import './css/Main.css';

function Main() {
  return (
    <div class="container">
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
      <br/>
      <br/>
      <button>Login</button>
      <br/>
      <br/>
      <h1>No Login ...?</h1>
      <br/>
      <br/>
      <button>Sign up for free</button>
      <br/>
      <br/>
      <button>Start text reading</button>
      <br/>
      <br/>
      <button>Try an exercise</button>
      <br/>
      <br/>
    </div>
  </div>               
  );
}

export default Main