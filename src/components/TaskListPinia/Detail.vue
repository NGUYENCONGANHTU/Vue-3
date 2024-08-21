<template>
  <div v-show="isShowModal">
    <form @submit.prevent="handleSubmit">
      <div class="input-field">
        <input class="border" type="text" placeholder="add todo..." v-model="editTask" />
        <button class="button">edit</button>
      </div>
    </form>
  </div>
  <div class="task">
    <h6>{{ task.title }}</h6>
    <div class="icons">
      <i class="fa-solid fa-trash icon-trash" @click="taskStore.deleteTask(task.id)"></i>
      <i v-if="!isShowModal" class="fa-solid fa-eye icon-heart" @click="showModal(true)"></i>
      <i v-else class="fa-solid fa-eye-slash" @click="showModal(false)"></i>
    </div>
    <!-- taskStore.toggleTask(task.id) -->
  </div>
</template>

<script setup>
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from 'vue';

const props = defineProps(["task"]);
const taskStore = useTaskStore();
const isShowModal = ref(false);
const editTask = ref(props.task.title);


const showModal = (isOpen) => {
 if(isOpen){
    isShowModal.value = true;
  }else{
    isShowModal.value = false;
  }
}

const handleSubmit = () => {
  taskStore.toggleTask(props.task.id, editTask.value)
  showModal(false)
}

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

.input-field {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  padding: 5px;
}
.input-field input {
  width: 600px;
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
