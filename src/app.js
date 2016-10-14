import wx from 'labrador';
import * as Components from './components';

const getComponentsList = () => {
  return Object.keys(Components).map((component) => {
    return {
      name: component
    }
  });
};

export default class {
  globalData = {
    pages: getComponentsList()
  };

  onLaunch() {
  }
}
