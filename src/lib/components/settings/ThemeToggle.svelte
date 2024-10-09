<script>
  import { themeStore } from '../../../stores/themeStore.js';
  import { onMount } from 'svelte';

  let isDarkTheme = false;

  onMount(() => {
    themeStore.subscribe((value) => {
      isDarkTheme = value === 'light';
    });
  });

  function handleToggle() {
    themeStore.toggle();
  }
</script>

<label class="flex border dark:border-saffron p-1 rounded-full shadow-sm">
  <input class="toggle" type="checkbox" on:click={handleToggle} bind:checked={isDarkTheme}>
</label>

<style>
  .toggle {
    --size: 1.2rem;
    appearance: none;
    outline: none;
    cursor: pointer;
    width: var(--size);
    height: var(--size);
    box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
    border-radius: 999px;
    color: hsl(240, 100%, 95%);
    transition: all 500ms;
    position: relative; 
    z-index: 10; 
  }

  .toggle:checked {
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);
    transform: scale(0.75);
    color: hsl(40, 100%, 50%);
    box-shadow: 
      inset 0 0 0 var(--size),
      calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
      var(--offset-orthogonal) 0 0 var(--ray-size),
      0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
      0 var(--offset-orthogonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
      var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
      calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
      var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
  }

</style>
