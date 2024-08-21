<template>
  <main>
    <!-- heading  -->
    <header>
      <h3 class="title">{{ noteStore.name }}</h3>
      <add-note />
    </header>
    <div class="notes">
      <div
        class="note-item"
        v-for="note in noteStore.notes"
        :key="note.id"
        :style="{ backgroundColor: note.background }"
      >
        <NoteDetail :note="note" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useNoteStore } from "@/stores/NoteStore";
import AddNote from "./AddNote.vue";
import NoteDetail from "./NoteDetail.vue";
const noteStore = useNoteStore();
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.button {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 50%;
}
.title {
  display: inline-block;
  font-weight: 600;
  font-size: 35px;
  color: #514d4d;
}
header {
  border-bottom: 2px solid #8a8787;
  padding: 10px 50px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.note-item {
  position: relative;
  padding: 10px;
  margin-left: 28px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 250px;
  height: 260px;
  background-color: #44d431;
  border-radius: 10px;
  transition: all 0.5s ease;
}
.date {
  position: absolute;
  bottom: 5px;
  left: 5px;
}
.notes {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 35px 20px;
}
</style>
