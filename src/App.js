import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';

function App() {
  const handleOnChangeSearchValue = (searchValue) => {
    console.log(searchValue)
  }
  return (
    <div className="App">
      <Search
        onChangeSearchValue={handleOnChangeSearchValue}
      />
      <CurrentWeather />
    </div>
  );
}

export default App;
