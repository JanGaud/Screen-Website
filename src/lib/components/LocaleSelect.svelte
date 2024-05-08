<!-- LocaleSelect.svelte -->
<script lang="ts">
    import { writable } from 'svelte/store';

    export const selectedLocale = writable('fr-CA');

    const changeLocale = (event: Event) => {
        const target = event.target as HTMLSelectElement;
        const locale = target.value;
        if (locale) {
            selectedLocale.set(locale);
            console.log($selectedLocale);
        }
    };
</script>

<select
    class="fixed bg-transparent z-30 pointer-events-auto bottom-4 right-4"
    bind:value={$selectedLocale}
    on:change={changeLocale}
>
    <option value="en-US">En</option>
    <option value="fr-CA">Fr</option>
</select>

<style>
    select option {
        margin: 40px;
        background: rgba(0, 0, 0, 0.459);
    }
</style>
