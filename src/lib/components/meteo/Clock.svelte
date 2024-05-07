<script>  
    $: now = new Date().toLocaleTimeString("en-CA", { hour: '2-digit', minute: '2-digit' });  
</script>  
<time class="text-xl md:text-3xl {$$props["class"]}">{now}</time>  