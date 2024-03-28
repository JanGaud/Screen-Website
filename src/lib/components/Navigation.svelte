<script>
	// Import required Svelte stores
	import { page } from '$app/stores';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	// Define variables
	const navItems = $page.data.nav.data.nav_item;
	const socials = $page.data.social.data.social_medial;
	const brandLogo = $page.data.settings.data.rectangle_logo;

	const iconMap = {
		facebook: 'circum:facebook',
		x: 'circum:twitter-x-line',
		instagram: 'circum:instagram',
		youtube: 'circum:youtube',
		tiktok: 'circum:baseline-tiktok',
		linkedin: 'circum:linkedin',
		github: 'ph:github-logo'
	};

	let isMobileMenuOpen = false;
	let isHeaderHidden = false;
	let lastScrollPosition = 0;

	// Function to get the appropriate social media icon
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
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	function handleScroll() {
		const currentScrollPosition = window.scrollY;
		isHeaderHidden = currentScrollPosition > 20 && currentScrollPosition > lastScrollPosition;
		lastScrollPosition = currentScrollPosition;
	}
</script>

<header
	class="w-full h-20 fixed top-0 z-50 transition-transform duration-300 text-davys_gray dark:text-saffron"
	class:scroll-up={isHeaderHidden}
>
	<nav
		class="flex items-center bg-white-backdrop dark:bg-steel-blue-backdrop justify-between gap-4 px-10 py-1 border-b dark:border-saffron shadow-md"
	>
		<div class="hidden md:flex flex-grow w-1/3">
			<ul class="flex items-center space-x-4 uppercase text-sm">
				{#each navItems as { link_label, link_url }}
					<li class="flex items-center gap-3">
						<PrismicLink
							field={link_url}
							class="hover:text-saffron dark:hover:text-gray-300 drop-shadow-lg transition-colors whitespace-nowrap cursor-pointer"
							>{link_label}</PrismicLink
						><span>/</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex md:justify-end lg:justify-center items-center flex-grow w-1/3">
			<a
				href="/"
				class="w-[200px] md:w-[160px] h-auto overflow-hidden dark:brightness-100 brightness-0"
			>
				<PrismicImage class="object-contain w-full h-auto drop-shadow-lg" field={brandLogo} />
			</a>
		</div>

		<div class="hidden lg:flex flex-grow w-1/3 justify-end">
			<ul class="flex justify-end items-center space-x-4">
				{#each socials as { social_link, social_icon }}
					<li>
						<PrismicLink
							field={social_link}
							class="hover:text-saffron dark:hover:text-gray-300 transition-colors cursor-pointer"
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
					<Icon class="w-10 h-10" icon="ic:round-close" />
				</button>
			{:else}
				<button on:click={toggleMobileMenu}>
					<Icon class="w-10 h-10" icon="ic:baseline-menu" />
				</button>
			{/if}
		</div>
	</nav>

	{#if isMobileMenuOpen}
		<div
			class="md:hidden h-screen z-40 px-4 bg-white-backdrop dark:bg-steel-blue-backdrop dark:text-white text-davys_gray"
		>
			<div
				class="h-full flex flex-col items-center justify-center gap-20 text-2xl uppercase font-bold tracking-wider"
			>
				<ul class="w-full mx-auto flex flex-col items-center gap-10 px-4">
					{#each navItems as { link_label, link_url }}
						<li class="">
							<PrismicLink
								on:click={toggleMobileMenu}
								field={link_url}
								class="active:text-saffron dark:active:text-saffron drop-shadow-lg transition-colors whitespace-nowrap cursor-pointer"
								>{link_label}</PrismicLink
							>
						</li>
					{/each}
				</ul>
				<ul class="flex w-full items-center justify-center gap-6">
					{#each socials as { social_link, social_icon }}
						<li>
							<PrismicLink
								field={social_link}
								class="active:text-saffron dark:active:text-saffron transition-colors cursor-pointer"
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

<ul
	class="hidden md:fixed top-24 right-2 md:flex flex-col items-center space-y-4 lg:hidden text-davys_gray dark:text-saffron"
>
	{#each socials as { social_link, social_icon }}
		<li>
			<PrismicLink
				field={social_link}
				class="hover:text-saffron dark:hover:text-gray-300 transition-colors cursor-pointer"
			>
				<Icon class="w-5 h-5 drop-shadow-lg" icon={getSocialIcon(social_icon)} />
			</PrismicLink>
		</li>
	{/each}
</ul>

<style>
	.scroll-up {
		transform: translateY(-110%);
	}
</style>
