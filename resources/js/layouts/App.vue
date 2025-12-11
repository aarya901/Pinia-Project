<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function go(path) {
  router.push(path);
}

</script>

<template>
  <div class="container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <div class="dot"></div>
        <h1>PlumbingPro</h1>
      </div>

      <nav class="menu">
        <button class="menu-item" @click="go('/')">🏠 Dashboard</button>
        <button class="menu-item" @click="go('/jobs')">🧰 Jobs</button>
        <button class="menu-item" @click="go('/clients')">👥 Clients</button>
        <button class="menu-item" @click="go('/plumbers')">👨‍🔧 Plumbers</button>
        <button class="menu-item" @click="go('/invoices')">📄 Invoices</button>
      </nav>
    </aside>

    <!-- Page Content -->
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* SAME CSS AS BEFORE (Sidebar + Layout + Cards Base) */
.container {
  display: flex;
  min-height: 100vh;
  background: #f6f7f9;
  font-family: 'Poppins', sans-serif;
}

.sidebar {
  width: 250px;
  background: #fff;
  padding: 30px 20px;
  border-right: 1px solid #e6e6e6;
  box-shadow: 5px 0 20px rgba(0,0,0,0.05);
  border-radius: 0 20px 20px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
}

.logo .dot {
  width: 12px;
  height: 12px;
  background: #ffd33d;
  border-radius: 50%;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-item {
  text-align: left;
  padding: 12px 15px;
  border-radius: 12px;
  font-size: 15px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.2s;
}

.menu-item:hover {
  background: #f2f2f2;
}

.content {
  flex: 1;
  padding: 40px;
}
</style>
