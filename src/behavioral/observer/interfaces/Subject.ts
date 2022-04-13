import { IObserver } from './Observer';

export interface ISubject {
  removeObserver: (observer: IObserver) => void;
  registerObserver: (observer: IObserver) => void;
  notifyObservers: () => void;
}
