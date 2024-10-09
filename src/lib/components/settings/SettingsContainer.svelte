<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import LocaleSelect from './LocaleSelect.svelte';
    import ThemeToggle from './ThemeToggle.svelte';

    // Create a writable store to track the container's visibility
    const isVisible = writable(true);

    // Function to handle scroll and update the isVisible store
    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const threshold = document.body.scrollHeight - 100; // Adjust threshold value as needed

        // If user scrolls to the bottom of the page, set visibility to false
        if (scrollPosition >= threshold) {
            isVisible.set(false);
        } else {
            isVisible.set(true);
        }
    };

    onMount(() => {
        // Attach scroll event listener on component mount
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component destroy
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<!-- Container with Tailwind classes and dynamic visibility based on scroll position -->
<div class="p-2 fixed w-fit flex items-center gap-4 md:gap-8 bottom-2 right-2 z-40 bg-white-backdrop dark:bg-steel-blue-backdrop border dark:border-saffron shadow-md rounded-full transition-opacity duration-300 transform"
     class:opacity-0={!$isVisible}
     class:translate-y-4={!$isVisible}
     class:pointer-events-none={!$isVisible}>
    <ThemeToggle />
    <LocaleSelect />
</div>
