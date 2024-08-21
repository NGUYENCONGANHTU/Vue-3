<template>
  <div class="note-app">
    <div class="main">
      <div class="title">
        <h4 class="title-text">Notes</h4>
        <div
          class="btn add-note"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          +
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
                  <div v-if="titleError" class="error mt-1">
                    {{ titleError }}
                  </div>
                  <div class="note">
                    <label for="note">Note:</label>
                    <textarea
                      placeholder="Take note here..."
                      class="text-input"
                      v-model="messageNote"
                    ></textarea>
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
                <button type="button" class="btn btn-success" @click="addNote">
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ------------------------------------ -->
      <div class="items">
        <div
          class="note-item"
          v-for="(item, index) in items"
          :key="item.id"
          :style="{ backgroundColor: item.background }"
        >
          <div class="note-text">
            <h5 class="item-title">{{ item.title }}</h5>
            <p class="item-note">{{ item.note }}</p>
          </div>
          <div class="time">
            <div class="date">
              <p>{{ item.id }}</p>
            </div>
            <span class="delete" @click="deleteNote(index)">x</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const messageNote = ref("");
const messageTitle = ref("");
const titleError = ref("");
const noteError = ref("");
const items = ref([
  {
    id: "13/08/2024",
    title: "Toán",
    background: "red",
  },
  {
    id: "14/08/2024",
    title: "Văn",
    background: "gray",
  },
  {
    id: "15/08/2024",
    title: "Anh",
    background: "green",
  },
  {
    id: "15/08/2024",
    title: "Giáo dục công dân",
    background: "violet",
  },
  {
    id: "15/08/2024",
    title: "Âm nhạc",
    background: "pink",
  },
]);

const getError = () => {
  let hasError = false;

  if (messageTitle.value.length < 10) {
    titleError.value = "* Tiêu đề phải có độ dài ít nhất 10 ký tự.";
    hasError = true;
  } else {
    titleError.value = "";
  }

  if (messageNote.value.length < 10) {
    noteError.value = "* Nội dung ghi chú phải có độ dài ít nhất 10 ký tự.";
    hasError = true;
  } else {
    noteError.value = "";
  }

  return hasError;
};

const deleteNote = (index) => {
  items.value.splice(index, 1);
};

const addNote = () => {
  if (getError()) {
    return; // Nếu có lỗi thì không thực hiện thêm note
  }

  const currentDate = new Date(); // Lấy thời gian hiện tại
  const formattedDate = currentDate.toLocaleDateString("vi-VN"); // Định dạng ngày tháng năm

  items.value.push({
    id: formattedDate, // Tạo id duy nhất
    title: messageTitle.value,
    note: messageNote.value,
    background: getRandomColor(), // Thêm nội dung ghi chú
  });

  messageNote.value = ""; // Xóa nội dung sau khi thêm
  messageTitle.value = ""; // Xóa nội dung sau khi thêm
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
.error {
  font-size: 10px;
  color: red;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto;
}

.note-app {
  position: relative;
  min-height: 100vh;
  width: 100%;
  /* background-color: #fefcdd;ssssssss */
}

.title {
  padding-top: 10px;
  position: relative;
  display: flex;
  align-items: center; /* Căn chỉnh các phần tử theo chiều dọc */
}
.title-text {
  font-size: 45px;
  font-weight: 600;
  color: #514d4d;
  padding-left: 10px;
  margin: 0; /* Xóa khoảng cách mặc định của h4 */
  display: inline-block;
}
.text-input {
  width: 100%;
  height: 100px;
  text-align: left;
  padding: 5px;
}
.add-note {
  position: absolute;
  right: 80px;
  border: none;
  border-radius: 50%;
  width: 35px;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.add-note:hover {
  background-color: rgb(122, 229, 122);
  transition: 0.4s all;
  border: none;
  color: #fff;
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 35px 20px;
}
.items::-webkit-scrollbar {
  display: none; /* Ẩn thanh cuộn trên Chrome, Safari và Edge */
}
.note-item {
  position: relative;
  padding: 5px;
  margin-left: 28px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 250px;
  height: 240px;
  background-color: #44d431;
  border-radius: 10px;
  transition: all 0.5s ease;
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
}
.delete {
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  padding: 0px 8px;
  border: none;
  outline: none;
  transition: 0.4s all;
  border-radius: 50%;
  text-align: center;
}
.delete:hover {
  background-color: #514d4d;
  color: #fff;
  border-radius: 50%;
}
#title {
  width: 100%;
  text-align: start;
  padding: 5px;
}
label {
  padding-bottom: 5px;
}
.note {
  margin-top: 5px;
}
.item-title {
  font-weight: bold;
}
.item-note {
  margin-top: 2px;
  max-height: 170px;
  overflow: auto;
}
.new-note {
  position: absolute;
  bottom: 40px;
  right: 60px;
  z-index: 1050px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>
