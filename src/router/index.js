import { createRouter, createWebHistory } from "vue-router";
import Count from "@/components/Basic-1/Count.vue";
import CreateClock from "@/components/Basic-1/CreateClock.vue";
import StopWatch from "@/components/Basic-1/StopWatch.vue";
import CountDown from "@/components/Basic-1/CountDown.vue";
import TodoList from "@/components/Basic-2/TodoList.vue";
import NoteApp from "@/components/Basic-2/NoteApp.vue";
import TodoListPinia from "@/components/TaskListPinia/TodoListPinia.vue";
import NoteAppPinia from "@/components/NoteAppPinia/NoteAppPinia.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/count",
      name: "Count",
      component: Count,
    },
    {
      path: "/createClock",
      name: "CreateClock",
      component: CreateClock,
    },
    {
      path: "/stopWatch",
      name: "StopWatch",
      component: StopWatch,
    },
    {
      path: "/countDown",
      name: "CountDown",
      component: CountDown,
    },
    {
      path: "/todolist",
      name: "TodoList",
      component: TodoList,
    },

    {
      path: "/noteApp",
      name: "NoteApp",
      component: NoteApp,
    },
    {
      path: "/todoListPinia",
      name: "TodoListPinia",
      component: TodoListPinia,
    },
    {
      path: "/noteAppPinia",
      name: "NoteAppPinia",
      component: NoteAppPinia,
    },
  ],
});

export default router;
