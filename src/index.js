// import Bot from './bot';
import Tchat from './tchat';
import mockBots from './mock';

import './index.scss';

// Tchat
const tchat = new Tchat(mockBots);

tchat.render();
