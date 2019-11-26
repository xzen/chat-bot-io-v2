import Bot from './bot';

class Tchat {
  constructor(bots) {
    this.bots = bots.map((bot) => new Bot(bot));
  }

  /**
   * render
   */
  render() {
    this.renderContacts();
    this.sendValue();
  }

  /**
   * tpl contact
   * @param {Object} item
   * @param {String} item.id
   * @param {String} item.avatar
   * @param {String} item.name
   */
  tplContact(item) {
    const { id, avatar, name } = item;
    const count = document.querySelectorAll(`.${id}`).length;

    return `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <img src="${avatar}" width="50" alt="avatar" class="rounded-circle">
        <h5 class="display-5 mt-2">${name}</h5>
        <span class="badge badge-primary badge-pill">${count}</span>
      </li>`;
  }

  /**
   * render contacts
   */
  renderContacts() {
    const tchatContacts = document.querySelector('.tchat--contacts');

    this.bots.forEach((bot) => {
      tchatContacts.innerHTML += this.tplContact(bot.entity);
    });
  }

  /**
   * tpl message received
   * @param {Object} item
   * @param {String} item.id
   * @param {String} item.avatar
   * @param {String} item.name
   * @param {String} item.message
   */
  tplMessageReceived(item) {
    const date = new Date();
    const {
      avatar,
      id,
      name,
      message,
    } = item;

    return `
      <div class="${id} row mb-1">
        <div class="col-6">
          <div class="card">
            <h5 class="card-header">
              <img src="${avatar}" width="50" alt="avatar" class="rounded-circle">
            </h5>
            <div class="card-body">
              <h5 class="card-title">${message}</h5>
              <p class="card-text">${name} | ${date.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div class="col-6"></div>
      </div>`;
  }

  /**
   * tpl message send
   * @param {String} message
   */
  tplMessageSend(message) {
    const date = new Date();
    return `
      <div class="row mb-1">
        <div class="col-6"></div>
        <div class="col-6">
          <div class="card">
            <h5 class="card-header">
              <img src="https://png.pngtree.com/svg/20161212/f93e57629c.svg" width="50" alt="avatar" class="rounded-circle">
            </h5>
            <div class="card-body">
              <h5 class="card-title">${message}</h5>
              <p class="card-text">${date.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>`;
  }

  /**
   * send value
   */
  sendValue() {
    const tchatMessages = document.querySelector('.tchat--messages');
    const elBtn = document.querySelector('.tchat--button');

    elBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const messageSend = this.getInputValue();

      tchatMessages.innerHTML += this.tplMessageSend(messageSend);

      this.botsResponse(messageSend);
    });
  }

  /**
   * bots response
   * {String} messageSend
   */
  botsResponse(messageSend) {
    const tchatMessages = document.querySelector('.tchat--messages');

    this.bots.forEach((bot) => {
      const messageBot = this.formatBotResponse(bot.entity, bot.findActions(messageSend));

      if (messageBot.message.length) {
        tchatMessages.innerHTML += this.tplMessageReceived(messageBot);
      }
    });
  }

  /**
   * Format bot response
   * @param {Object} bot
   * @param {String} message
   * @return {Object} response
   */
  formatBotResponse(bot, message) {
    const { id, avatar, name } = bot;

    return {
      id,
      name,
      avatar,
      message,
    };
  }

  /**
   * get input value
   */
  getInputValue() {
    return document.querySelector('.tchat--input').value;
  }
}

export default Tchat;
