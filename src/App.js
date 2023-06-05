
import './App.css';
import Video from './components/Video';

function App() {
  const channel = "Aman";
  return (
    <div className='App'>
      <div> hello</div>
      <Video title="React js Tutorial" views={"10k"} time={"1year ago"} channel={channel} verified={true} />
      <Video title="Node js Tutorial" views={"200"} time={"1 month ago"} channel={channel} />
    </div>
  );
}

export default App;
