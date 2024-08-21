<template>
  <div class="timer-app">
    <h1 class="title">Ứng dụng hẹn giờ</h1>

    <input type="text" v-model="minutes" placeholder="Phút" />
    <input type="text" v-model="seconds" placeholder="Giây" />
    <div class="time-display">{{ formattedTime }}</div>
    <div class="actions">
      <button @click="startTimer">Bắt đầu</button>
      <button @click="stopTimer">Dừng</button>
      <button @click="resetTimer">Đặt lại</button>
    </div>

    <div v-if="showNotification" class="notification">Đã đến thời gian!</div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const minutes = ref();
const seconds = ref();
const totalSeconds = ref(0);
const interval = ref(null);
const showNotification = ref(false);

const formattedTime = computed(() => {
  const mins = Math.floor(totalSeconds.value / 60);
  const secs = totalSeconds.value % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
});

const startTimer = () => {
  if (interval.value) return;

  totalSeconds.value = parseInt(minutes.value) * 60 + parseInt(seconds.value);
  showNotification.value = false;

  interval.value = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value -= 1;
    } else {
      clearInterval(interval.value);
      interval.value = null;
      showNotification.value = true;
    }
  }, 1000);
};

const stopTimer = () => {
  if (interval.value) {
    clearInterval(interval.value);
    interval.value = null;
  }
};

const resetTimer = () => {
  stopTimer();
  minutes.value = 0;
  seconds.value = 0;
  totalSeconds.value = 0;
  showNotification.value = false;
};

watch([minutes, seconds], () => {
  totalSeconds.value = parseInt(minutes.value) * 60 + parseInt(seconds.value);
});
</script>

<style>
* {
  font-family: Bungee Inline;
}
.timer-app {
  background-color: #e26960;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 100px;
}
.title {
  padding-bottom: 50px;
}
.time-display {
  font-size: 2em;
  margin-top: 50px;
}

.notification {
  margin-top: 20px;
  color: red;
  font-size: 1.5em;
}
input {
  text-align: center;
  margin-left: 10px;
  padding: 5px;
  width: 10%;
}
.actions {
  padding-top: 40px;
}
button {
  margin-left: 10px;
  padding: 5px;
}
</style>
