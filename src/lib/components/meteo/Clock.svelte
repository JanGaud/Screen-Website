<script>
    import { onDestroy } from 'svelte';

    /**
	 * @type {string}
	 */
    let now;

    function updateTime() {
        now = new Date().toLocaleTimeString("en-CA", { hour: '2-digit', minute: '2-digit' });
    }

    updateTime();

    const interval = setInterval(updateTime, 1000);

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<time class="text-xl md:text-3xl {$$props["class"]}">{now}</time>
