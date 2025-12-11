<template>
  <button
    class="
      flex items-center gap-3 w-full p-3 rounded-xl
      transition
      hover:bg-gray-100
      "
    :class="active ? 'bg-gray-200 font-semibold' : ''"
  >
    <i :class="'lucide-' + icon" class="text-gray-500"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
    text: String,
    active: Boolean
  }
};
</script>
