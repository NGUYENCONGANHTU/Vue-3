<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-field">
      <input type="text" placeholder="add todo..." v-model="newTask" />
      <button class="button">Add</button>
    </div>
  </form>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";

const taskStore = useTaskStore();
const newTask = ref("");

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      id: Math.floor(Math.random() * 10000),
    });
    newTask.value = "";
  }
};
</script>

<style scoped>
.input-field {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 5px;
}
.input-field input {
  width: 450px;
  text-align: start;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px;
}
.button {
  margin-left: 5px;
  background-color: #ffe369;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
}
</style>
