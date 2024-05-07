<script>  
    $: today = new Date().toLocaleDateString("fr-CA");  
</script>  
<div class="absolute font-bold bottom-2 right-4 uppercase">  
    <p class="text-[12px] {$$props["class"]}">{today}</p>  
</div>  