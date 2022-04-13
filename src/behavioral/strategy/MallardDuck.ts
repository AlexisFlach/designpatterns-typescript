import { FlyWithWings } from './FlyWithWings';
import { Duck } from './Duck';
import { Quacker } from './Quacker';

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quacker();
  }

  display = (): string => {
    return 'I am a Mallard Duck';
  };
}
