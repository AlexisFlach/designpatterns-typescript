import { MallardDuck } from './MallardDuck';

export const duck = (function () {
  const mallardDuck = new MallardDuck();

  return {
    mallardDuck,
  };
})();
