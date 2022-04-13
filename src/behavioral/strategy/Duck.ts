import { IFlyBehavior } from './interfaces/Flybehavior';
import { IQuackBehavior } from './interfaces/QuackBehavior';

export abstract class Duck {
  protected flyBehavior: IFlyBehavior;
  protected quackBehavior: IQuackBehavior;

  constructor() {}

  abstract display: () => string;

  performFly = (): string => {
    if (!this.flyBehavior) 'No Flybehavior set';
    return this.flyBehavior.fly();
  };

  performQuack = (): string => {
    if (!this.quackBehavior) 'No QuackBehavior set';
    return this.quackBehavior.quack();
  };

  setNewFlyBehavior(flyBehavior: IFlyBehavior) {
    this.flyBehavior = flyBehavior;
  }
  
}
