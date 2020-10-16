<template>
  <div class="main">
    <h1>Contact Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
    <form style="width:40vw;margin:0 auto;" v-on:submit.prevent="submitHandler()">
      <div class="form-group row">
        <div class="col">
          <input
            type="text"
            placeholder="First Name"
            class="form-control input-lg"
            name="firstname"
            v-model="firstname"
          />
        </div>
        <div class="col">
          <input
            type="text"
            placeholder="Last Name"
            class="form-control input-lg"
            name="lastname"
            v-model="lastname"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col">
          <input type="text" v-model.trim="phone" placeholder="Phone" class="form-control input-lg" name="phone" />
        </div>
        <div class="col">
          <input type="text" id="email" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}" placeholder="Email" class="form-control input-lg" name="email" />
        </div>
      </div>
      <input
        type="text"
        placeholder="Message"
        class="form-control input-lg p-0"
        id="message"
        name="first_name"
        v-model="message"
      />
    <button class="sendButton">Send</button>
    </form>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
      <label class="form-check-label" for="defaultCheck1">subscribe to the newsletter</label>
    </div>

  </div>
</template>

<script>
import {email,required,minLength} from 'vuelidate/lib/validators'

const isPhone = (value) => /^1(3|4|5|7|8)\d{9}$/.test(value);  //phone valid

export default {
  name: 'Form',
  validations:{
     fistname:{required,minLength:minLength(3)},
     lastname:{required,minLength:minLength(6)},
     phone:isPhone,
     email:{email,required},
     message:{required}
  },
  data:() => ({
     firstname:'',
     lastname:'',
     phone:'',
     email:'',
     message:''
    
  }),
  methods:{
    submitHandler(){
      if(this.$v.invalid){
        this.$v.$touch()
        console.log("NOT EMAILS")
        return
      }
    }
  }
}

</script>

<style scoped lang="scss">
* {
  font-family: "Raleway";
  background-color:#fafafa;
}
#message {
  height: 10vw;
  position: relative;
}
#message::placeholder {
  position: relative !important;
  left: 0.6vw;
  top: -3.3vw;
  vertical-align: text-top !important;
}
.form-check{
    position:absolute;
    margin-top:3vw;
    margin-left:30vw;
}
.form-control {
  border: 1px solid black;
  height: 2.5vw;
  &::placeholder {
    color: black;
  }
}

.main {
  margin-top:10px;
  height: 40vw;
  margin: 0 auto;
 

}
.main > h1 {
  padding:2.2vw;
  margin-top: 3vw;
  color: black;
  font-size: 2.3em;
  font-weight: 600;
  color: black;
}

.main > p {
  width: 40vw;
  margin: 0 auto;
  color: gray;
  margin-bottom: 3vw;
}
.sendButton {
  position: absolute;
  margin-left: 12vw;
  margin-top: 2vw;
  background-color: #1de9b6;
  color: white;
  border-radius: 5px;
  padding: 0.85rem 3rem;
  border: 0;
  cursor: pointer;
  box-shadow: 5px 6px 10px 1px rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: black;
  }
}

.invalid{
  color:red;
}
</style>