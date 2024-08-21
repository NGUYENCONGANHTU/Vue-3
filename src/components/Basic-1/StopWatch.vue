<template>
  <div class="stopwatch">
    <h1>Đồng hồ bấm giờ</h1>
    <div class="time">{{ formattedTime }}</div>
    <div class="controls">
      <button @click="startStopwatch" :disabled="running">Bắt đầu</button>
      <button @click="stopStopwatch" :disabled="!running">Dừng</button>
      <button @click="resetStopwatch">Đặt lại</button>
    </div>
    <button>
      <router-link to="/countDown">Hẹn giờ</router-link>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

const time = ref(0);
const running = ref(false);
const interval = ref(null);
const stopwatchHistory = ref([]);

const formattedTime = computed(() => {
  const minutes = Math.floor(time.value / 60);
  const seconds = time.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
});

const loadHistory = () => {
  const history = JSON.parse(localStorage.getItem("stopwatchHistory")) || [];
  stopwatchHistory.value = history;
};

const saveHistory = () => {
  localStorage.setItem(
    "stopwatchHistory",
    JSON.stringify(stopwatchHistory.value)
  );
};

const startStopwatch = () => {
  if (running.value) return;
  running.value = true;
  interval.value = setInterval(() => {
    time.value += 1;
  }, 1000);
};

const stopStopwatch = () => {
  if (!running.value) return;
  running.value = false;
  clearInterval(interval.value);
  stopwatchHistory.value.push(time.value);
  saveHistory();
};

const resetStopwatch = () => {
  stopStopwatch();
  time.value = 0;
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};

onMounted(loadHistory);

onUnmounted(() => {
  if (interval.value) clearInterval(interval.value);
});

watch(stopwatchHistory, saveHistory, { deep: true });
</script>

<style scoped>
* {
  font-family: Bungee Inline;
}
.stopwatch {
  padding: 100px;
  text-align: center;
  height: 100vh;
  background-color: #e26960;
}

.time {
  font-size: 48px;
  margin: 20px 0;
}

.controls button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}

.controls button:disabled {
  background-color: #ccc;
}

ul {
  list-style-type: none;
  padding: 0;
}
button {
  cursor: pointer;
  transition: 0.1s all;
}
button {
  color: black;
}
</style>
