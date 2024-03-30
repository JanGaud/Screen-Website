<script>
  export let rgb = "238, 185, 2";
  export let width = "600px";
  export let position = "right-0";
</script>

<div class={`spotlight absolute ${position} aspect-square -mt-32 -mb-16 -mx-4 md:-mx-14 lg:-mx-28`} 
     style={`width: ${width}; background: radial-gradient(circle at center, rgba(${rgb}, 0.3) 5%, rgba(${rgb}, 0.2) 25%, rgba(${rgb}, 0.0) 65%);`}>
</div>

<style>
  .spotlight {
    z-index: 0;
  }
</style>
