import { useState } from 'react';
import { useQuery } from 'react-query';
import { getCurrentWeather, getForecastWeather } from './api/weather';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';

const commonConfig = (searchValue) => {
  return {
    enabled: !!searchValue,
    select: (data) => data.data
  }
}

function App() {
  const [searchValue, setSearchValue] = useState(null);
  const [lat, long] = searchValue?.value.split(" ") ?? [];
  const cityData = { lat, long }
  const { data: currentWeather } = useQuery("currentWeather", () => getCurrentWeather(cityData), commonConfig(searchValue))
  const { data: forecastWeather } = useQuery("forecastWeather", () => getForecastWeather(cityData), commonConfig(searchValue))

  const handleOnChangeSearchValue = (searchValueInput) => {
    setSearchValue(searchValueInput)
  }
  return (
    <div className="App" >
      <Search
        onChangeSearchValue={handleOnChangeSearchValue}
      />
      {!!currentWeather && <CurrentWeather name={searchValue?.label} data={currentWeather} />}
    </div >
  );
}

export default App;
