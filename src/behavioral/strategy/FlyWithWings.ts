import { IFlyBehavior } from './interfaces/Flybehavior';

export class FlyWithWings implements IFlyBehavior {
  fly = (): string => 'I am flying';
}
