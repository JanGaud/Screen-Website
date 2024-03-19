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
        github: 'ri:github-fill',
    };

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
</script>

<header class="w-full h-20 fixed bg-white bg-white-backdrop dark:bg-steel-blue-backdrop top-0 z-10">
    <nav class="flex items-center justify-between gap-4 px-10 py-1 border-b border-saffron shadow-md">
        <div class="flex-grow w-1/3">
            <ul class="flex items-center space-x-4 uppercase text-sm text-saffron">
                {#each navItems as { link_label, link_url }}
                    <li class="flex items-center gap-3">
                        <PrismicLink field={link_url} class="hover:text-gray-600 dark:hover:text-gray-300 drop-shadow-md transition-colors whitespace-nowrap cursor-pointer">{link_label}</PrismicLink><span>/</span>
                    </li>
                {/each}
            </ul>
        </div>

        <div class="flex justify-end lg:justify-center items-center flex-grow w-1/3">
            <div class="w-[160px] h-auto overflow-hidden">
                <PrismicImage class="object-contain w-full h-auto drop-shadow-md" field={brandLogo} />
            </div>
        </div>

        <div class="w-1/3 hidden lg:block flex-grow">
            <ul class="flex justify-end items-center space-x-4">
                {#each socials as { social_link, social_icon }}
                    <li>
                        <PrismicLink field={social_link} class="text-saffron hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                            <Icon class="w-5 h-5 drop-shadow-md" icon={getSocialIcon(social_icon)} />
                        </PrismicLink>
                    </li>
                {/each}
            </ul>
        </div>
    </nav>
</header>
