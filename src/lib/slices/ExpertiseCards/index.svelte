<script>
    import { onMount } from 'svelte';
    import gsap from 'gsap';
    import Icon from '@iconify/svelte';

    /** @type {import("@prismicio/client").Content.ExpertiseCardsSlice} */
    export let slice;

    let cards = [];  // This will hold references to the card elements

    async function animateCard(card) {
        const gsapModule = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        gsapModule.gsap.registerPlugin(ScrollTrigger);

        gsapModule.gsap.fromTo(
            card,
            { y: 20, opacity: 0, scale: 1.2 },
            {
                scrollTrigger: {
                    trigger: card,
                    start: 'top center',
                    end: 'center center',
                },
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'elastic.out(1.5, 0.5)'
            }
        );
    }

    onMount(() => {
        cards = Array.from(document.querySelectorAll('.card'));
        cards.forEach(animateCard);
    });
</script>

<section
    id={slice.primary.url_id}
    class="relative mb-20 lg:mb-28 z-20 pointer-events-none"
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
>
    <div class="text-center">
        <h2 class="font-bold tracking-tighter mb-12 text-4xl lg:text-7xl drop-shadow-lg inline-block">
            {slice.primary.title}
        </h2>
    </div>

    <div class="lg:px-10">
        <ul class="flex flex-wrap gap-2 md:grid md:grid-cols-2 xl:grid-cols-3">
            {#each slice.items as { title, text, icon_string, color }, i}
                <li bind:this={cards[i]} 
                    class="card w-full flex flex-col gap-6 p-4 border border-davys_gray-100 dark:border-white shadow-md bg-white-backdrop dark:bg-steel-blue-backdrop"
                >
                    <div class="w-full flex justify-between items-center">
                        {#if icon_string}
                            <Icon class="w-14 h-14" icon={icon_string} />
                        {/if}
                        <div class="w-fit">
                            <h3 class="text-4xl px-2 font-extrabold drop-shadow-md">{title}</h3>
                            <hr style="background-color: {color}" class="-mt-5 h-3 w-full" />
                        </div>
                    </div>
                    <div>
                        <span class="text-gray-500">&lt;p&gt;</span>
                        <div class="flex items-center">
                            <div class="pl-2 border-l-2 border-gray-500 h-full w-full overflow-hidden">
                                <p class="text-lg">{text}</p>
                            </div>
                        </div>
                        <span class="text-gray-500">&lt;/p&gt;</span>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</section>
