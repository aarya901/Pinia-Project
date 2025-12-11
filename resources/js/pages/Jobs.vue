<script setup></script>

<template>
  <h2 class="title">Jobs</h2>

  <div class="page-card">
    <h3 class="page-subtitle">Manage All Plumbing Jobs</h3>

    <div class="list-item">🚿 Bathroom Leakage Repair · Pending</div>
    <div class="list-item">🔥 Heater Installation · In Progress</div>
    <div class="list-item">🚰 Kitchen Pipe Replacement · Completed</div>
  </div>

  <div class="button">
    <button>Edit</button>
    <button>Create</button>
    <button>Update</button>
    <button>Delete</button>

  </div>
</template>

<style scoped>
.page-card {
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0px 6px 20px rgba(0,0,0,0.07);
}

.page-subtitle {
  font-size: 18px;
  margin-bottom: 20px;
}

.list-item {
  padding: 12px 15px;
  border-radius: 12px;
  margin-bottom: 10px;
  background: #f6f7f9;
}
</style>
