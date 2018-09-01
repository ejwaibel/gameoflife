require('./cell.scss');

module.exports = {
  template: require('./cell.tpl.html'),
  controller: require('./cell.controller.js'),
  bindings: {
    size: '<',
    index: '<',
    isPopulated: '<',
    onChange: '&'
  }
};
