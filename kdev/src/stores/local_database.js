import { defineStore } from 'pinia';

export const myLocalData = defineStore('my_data', {
  state: () => ({
    counter: 0,
    counter_2: 999,
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    increment () {
      this.counter++
    }
  }
})
