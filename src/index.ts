import { duck } from './behavioral/strategy/index';
import { display } from './behavioral/observer/index';

/**
 * strategy pattern
 */
console.log('-------> Strategy Pattern');
console.log('# ' + display.currentConditionsDisplay.display());
console.log();

/**
 * observer pattern
 */
console.log('-------> Observer Pattern');
console.log('# ' + duck.mallardDuck.display());
console.log();
