import './index.scss';

/** Class for say */
class HelloWorld {
  /**
   * @constructor
   * {String} say
   */
  constructor(say) {
    this.say = say;
  }

  /**
   * speak
   */
  speak(say = this.say) {
    const el = document.querySelector('#app');
    const elH1 = document.createElement('h1');

    elH1.textContent = say;
    el.appendChild(elH1);
  }
}

const helloWorld = new HelloWorld('Bonjour le monde');

helloWorld.speak();
helloWorld.speak('Hello World');
