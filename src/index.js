import Bot from './bot';
import Tchat from './tchat';
import mock from './mock';

import './index.scss';

// Tchat
const tchat = new Tchat();

tchat.render();

// Bots
const botSansa = new Bot(mock[0]);
const botTyrion = new Bot(mock[1]);

console.log(botSansa.findActions('/sansa time'));
console.log(botTyrion.findActions('/sansa devise'));

// Mock
console.log(mock[0].actions[0].response());
console.log(mock[1].actions[0].response());
