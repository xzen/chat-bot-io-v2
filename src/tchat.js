class Tchat {
  /**
   * render
   */
  render() {
    const tchatMessages = document.querySelector('.tchat--messages');
    const tchatContacts = document.querySelector('.tchat--contacts');
    const item = {
      id: 'sansa-123',
      avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/theory-1552510536.jpg?crop=0.501xw:1.00xh;0.0173xw,0&resize=480:*',
      name: 'Sansa',
      message: 'Bonjour Cyril',
    };

    tchatMessages.innerHTML += this.tplMessageReceived(item);

    tchatContacts.innerHTML += this.tplContact(item);

    this.sendValue();
  }

  /**
   * tpl contact
   * @param {Object} item
   * @param {String} item.id
   * @param {String} item.avatar
   * @param {String} item.name
   * @param {String} item.message
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

      tchatMessages.innerHTML += this.tplMessageSend(this.getInputValue());
    });
  }

  /**
   * get input value
   */
  getInputValue() {
    return document.querySelector('.tchat--input').value;
  }
}

export default Tchat;
