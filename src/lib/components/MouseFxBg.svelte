<script>
	import { onMount } from 'svelte';
	import initializeMouseFx from '../../utils/mouseFx.js';

	onMount(() => {
		initializeMouseFx();
	});
</script>

<canvas class="fixed top-0 w-full h-full"></canvas>

<style>
	canvas {
		width: 100%;
		height: 100%;
		background: transparent;
	}
</style>
