<script>
    import { onMount } from 'svelte';
    import initializeMouseFx from '../../utils/mouseFx.js';

    onMount(() => {
        initializeMouseFx();

        setTimeout(() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                canvas.style.opacity = '1';
            }
        }, 3200);
    });
</script>

<canvas class="fixed top-0 w-screen h-full opacity-0"></canvas>

<style>
    canvas {
        height: 100%;
        background: transparent;
        transition: opacity 0.3s ease;
    }
</style>
