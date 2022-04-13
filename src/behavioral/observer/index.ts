import { CurrentConditionsDisplay } from './CurrentConditionsDisplay';
import { WeatherData } from './WeatherData';

export const display = (function () {
  const wd = new WeatherData();
  const currentConditionsDisplay = new CurrentConditionsDisplay(wd);

  return {
    currentConditionsDisplay,
  };
})();
