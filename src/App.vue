<template>
<!-- import func from './vue-temp/vue-editor-bridge'; -->
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <input v-model="msg"/>
    <button @click="changeMsg">Click me</button>
    <br/>
    firstname:<input v-model="firstname"/> <br/>
    lastname:<input v-model="lastname"/><br/>
    fullname:{{firstname}}&nbsp;{{lastname}}<br/>
    fullname methods:{{getFullName()}}<br/>
    fullname computed:{{fullname}}<br/>
    fullname watch:{{fullname}}<br/>


    <hr/>
    <input v-model="name"/><button @click="addUser">添加</button><br/>
    <ol>
      <li v-for="(item, index) in userList" :key="index">
        <span v-if="index % 3 == 0 " class="red">{{item}} -{{index}}</span>
        <span v-else-if=" index % 3 == 1 " class="green">{{item}} -{{index}}</span>
        <span v-else class="blue">{{item}} -{{index}}</span>

      </li>

    </ol> -->


    <button-counter prop-name = "a">
      <span>ABBBB</span>
    </button-counter>  
    <button-counter prop-name="Bb"><span>B</span></button-counter>
    <button-counter prop-name='Cccc'></button-counter>
    <button-counter prop-name='Dddd'></button-counter>

  </div>
</template>

<script>
import ButtonCounter from './components/ButtonCounter'
export default {
    name: 'app',
    components:{
      ButtonCounter
    },
    data(){
      return{
        a: 'A'
      }
    }






  // name: 'app',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //     firstname: 'kk',
  //     lastname:'wu',
  //     fullnameWatch: 'kk wu',

  //     name:'',
  //     userList: []

  //   }
  // },
  // methods:{
  //    addUser(){
  //      this.userList.push(this.name),
  //      this.name = ''
  //    },


  //   changeMsg(){
  //     this.msg = "kk"
  //   },


  //   getFullName(){
  //     return this.firstname + ' '+ this.lastname
  //   }
  // },

  // computed:{
  //   fullname: function(){
  //     return this.firstname + ' '+ this.lastname
  //   }

  // },
  // watch:{
  //   firstname:function(val){
  //     this.fullnameWatch = val + ' '+ this.lastname
  //   },
  //   lastname: function(val){
  //     this.fullnameWatch = this.firstname + ' '+val
  //   }
  // }



}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }

.red{
  background-color: red;
}

.green{
  background-color: green;
}

.blue{
  background-color: blue;
}


</style>
