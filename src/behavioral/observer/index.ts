import { CurrentConditionsDisplay } from './CurrentConditionsDisplay';
import { WeatherData } from './WeatherData';

export const main = () => {
  const wd = new WeatherData();
  const ccd = new CurrentConditionsDisplay(wd);
  wd.setMeasurements(100, 100, 100);

  return ccd.display();
};
