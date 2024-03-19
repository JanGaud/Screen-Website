<script>
  import { themeStore } from '../../stores/themeStore.js';
</script>

<button class="fixed bottom-1 text-white" on:click={themeStore.toggle}>Toggle Theme</button>
