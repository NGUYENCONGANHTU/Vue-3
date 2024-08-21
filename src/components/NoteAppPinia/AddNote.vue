<template>
  <form class="form">
    <div
      class="btn add-note"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      <i class="fa-solid fa-plus"></i>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Note Title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="form">
              <div class="input-title">
                <label for="title">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title..."
                  v-model="messageTitle"
                />
              </div>
              <div v-if="titleError" class="error">
                {{ titleError }}
              </div>
              <div class="note">
                <label for="note">Note:</label>
                <input
                  placeholder="Take note here..."
                  class="text-input"
                  v-model="messageNote"
                ></input>
              </div>
              <div class="error" v-if="noteError">{{ noteError }}</div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Hủy
            </button>
            <button type="button" class="btn btn-success" @click="handleSubmit">
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
const messageTitle = ref("");
const messageNote = ref("");
const titleError = ref("");
const noteError = ref("");
import { useNoteStore } from "@/stores/NoteStore";
const noteStore = useNoteStore();
const handleSubmit = () => {
  if (validateForm()) {
    noteStore.addNote({
      title: messageTitle.value,
      note: messageNote.value,
      date: noteStore.formatDate,
      background: getRandomColor(),
      id: Math.floor(Math.random() * 10000),
    });
    messageNote.value = "";
    messageTitle.value = "";
  }
};
const validateForm = () => {
  let isValid = true;
  titleError.value = "";
  noteError.value = "";

  if (messageTitle.value.trim() === "") {
    titleError.value = "*Title is required";
    isValid = false;
  }
  if (messageNote.value.trim() === "") {
    noteError.value = "*Note content is required";
    isValid = false;
  }
  return isValid;
};
const getRandomColor = () => {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto;
}
.error {
  color: red;
  font-size: 10px;
}
.add-note {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 50%;
  border: none;
}
.add-note:hover {
  background-color: #ffd859;
  transition: 0.4s all;
  border: none;
  color: #080808;
}
#title {
  width: 100%;
  text-align: start;
  padding: 5px;
}
.title {
  padding-top: 10px;
  position: relative;
  display: flex;
  align-items: center; /* Căn chỉnh các phần tử theo chiều dọc */
}
.note {
  margin-top: 10px;
}
.text-input {
  width: 100%;
  text-align: left;
  padding: 5px;
}
</style>
