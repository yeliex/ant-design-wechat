import wx, { Component } from 'labrador';

export default class Input extends Component {
  data = {
    value: '',
    defaultValue: '',
    type: 'text',
    password: false,
    placeholder: '',
    'placeholder-style': '',
    'placeholder-class': '',
    disabled: false,
    maxlength: 140,
    'auto-focus': false,
    focus: false,
    bindchange: null,
    bindinput: null,
    bindfocus: null,
    bindblur: null,
    name: '',
    class: ''
  };

  onLoad() {
    this.setData({
      value: this.data.defaultValue || this.data.value,
      class: `ant-input ${this.data.class}`
    });
  }
}
