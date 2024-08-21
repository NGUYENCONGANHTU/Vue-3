<template>
  <div class="main">
    <h1 class="title">ỨNG DỤNG ĐỒNG HỒ</h1>

    <div id="clock"></div>
    <h2>
      Hẹn giờ:
      <p id="countdown">00 : 00 : 00</p>
    </h2>
    <button class="start">Start</button>
    <button class="stop">Stop</button>
    <button class="reset">Reset</button>
  </div>
</template>
<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Mono:wght@300&family=Roboto:ital,wght@0,400;1,300;1,400&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Bungee Inline;
}
.main {
  text-align: center;
  background-color: #e26960;
  height: 100vh;
}
.title {
  padding-top: 100px;
  text-align: center;
  font-family: Bungee Inline;
  font-size: 65px;
  font: bold;
}
#clock {
  font-family: Bungee Inline;
  font-size: 55px;
  text-align: center;
}
#countdown {
  margin-top: 20px;
}
h2 {
  margin-bottom: 20px;
}
</style>
