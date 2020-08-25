<template>
  <div class="main">
    <h1>Contact Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
    <form style="width:40vw;margin:0 auto;">
      <div class="form-group row">
        <div class="col">
          <input
            type="text"
            placeholder="First Name"
            class="form-control input-lg"
            name="firstname"
          />
        </div>
        <div class="col">
          <input
            type="text"
            placeholder="Last Name"
            class="form-control input-lg"
            name="lastname"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col">
          <input type="text" placeholder="Phone" class="form-control input-lg" name="first_name" />
        </div>
        <div class="col">
          <input type="text" placeholder="Email" class="form-control input-lg" name="first_name" />
        </div>
      </div>
      <input
        type="text"
        placeholder="Message"
        class="form-control input-lg p-0"
        id="message"
        name="first_name"
      />
    </form>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
      <label class="form-check-label" for="defaultCheck1">subscribe to the newsletter</label>
    </div>

    <button class="sendButton">Send</button>
  </div>
</template>

<script>

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
  height: 35vw;
  margin: 0 auto;

}
.main > h1 {
  padding:1.5vw;
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
</style>