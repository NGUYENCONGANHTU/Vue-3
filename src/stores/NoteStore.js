import { defineStore } from "pinia";

export const useNoteStore = defineStore("noteStore", {
  state: () => ({
    notes: [
      {
        id: "",
        date: "13/08/2024",
        title: "Toán",
        note: "bala",
        background: "red",
      },
    ],
    name: "Notes",
  }),
  getters: {
    noteCount(state) {
      return state.notes.length;
    },
    formatDate() {
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString("vi-VN");
      const time = currentDate.toLocaleTimeString("vi-VN");
      return `${time} - ${date}`;
    },
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },
  actions: {
    addNote(note) {
      this.notes.unshift(note);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});
