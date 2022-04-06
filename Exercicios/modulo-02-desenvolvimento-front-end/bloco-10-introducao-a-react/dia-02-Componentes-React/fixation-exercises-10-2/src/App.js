import './App.css';
import Image from './components/Image';

function App() {
  const imgCat = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
  return (
    <div className="App">
      <Image source={imgCat} altText='Cute cat staringgggg'/>
    </div>
  );
}

export default App;
