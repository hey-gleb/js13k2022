AFRAME.registerComponent('button', {
  dependencies: ['material'],
  schema: {
    color: {type: 'color', default: '#000'},
  },
  init: function () {
    const {el, data} = this;
    const button = document.createElement('a-cylinder');
    button.setAttribute('scale', '0.1 0.1 0.1');
    button.setAttribute('material', 'color', data.color);
    el.appendChild(button);
  }
});
