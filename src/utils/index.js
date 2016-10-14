import wx from 'labrador';

export const redirect = (url) => {
  wx.redirectTo({ url })
};

export const go = (url) => {
  wx.navigateTo({ url });
};
