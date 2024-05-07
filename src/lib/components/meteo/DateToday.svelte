<script>  
    $: today = new Date().toLocaleDateString("fr-CA");  

    	/**
	 * @param {string | number | Date} dateTimeTxt
	 */
	function formatDate(dateTimeTxt) {
		return new Date(dateTimeTxt).toLocaleDateString('fr-CA', {
			weekday: 'long',
			month: 'long',
			day: 'numeric'
		});
	}
</script>  
<div class="absolute font-bold bottom-2 right-4 uppercase">  
    <p class="text-[12px] {$$props["class"]}">{formatDate(today)}</p>  
</div>  