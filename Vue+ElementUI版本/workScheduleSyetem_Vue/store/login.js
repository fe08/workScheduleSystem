export const state = () => ({
  list: []
})

export const mutations = {
  add(state, item) {
    state.list.push(item)
  }
}
