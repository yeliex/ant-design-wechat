import wx, { Component, app } from 'labrador';
import { Menu } from '../../components';
import { go } from '../../utils';

export default class Index extends Component {
  pages = [];

  onReady() {
    this.setData('pages', app.globalData.pages)
  }

  handleMenuClick = ({title}) => {
    go(`/pages/components/index/index`);
  };

  children = {
    Menu: new Menu({
      overlay: '@pages',
      handleClick: this.handleMenuClick
    })
  };
}
