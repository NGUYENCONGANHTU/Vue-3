<template>
  <div class="clock">
    <div class="title"><h2>Giờ hiện tại</h2></div>
    <div class="time">
      <p>{{ time }}</p>
    </div>
    <div class="tab"><router-link to="/StopWatch">Hẹn giờ</router-link></div>
  </div>
  <button><router-link to="/countDown"></router-link></button>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from "vue";

const time = ref(new Date().toLocaleTimeString());
const updateTime = () => {
  time.value = new Date().toLocaleTimeString();
};

let intervalId;
onMounted(() => {
  intervalId = setInterval(updateTime, 1000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Mono:wght@300&family=Roboto:ital,wght@0,400;1,300;1,400&display=swap");
.clock {
  position: relative;
  padding-top: 100px;
  font-family: Bungee Inline;
  text-align: center;
  height: 100vh;
  background-color: #e26960;
}
.title {
  color: 70px;
  font-size: 35px;
}
.time {
  padding-top: 60px;
  font-size: 30px;
  color: beige;
}
.tab {
  display: block;
  position: absolute;
  right: 100px;
  bottom: 40px;
}
a {
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  text-decoration: none;
}
a:focus {
  color: rgb(85, 26, 139);
  text-decoration: none;
}
</style>
