<template>
  <main>
    <!-- heading  -->
    <header>
      <div class="logo">
        <img src="https://pinia.vuejs.org/logo.svg" alt="" />
        <h1>{{ taskStore.name }}</h1>
      </div>
      <!-- task-form  -->
      <div class="new-task-form">
        <FormTask />
      </div>
    </header>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- loading  -->
    <div class="loading" v-if="taskStore.loading">Loading task...</div>

    <!-- list task title -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} task left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <Detail :task="task" />
      </div>
    </div>
    <!-- list task fav  -->
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <Detail :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import FormTask from "./FormTask.vue";
import Detail from "./Detail.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";
const taskStore = useTaskStore();
const filter = ref("all");

//fetch tasks
taskStore.getTasks();
</script>

<style scoped>
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background-color: #ffd859;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
.filter {
  width: 640px;
  margin: 10px auto;
  text-align: end;
}
.filter button {
  margin-left: 10px;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 1em;
}
.task-list {
  max-width: 640px;
  margin: 20px auto;
}
* {
}
.logo h1 {
  margin-left: 15px;
  transform: rotate(2deg);
}
.logo img {
  max-width: 60px;
  transform: rotate(-10deg);
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
header {
  padding: 20px;
  background-color: #ecdbdb;
}
main {
  height: auto;
}
</style>
