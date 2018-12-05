import vue from 'vue'

import toastComponent from './MyToast'

const ToastConstructor = vue.extend(toastComponent);

let showToast = (text, duration = 2000) => {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text: text,
        show: true,
        showContent: true
      }
    }
  });

  document.body.appendChild(toastDom.$el);
  setTimeout(() => {
    toastDom.showContent = false
  }, duration - 500);

  setTimeout(() => {
    toastDom.show = false
  }, duration);

};

let registryToast = () => {
  vue.prototype.$toast = showToast;
};

export default registryToast;

