class Bot {
  constructor(entity) {
    this.entity = entity;
  }

  /**
   * search action
   * @param {String} value
   */
  findActions(value) {
    // test
    return this.entity.actions
      .map((actions) => actions.keyWords
        .map((keyWord) => (keyWord === value ? actions.response() : false))
        .filter((action) => (!action ? false : action)));
  }
}

export default Bot;
