import { IDisplayElement } from './interfaces/DisplayElement';
import { IObserver } from './interfaces/Observer';
import { WeatherData } from './WeatherData';

export class CurrentConditionsDisplay implements IObserver, IDisplayElement {
  private _temperature: number = 0;
  private _humidity: number = 0;
  private _weatherData: WeatherData;

  constructor(wd: WeatherData) {
    this._weatherData = wd;
    this._weatherData.registerObserver(this);
  }

  display = (): string => {
    return `Current Conditions: ${this._temperature} + ${this._humidity}`;
  };
  update = (temp: number, humidity: number, pressure: number): void => {
    this._temperature = temp;
    this._humidity = humidity;
    this.display();
  };
}
