<script>
    import { onMount } from 'svelte';
    import initializeMouseFx from '../../utils/mouseFx.js';

    onMount(() => {
        initializeMouseFx();

        // Set the canvas opacity to 1 after 2 seconds
        setTimeout(() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                canvas.style.opacity = '1'; // Change opacity to fully opaque
            }
        }, 4000);
    });
</script>

<canvas class="fixed top-0 w-full h-full opacity-0"></canvas> <!-- Initial opacity set to 0 -->

<style>
    canvas {
        width: 100%;
        height: 100%;
        background: transparent;
        transition: opacity 0.3s ease;
    }
</style>
