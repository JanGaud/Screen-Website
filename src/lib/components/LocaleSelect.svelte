<!-- LocaleSelect.svelte -->
<script lang="ts">
	import type { ChangeEventHandler } from 'svelte/elements';
	import { selectedLocale } from '../../stores/localeStore';

	const changeLocale: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const target = event.target as HTMLSelectElement;
		const locale = target.value;
		if (locale) {
			selectedLocale.set(locale);
			console.log($selectedLocale);
		}
	};
</script>

<select
	class="fixed bg-transparent font-semibold tracking-widest z-30 pointer-events-auto bottom-4 right-4"
	bind:value={$selectedLocale}
	on:change={changeLocale}
>
	<option value="fr-CA">Fr</option>
	<option value="en-US">En</option>
</select>
