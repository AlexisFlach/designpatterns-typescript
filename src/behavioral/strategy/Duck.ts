import { IFlyBehavior } from './interfaces/Flybehavior';

export abstract class Duck {
  protected flyBehavior: IFlyBehavior;

  constructor() {}

  setNewFlyBehavior(flyBehavior: IFlyBehavior) {
    this.flyBehavior = flyBehavior;
  }
}
