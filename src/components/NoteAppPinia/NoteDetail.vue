<template>
  <div class="note">
    <div class="note-text">
      <h2 class="note-title">{{ note.title }}</h2>
      <p class="note-note">{{ note.note }}</p>
    </div>
    <div class="time">
      <div class="date">
        <p>{{ note.date }}</p>
      </div>
      <span class="delete" @click="noteStore.deleteNote(note.id)"
        ><i class="fa-solid fa-x icon-delete"></i
      ></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["note"]);
import { useNoteStore } from "@/stores/NoteStore";
const noteStore = useNoteStore();
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: Roboto !important;
  box-sizing: border-box;
}
.note-title {
  font-weight: bold;
}
.note-note {
  margin-top: 2px;
  max-height: 170px;
  overflow: auto;
}
.time {
  display: flex;
  justify-content: space-between;
}
.date {
  display: inline-block;
}
.date {
  position: absolute;
  bottom: 5px;
  left: 5px;
  margin-bottom: 0;
}
.delete {
  position: absolute;
  bottom: 5px;
  right: 10px;
  cursor: pointer;
}
.icon-delete {
  font-size: 12px;
  padding: 5px 6px;
  border-radius: 50%;
}
.icon-delete:hover {
  background-color: #d1aeae;
}
</style>
