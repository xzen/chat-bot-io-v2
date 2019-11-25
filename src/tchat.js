class Tchat {
  render() {
    const tchatMessages = document.querySelector('.tchat--messages');
    const item = {
      avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/theory-1552510536.jpg?crop=0.501xw:1.00xh;0.0173xw,0&resize=480:*',
      name: 'Sansa',
      message: 'Bonjour Cyril',
    };

    tchatMessages.innerHTML += this.tplMessageReceived(item);

    this.sendValue();
  }

  /**
   * tpl message received
   * {Object} item
   */
  tplMessageReceived(item) {
    const { avatar, name, message } = item;
    const date = new Date();

    return `
      <div class="row mb-1">
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
   * {String} message
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

const tchat = new Tchat();

tchat.render();
