<script setup>
import { statuses } from '@/const/statuses';
import { ref } from 'vue';

const items = ref(JSON.parse(localStorage.getItem("items")) || []);
function onEdit(id) {
  inputContent.value = items.value[id].content;
  inputLimit.value = items.value[id].limit;
  inputState.value = items.value[id].state;
  items.value[id].onEdit = true;
}

function onUpdated(id) {
  const newItem = {
    id: id,
    content: inputContent.value,
    limit: inputLimit.value,
    state: inputState.value,
    onEdit: false,
    };
    items.value.splice(id, 1, newItem)
    localStorage.setItem("items", JSON.stringify(items.value));
}

const inputContent = ref();
const inputLimit = ref();
const inputState = ref();
let isShowModal = ref(false);
let deleteItemId = "";
function showDeleteModal(id){
  isShowModal.value = true;
  deleteItemId = id;
}
function onDeleteItem() {
  items.value.splice(deleteItemId, 1);
  items.value = items.value.map((item, index) => ({
    id: index,
    content: item.content,
    limit: item.limit,
    state: item.state,
    onEdit: item.onEdit
  }))
  localStorage.setItem("items", JSON.stringify(items.value));
  isShowModal.value = false;
}
</script>
<template>
  <div>
  <table>
    <tr>
      <th>ID</th>
      <th>やること</th>
      <th>期限</th>
      <th>状態</th>
      <th>編集</th>
      <th>削除</th>
    </tr><tr v-for="item in items" :key="item.id">
      <td>{{ item.id }}</td>
      <td>
        <span v-if="!item.onEdit">{{ item.content }}</span>
        <input v-else type="text" v-model="inputContent">
      </td>
      <td>
        <span v-if="!item.onEdit">{{ item.limit }}</span>
        <input v-else type="date" v-model="inputLimit">
      </td>
      <td><span v-if="!item.onEdit">{{ item.state.value }}</span>
        <select v-else v-model="inputState">
          <option v-for="state in statuses"
          :key="state.id"
          :value="state"
          :selected="state.id == item.state.id">{{ state.value }}</option>
        </select></td>
      <td>
        <button v-if="!item.onEdit" @click="onEdit(item.id)">編集</button>
        <button v-else @click="onUpdated(item.id)">完了</button>
      </td>
      <td><button @click="showDeleteModal(item.id)">削除</button></td>
    </tr>
  </table>
    <div v-if="isShowModal" class="modal">
      <div class="modal-content">
        <p>削除してもよろしいですか？</p>
        <button @click="onDeleteItem()">はい</button>
        <button @click="isShowModal = false">キャンセル</button>
      </div>
    </div>
    
  </div>
</template>