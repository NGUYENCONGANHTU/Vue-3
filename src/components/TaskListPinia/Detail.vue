<template>
  <div class="task">
    <h6>{{ task.title }}</h6>
    <div class="icons">
      <i
        class="fa-solid fa-trash icon-trash"
        @click="taskStore.deleteTask(task.id)"
      ></i>
      <i
        class="fa-solid fa-heart icon-heart"
        :class="{ active: task.isFav }"
        @click="taskStore.toggleTask(task.id)"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";

const props = defineProps(["task"]);
const taskStore = useTaskStore();
</script>

<style scoped>
.task {
  padding: 15px 10px 10px 20px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons i {
  margin-left: 15px;
  cursor: pointer;
}
.task h6,
.task .icons {
  display: inline-block;
}
.icon-heart.active {
  color: red;
}
</style>
