import Vue from 'vue';
import LoadingComponents from './loading.vue';

const LoadingConstructor = Vue.extend(LoadingComponents);

const loading = (options = {}) => {
  const defaultOptions = {
    mask: true,
    partial: false,
    title: ''
  };

  const $container = options.container || document.body;
  const instance = new LoadingConstructor().$mount(document.createElement('div'));

  Object.assign(instance, defaultOptions, options);
  $container.appendChild(instance.$el);

  return instance;
};

export default loading;
