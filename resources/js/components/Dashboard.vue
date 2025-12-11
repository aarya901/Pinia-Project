<template>
  <div class="container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <div class="dot"></div>
        <h1>PlumbingPro</h1>
      </div>

      <nav class="menu">
        <button class="menu-item active">🏠 Dashboard</button>
        <button class="menu-item">🧰 Jobs</button>
        <button class="menu-item">👥 Clients</button>
        <button class="menu-item">👨‍🔧 Plumbers</button>
        <button class="menu-item">📄 Invoices</button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="content">
      <h2 class="title">Dashboard</h2>

      <div class="cards">
        <div class="card">
          <div class="card-top">
            <h3>New Service Requests</h3>
            <span class="icon">📝</span>
          </div>
          <p class="card-value">23</p>
          <p class="trend positive">+18% Higher than last month</p>
        </div>

        <div class="card">
          <div class="card-top">
            <h3>Jobs in Progress</h3>
            <span class="icon">🔧</span>
          </div>
          <p class="card-value">12</p>
          <p class="trend positive">+12% Higher than last month</p>
        </div>

        <div class="card">
          <div class="card-top">
            <h3>Available Plumbers</h3>
            <span class="icon">👷</span>
          </div>
          <p class="card-value">8</p>
          <p class="trend negative">-10% Lower than last month</p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  min-height: 100vh;
  background: #f6f7f9;
  font-family: 'Poppins', sans-serif;
}


.sidebar {
  width: 250px;
  background: #ffffff;
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

.logo h1 {
  font-size: 20px;
  font-weight: 700;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-item {
  text-align: left;
  padding: 12px 15px;
  background: transparent;
  border: none;
  font-size: 15px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
}

.menu-item:hover {
  background: #f2f2f2;
}

.menu-item.active {
  background: #e9ecef;
  font-weight: 600;
}


.content {
  flex: 1;
  padding: 40px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
}


.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.card {
  background: #ffffff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0px 6px 20px rgba(0,0,0,0.07);
  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 10px 25px rgba(0,0,0,0.12);
}

.card-top {
  display: flex;
}
   ali

.card-top h3 {
  font-size: 16px;
  font-weight: 600;
  color: #444;
}

.card-value {
  font-size: 36px;
  font-weight: 700;
  margin-top: 20px;
}

.icon {
  font-size: 24px;
}

.trend {
  margin-top: 8px;
  font-size: 14px;
}

.positive {
  color: #27ae60;
}

.negative {
  color: #e74c3c;
}
</style>
