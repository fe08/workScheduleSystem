export const state = () => ({
  account: [
    {
      name: "admin",
      password: "123456"
    },
    {
      name: "user",
      password: "321"
    }
  ],
  valid: false
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};
