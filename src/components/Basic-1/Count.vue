<template>
  <div id="app">
    <h1 class="title">Watch Clock</h1>
    <h3>Count: {{ count }}</h3>
    <button @click="incrementCount" class="incrementCount mt-5">Tăng</button>
    <button @click="decrementCount" class="decrementCount">Giảm</button>
    <button @click="reset">Reset</button>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const count = ref(0);
const message = ref("");

const incrementCount = () => {
  count.value++;
};
const decrementCount = () => {
  if (count.value > 0) {
    count.value--;
  }
};
const reset = () => {
  count.value = 0;
};
watch(count, (newCount) => {
  if (newCount % 10 == 0 && newCount != 0) {
    message.value = `Đây là số ${newCount}. Số này chia hết cho 10!`;
  } else {
    message.value = "";
  }
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto+Mono:wght@300&family=Roboto:ital,wght@0,400;1,300;1,400&display=swap");
* {
  font-family: Bungee Inline;
}
#app {
  padding-top: 150px;
  text-align: center;
  height: 100vh;
  background-color: #e26960;
}
.title {
  font-size: 65px;
}
h3 {
  font-size: 40px;
  color: beige;
  margin-bottom: 35px;
}
button {
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
}
.message {
  margin-top: 15px;
}
</style>
