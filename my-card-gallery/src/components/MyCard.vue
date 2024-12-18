<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">デフォルトヘッダー</slot>
    </div>
    <div class="card-content">
      <slot>デフォルトコンテンツ</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">デフォルトフッター</slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  text-align: center;
}
.card-header {
  font-weight: bold;
}
.card-footer {
  color: gray;
  font-size: 0.9em;
}
</style>
