// ローカル
const helloComponent = {
  template: "<p>hello</p>"
}
const app = Vue.createApp({
  data: () => ({

  }),
  components: {
    "hello-component": helloComponent
  }
})

// グローバル
// app.component("hello-component",{
//   template: "<p>hello</p>"
// })
app.mount("#app")