import Post from "./components/Post/Post"
import './App.css';

const App = () => {
const ANAKIN_IMAGE = "https://townsquare.media/site/442/files/2020/07/Star-Wars-Revenge-of-the-Sith.jpg";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


  return (
    <Post author={{
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader"
    }}
content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
image={RAY_IMAGE}
date={"26 лют."}
/>
  );
}


export default App;
