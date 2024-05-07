<script>
    // Get the local date
    $: today = new Date();

    /**
     * Formats the given date or date string into a human-readable format in the French Canadian locale.
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
    <p class="text-[14px] tracking-wider {$$props["class"]}">{formatDate(today)}</p>
</div>
