import logo from './logo.svg';
import './App.css';
import img1 from "./img1.png}
function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black";max-width:"100vw"}}>

 <h1 className="title red">Your name here</h1>

 <br/ >

 <img src={img1} />

 <br/ >

<img src="/myImage.png" alt="myimage" />


</div>

<video style={{ width:"320" height:"240" controls}}>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
