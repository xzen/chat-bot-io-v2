class Bot {
  constructor(entity) {
    this.entity = entity;
  }

  /**
   * search action
   * @param {String} value
   * @return {Array} responses
   */
  findActions(value) {
    return this.entity.actions
      .map((actions) => actions.keyWords
        .map((keyWord) => (keyWord === value ? actions.response() : false))
        .filter((action) => (!action ? false : action)))
      .filter((result) => result.length !== 0);
  }
}

export default Bot;
