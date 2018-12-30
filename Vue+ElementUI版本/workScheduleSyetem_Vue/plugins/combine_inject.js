export default ({app}, inject) => {
  inject('combineInject', (str) => {
    console.log('combine inject ', str)
  })
}
