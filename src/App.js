import './App.css';
import AmazingAuthor from './Components/AmazingAuthor/AmazingAuthor';
import AmazingCommunity from './Components/Communities/AmazingCommunity';
import LongStory1 from './Components/LongStory/LongStory1';
import LongStory2 from './Components/LongStory/LongStory2';
import Navbar from './Components/Navbar';
import ShortStory1 from './Components/ShortStory/ShortStory1';
import ShortStory2 from './Components/ShortStory/ShortStory2';
import { stories } from './data';
function App() {
  const longStory = stories.filter((item) => item["type"] === "long")
  const shortStory = stories.filter((item) => item["type"] === "short")
  return (
    <div class="bg-black h-auto pb-0.5">
      <Navbar></Navbar>
      <div class="h-auto w-full ">
      <LongStory1 data={longStory[0]}></LongStory1>
      <ShortStory1 data={shortStory[0]}></ShortStory1>
      <ShortStory2 data={shortStory[1]}></ShortStory2>
      <AmazingAuthor></AmazingAuthor>
      <LongStory2 data={longStory[1]}></LongStory2>
      <ShortStory2 data={shortStory[2]}></ShortStory2>
      <ShortStory1 data={shortStory[3]}></ShortStory1>
      <AmazingCommunity></AmazingCommunity>
      </div>
    </div>
  );
}

export default App;
