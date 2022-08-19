import './App.css';
import LongStory1 from './Components/LongStory/LongStory1';
import LongStory2 from './Components/LongStory/LongStory2';
import Navbar from './Components/Navbar';
import { stories } from './data';
function App() {
  const longStory = stories.filter((item) => item["type"] === "long")
  const shortStory = stories.filter((item) => item["type"] === "short")
  return (
    <div class="bg-black h-auto pb-12">
      <Navbar></Navbar>
      <div class="h-auto w-full ">
      <LongStory1 data={longStory[0]}></LongStory1>
      <LongStory2 data={longStory[1]}></LongStory2>
      </div>
    </div>
  );
}

export default App;
