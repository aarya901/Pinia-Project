<template>
  <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
    <div class="flex items-center justify-between">
      <h3 class="text-gray-600 font-semibold">{{ title }}</h3>
      <i :class="'lucide-' + icon + ' text-gray-400 text-xl'"></i>
    </div>

    <p class="text-3xl font-bold mt-4">{{ value }}</p>

    <p class="text-sm mt-2 flex items-center gap-2"
       :class="badgeColor == 'green' ? 'text-green-600' :
               badgeColor == 'blue' ? 'text-blue-600' :
               'text-red-600'">
      <span class="font-semibold">{{ badge }}</span> than last month
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    value: String,
    badge: String,
    badgeColor: String,
    icon: String
});
</script>
