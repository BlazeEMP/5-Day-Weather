import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object


// TODO: Define a class for the Weather object
class Weather {
  // ref fetch data and decide what data we will pull for display
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    // city name here
  }

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    // take the coordinates out to use on weather API call
  }

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    // build the API call with the destructured coordinates
  }

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {

  }

  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    // use 
  }

  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {

  }

  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {

  }

  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {

  }

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    // 
  }
}

export default new WeatherService();
