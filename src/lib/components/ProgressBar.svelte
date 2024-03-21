<script>
    import { PrismicImage } from '@prismicio/svelte';
    import { page } from '$app/stores';

    const logo = $page.data.settings.data.square_logo;
    
    /**
	 * @type {any}
	 */
     export let progress;
    /**
	 * @type {any}
	 */
     export let isLoading;

    /**
	 * @type {HTMLDivElement}
	 */
    let progressBarElement; // Reference to the progress bar DOM element
    $: if (progressBarElement && $progress !== undefined) {
        progressBarElement.style.width = `${$progress}%`;
    }
</script>

<section class={isLoading ? 'fixed top-0 left-0 w-full h-screen z-10' : 'hidden'}>
    <div class="fixed top-0 left-0 w-full h-2 bg-saffron-300">
        <div bind:this={progressBarElement} class="h-full bg-saffron"></div>
    </div>
    <div class="flex items-center justify-center h-full w-full bg-davys_gray-100">
        <div class="w-[300px] animate-pulse aspect-square overflow-hidden rounded-full p-10 border-4 border-saffron">
            <PrismicImage field={logo} class="w-full h-auto object-contain" />
        </div>
    </div>
</section>
