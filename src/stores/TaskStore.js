import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
    name: "Pinia Task",
  }),
  getters: {
    // lọc những task yêu thích
    favs(state) {
      return state.tasks.filter((task) => task.isFav);
    },
    favCount(state) {
      return state.tasks.reduce((p, c) => (c.isFav ? p + 1 : p), 0); // Lỗi: tasks is not defined
    },
    totalCount(state) {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      this.tasks = data;
      this.loading = false;
    },
    async addTask(task) {
      this.tasks.unshift(task);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
    async deleteTask(id) {
      
      const userConfirmed = confirm(`Are you sure you want to delete this item id ${id} ?`);
      if(userConfirmed){

        this.tasks = this.tasks.filter((task) => task.id !== id);

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        });
      }
      
      if (res.error) {
        console.log(res.error);
      }
    },
    async toggleTask(id, task) {
      const index = this.tasks.findIndex((item) => item.id == id);
      if (index !== -1) {
        this.tasks[index].title =  task;
      }
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title: task }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
