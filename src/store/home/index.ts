import { defineStore } from 'pinia';
import state from './state';

const useHomeStore = defineStore('home', {
  state: () => state,
});

export default useHomeStore;
