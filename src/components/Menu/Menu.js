import wx, { Component, PropTypes, List } from 'labrador';
import MenuItem from '../MenuItem';

export default class Menu extends Component {
  data = {
    list: []
  };
  props = {
    overlay: [],
    handleClick: () => {
    }
  };
  propTypes = {
    overlay: PropTypes.array,
    handleClick: PropTypes.func
  };

  handleItemClick = (key) => (events) => {
    this.props.handleClick({ ...events, key })
  };

  children = (() => {
    let i = 0;
    return {
      menuList: new List(MenuItem, 'list', {
        handleClick: this.handleItemClick(i),
        key: i++
      })
    }
  })();

  onUpdate(props) {
    this.setData('list', props.overlay)
  }
}

