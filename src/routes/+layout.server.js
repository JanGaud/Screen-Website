// @ts-ignore
import { createClient } from '$lib/prismicio';

// @ts-ignore
export async function load({ fetch, url }) {
    const client = createClient({ fetch });

    const lang = url.pathname.startsWith('/en-us') ? 'en-us' : 'fr-ca';

    let nav, settings, social, errors;

    try {
        nav = await client.getSingle('navigation', { lang });
    } catch (error) {
        console.error('Failed to fetch navigation data from Prismic:', error);
        nav = null;
    }

    try {
        settings = await client.getSingle('settings', { lang });
    } catch (error) {
        console.error('Failed to fetch settings data from Prismic:', error);
        settings = null;
    }

    try {
        social = await client.getSingle('socials', { lang });
    } catch (error) {
        console.error('Failed to fetch socials data from Prismic:', error);
        social = null;
    }

    try {
        errors = await client.getSingle('errors', { lang });
    } catch (error) {
        console.error('Failed to fetch errors data from Prismic:', error);
        errors = null;
    }

    return {
        nav,
        settings,
        social,
        errors
    };
}
