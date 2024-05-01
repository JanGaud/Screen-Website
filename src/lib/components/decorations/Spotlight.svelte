<script>
  export let rgb = "238, 185, 2";
  export let width = "600px";
  export let position = "right-0";
  export let pulsate = false;


  $: pulsatingClass = pulsate ? 'pulsating' : '';
</script>

<div class={`spotlight absolute ${position} ${pulsatingClass} aspect-square -mt-32 -mb-16 -mx-4 md:-mx-14 lg:-mx-28`}
     style={`width: ${width}; background: radial-gradient(circle at center, rgba(${rgb}, 0.3) 5%, rgba(${rgb}, 0.2) 25%, rgba(${rgb}, 0.0) 65%);`}>
</div>

<style>
  .spotlight {
    z-index: 0;
  }

  .pulsating {
    animation: pulsate 4s infinite ease-in-out;
  }

  @keyframes pulsate {
    0%, 100% {
      transform: scale(1);
      opacity: 0.75
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
</style>
