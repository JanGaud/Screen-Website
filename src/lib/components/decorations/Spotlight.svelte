<script>
  export let rgb = "238, 185, 2"; // Default RGB values
  export let width = "600px"; // Default width
  export let position = "right-0 -mt-32 -mb-16 -mx-4 lg:-mx-28"; // Default positioning classes
</script>

<div class={`spotlight ${position} absolute aspect-square`} 
     style={`width: ${width}; background: radial-gradient(circle at center, rgba(${rgb}, 0.3) 5%, rgba(${rgb}, 0.2) 25%, rgba(${rgb}, 0.0) 65%);`}>
</div>

<style>
  .spotlight {
    z-index: 0;
  }
</style>
