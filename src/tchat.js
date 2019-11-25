class Tchat {
  render() {
    this.sendValue();
  }

  /**
   * send value
   */
  sendValue() {
    const elBtn = document.querySelector('.tchat--button');

    elBtn.addEventListener('click', (e) => {
      e.preventDefault();

      console.log(this.getInputValue());
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
