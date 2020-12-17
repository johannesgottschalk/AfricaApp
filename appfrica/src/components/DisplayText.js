function DisplayText() {
    return (
      <div class="main">
        <div id="displayexplanation" class="column-1 box">
          <h1>Select a Passage to Display</h1>
          <p>Here, you can select a Bible passage to display</p>
          <p>If you omit "First verse", an entire chapter will be displayed</p> 
          <p>If you omit "Last verse", only one verse will be displayed</p>
        </div>
        <div id="textselection" class="column-1 box">
          <h1>Make a selection:</h1>
          <h3>Corpus</h3>
          <input type="radio" id="ETCBCOT"></input>
          <label for="Corpus">Hebrew (ETCBC4, OT)</label><br></br>
          <input type="radio" id="ETCBCOTTrans"></input>
          <label for="Corpus">Hebrew (ETCBC4, Transliterated, OT)</label><br></br>
          <input type="radio" id="Greek"></input>
          <label for="Corpus">Greek (Nestle 1904, NT)</label><br></br>
          <p>TO DO INSERT PASSAGES ETC</p>
      </div>  
    </div>                 
    );
  }
  
  export default DisplayText
