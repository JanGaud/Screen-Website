<script>
	import { page } from '$app/stores';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import Icon from '@iconify/svelte';

	const navItems = $page.data.nav.data.nav_item;
	const socials = $page.data.social.data.social_medial;
	const brandLogo = $page.data.settings.data.rectangle_logo;

	const iconMap = {
		facebook: 'ic:baseline-facebook',
		x: 'ri:twitter-x-line',
		instagram: 'mdi:instagram',
		youtube: 'bi:youtube',
		tiktok: 'ic:baseline-tiktok',
		linkedin: 'mdi:linkedin',
		github: 'ri:github-fill'
	};

	let isMobileMenuOpen = false;

	/**
	 * @param {string} name
	 */
	function getSocialIcon(name) {
		if (typeof name === 'string') {
			const iconName = name.toLowerCase();
			// @ts-ignore
			return iconMap[iconName] || 'mdi:alert-circle';
		} else {
			return 'mdi:alert-circle';
		}
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<header class="w-full h-20 fixed top-0 z-10">
	<nav
		class="flex items-center bg-white-backdrop dark:bg-steel-blue-backdrop justify-between gap-4 px-10 py-1 border-b border-saffron shadow-md"
	>
		<div class="hidden md:flex flex-grow w-1/3">
			<ul class="flex items-center space-x-4 uppercase text-sm text-saffron">
				{#each navItems as { link_label, link_url }}
					<li class="flex items-center gap-3">
						<PrismicLink
							field={link_url}
							class="hover:text-gray-600 dark:hover:text-gray-300 drop-shadow-lg transition-colors whitespace-nowrap cursor-pointer"
							>{link_label}</PrismicLink
						><span>/</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex md:justify-end lg:justify-center items-center flex-grow w-1/3">
			<div class="w-[200px] md:w-[160px] h-auto overflow-hidden">
				<PrismicImage class="object-contain w-full h-auto drop-shadow-lg" field={brandLogo} />
			</div>
		</div>

		<div class="hidden lg:flex flex-grow w-1/3 justify-end">
			<ul class="flex justify-end items-center space-x-4">
				{#each socials as { social_link, social_icon }}
					<li>
						<PrismicLink
							field={social_link}
							class="text-saffron hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
						>
							<Icon class="w-5 h-5 drop-shadow-lg" icon={getSocialIcon(social_icon)} />
						</PrismicLink>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex items-center justify-center md:hidden">
			{#if isMobileMenuOpen}
				<button on:click={toggleMobileMenu}>
					<Icon class="w-10 h-10 text-saffron" icon="ic:round-close" />
				</button>
			{:else}
				<button on:click={toggleMobileMenu}>
					<Icon class="w-10 h-10 text-saffron" icon="ic:baseline-menu" />
				</button>
			{/if}
		</div>
	</nav>

	{#if isMobileMenuOpen}
		<div
			class="md:hidden h-screen bg-white-backdrop dark:bg-steel-blue-backdrop dark:text-white text-davys_gray"
		>
			<div class="h-full flex flex-col items-center justify-around text-2xl uppercase">
				<ul class="w-full mx-auto flex flex-col items-center gap-4 px-4">
					{#each navItems as { link_label, link_url }}
						<li class="mb-2">
							<PrismicLink
								on:click={toggleMobileMenu}
								field={link_url}
								class="hover:text-gray-600 dark:hover:text-gray-300 drop-shadow-lg transition-colors whitespace-nowrap cursor-pointer"
								>{link_label}</PrismicLink
							>
						</li>
					{/each}
				</ul>
				<ul class="flex items-center space-x-8">
					{#each socials as { social_link, social_icon }}
						<li>
							<PrismicLink
								field={social_link}
								class="text-saffron hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
							>
								<Icon class="w-8 h-8 drop-shadow-lg" icon={getSocialIcon(social_icon)} />
							</PrismicLink>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</header>

<ul class="hidden md:fixed top-24 right-2 md:flex flex-col items-center space-y-4 lg:hidden">
	{#each socials as { social_link, social_icon }}
		<li>
			<PrismicLink
				field={social_link}
				class="text-saffron hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
			>
				<Icon class="w-5 h-5 drop-shadow-lg" icon={getSocialIcon(social_icon)} />
			</PrismicLink>
		</li>
	{/each}
</ul>
