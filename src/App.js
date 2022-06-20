
import imgg from "./imageInSrc.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import'./Style.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div style={{border:'1px solid  black' ,  width:'100vw'}}>

<h1 className="title red">GO MY CODE...</h1>

<br></br>

<div className="imgg"> 
<img src= {imgg} alt="go my code1"width="550" height="440"/>
<br></br>
<img src="/imageInPublic.jpg"alt="go my code2" width="550" height="440"/>
</div>

</div>
<video width="420" height="340" controls>
<source src="myVideo.mp4" type="video/mp4"/>
</video>
    </div>
  );
}

export default App;
