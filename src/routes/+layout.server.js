export const prerender = 'auto';

import { createClient } from '$lib/prismicio';

// @ts-ignore
export async function load({ fetch }) {
    const client = createClient({ fetch });

    let nav, settings, social;

    try {
        nav = await client.getSingle('navigation');
    } catch (error) {
        console.error('Failed to fetch navigation data from Prismic:', error);
        nav = null; 
    }

    try {
        settings = await client.getSingle('settings');
    } catch (error) {
        console.error('Failed to fetch settings data from Prismic:', error);
        settings = null;
    }

    try {
        social = await client.getSingle('socials');
    } catch (error) {
        console.error('Failed to fetch socials data from Prismic:', error);
        social = null;
    }

    return {
        nav,
        settings,
        social,
    };
}
