import { IQuackBehavior } from './interfaces/QuackBehavior';

export class Quacker implements IQuackBehavior {
  quack = (): string => 'Quack!!';
}
