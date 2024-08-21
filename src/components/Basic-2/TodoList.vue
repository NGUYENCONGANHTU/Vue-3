<script setup>
import { ref, watch } from "vue";
const message = ref("");
const items = ref([]);
const countMessage = ref();
const addText = () => {
  if (message.value.trim()) {
    items.value.unshift(message.value);
    message.value = "";
    countMessage.value = items.value.length;
  }
};
watch(items, () => {
  countMessage.value = items.value.length;
});
const deleteItems = (index) => {
  items.value.splice(index, 1);
  countMessage.value = items.value.length;
};
const clearAll = () => {
  items.value = [];
};
</script>
<template>
  <div class="app">
    <div class="wapper">
      <div class="heading"><h2>Todo App</h2></div>
      <div class="input-field">
        <input
          type="text"
          placeholder="Add todo..."
          v-model="message"
          @keyup.enter="addText"
        />
        <button @click="addText">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
            />
          </svg>
        </button>
      </div>
      <ul class="todolist">
        <li v-for="(item, index) in items" :key="index" class="item">
          {{ item }}
          <span @click="deleteItems(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
              />
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
              />
            </svg>
          </span>
        </li>
      </ul>
      <div class="footer">
        <span
          >You Have
          <span class="pendingNum"> {{ countMessage }}</span>
          Pendingtasks</span
        >
        <button @click="clearAll">Clear All</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
.item {
  display: flex;
  justify-content: space-between;
}
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #006778;
  height: 100vh;
}
.wapper {
  max-width: 400px;
  background-color: #fff;
  padding: 25px;
  width: 100%;
  border-radius: 5px;
  height: auto;
}
.wapper .todolist {
  width: 100%;
}
.wapper .heading {
  text-align: center;
}
.wapper .input-field {
  display: flex;
  height: 35px;
  width: 100%;
  margin: 20px 0;
}
.input-field input {
  width: 90%;
  height: 100%;
  border-radius: 3px;
  outline: none;
  border: 2px solid #0093ab;
  font-size: 17px;
  padding: 10px;
  text-align: left; /* Căn chỉnh văn bản từ trái sang phải */
}
.input-field button {
  width: 40px;
  height: 100%;
  margin-left: 5px;
  outline: none;
  border: 1px solid #0093ab;
  background-color: #0093ab;
  border-radius: 3px;
  color: white;
  font-size: 18px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.input-field button:hover {
  transform: scale(1.1);
}
.wapper .todolist {
  max-height: 250px;
  overflow-y: auto;
}
.todolist li {
  list-style: none;
  height: 45px;
  line-height: 45px;
  position: relative;
  background-color: #ccc;
  margin-bottom: 8px;
  border-radius: 3px;
  padding: 0 15px;
  overflow: hidden;
}
.todolist li span {
  position: absolute;
  right: -45px;
  background-color: #00afc1;
  color: white;
  width: 40px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s linear;
}
.todolist li:hover span {
  right: 0;
}
.wapper .footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer button {
  padding: 5px 10px;
  margin-left: 5px;
  outline: none;
  border: 1px solid #0093ab;
  background-color: #0093ab;
  border-radius: 3px;
  color: white;
  transition: all 0.2s ease;
  cursor: pointer;
}
.footer button:hover {
  transform: scale(1.1);
}
</style>
