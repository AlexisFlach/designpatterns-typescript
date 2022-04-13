import { IObserver } from './interfaces/Observer';
import { ISubject } from './interfaces/Subject';

export class WeatherData implements ISubject {
  private readonly _observers: IObserver[];
  private _temperature: number;
  private _humidity: number;
  private _pressure: number;

  constructor() {
    this._observers = new Array<IObserver>();
  }
  removeObserver = (observer: IObserver): void => {
    let indexOfItem = this._observers.indexOf(observer);
    this._observers.splice(indexOfItem, 1);
    return;
  };

  registerObserver = (observer: IObserver): void => {
    this._observers.push(observer);
  };

  notifyObservers = (): void => {
    this._observers.forEach((o: IObserver) => {
      o.update(this._temperature, this._humidity, this._pressure);
    });
  };

  measurementsChanged = () => {
    this.notifyObservers();
  };

  setMeasurements = (temp: number, humidity: number, pressure: number) => {
    this._temperature = temp;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  };
}
