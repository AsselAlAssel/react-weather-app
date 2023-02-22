
# React Weather App

This is a simple weather application built with React that uses the [OpenWeatherMap API](https://openweathermap.org/) to fetch current weather data for a given location. The app allows users to search for a location by entering its name in a search input field, and displays the current temperature, weather description, and an icon representing the current weather condition.

The app also features a responsive design that adjusts to different screen sizes, making it easy to use on desktop, tablet, and mobile devices.

## Installation

To get started with the React Weather App, you'll need to have [Node.js](https://nodejs.org/) installed on your computer. Once you have Node.js installed, follow these steps:

1.  Clone the repository to your local machine:

bashCopy code

`git clone https://github.com/AsselAlAssel/react-weather-app.git` 

2.  Change into the project directory:

bashCopy code

`cd react-weather-app` 

3.  Install the project dependencies:

bashCopy code

`npm install` 

4.  Start the development server:

bashCopy code

`npm start` 

The app should now be running at [http://localhost:3000](http://localhost:3000/).

## Usage

To use the app, simply enter the name of a location in the search input field and press the "Search" button. The app will then fetch the current weather data for that location and display it on the screen.

The input field is implemented using the [react-select-async-paginate](https://github.com/vtaits/react-select-async-paginate) library, which provides an input field that can load options asynchronously and paginate through the results.

The weather data is fetched using the [React Query](https://react-query.tanstack.com/) library, which provides a simple and efficient way to manage data fetching and caching in React applications.

The app also includes an accordion component implemented using the [React Accessible Accordion](https://github.com/springload/react-accessible-accordion) library, which provides an accessible and keyboard-friendly accordion component that can be used to show and hide additional details about the weather data.

## Contributing

If you find a bug or have a suggestion for how to improve the React Weather App, please feel free to open an issue or submit a pull request. All contributions are welcome!
