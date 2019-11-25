class Tchat {
  render() {
    this.sendValue();
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
