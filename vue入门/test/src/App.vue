<!--父组件-->
<template>
  <div id="app">
    <img src="./assets/logo.png" @click="change">
    <hello v-bind:msgToSon="msgToSon" @childSay="hearSon"></hello>
    <p>{{sonTold}}</p>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    data () {
      return {
        msgToSon: 'msg to son',
      }
    },
    components: {
      Hello
    },
    methods: {
      change: function () {
        this.msgToSon = (this.msgToSon == 'change' ? 'change2' : 'change');
      },
      hearSon: function (msg) {
        this.sonTold = msg;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
