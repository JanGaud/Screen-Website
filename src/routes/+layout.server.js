export const prerender = 'auto';
import { page } from '$app/stores';
import { createClient } from '$lib/prismicio';


// @ts-ignore
export async function load({ fetch }) {
    const client = createClient({ fetch });

    const locale = page;

    console.log('locale', locale);

    let nav, settings, social, errors;

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

    try {
        errors = await client.getSingle('errors');
    } catch (error) {
        console.error('Failed to fetch errors data from Prismic:', error);
        error = null;
    }

    return {
        nav,
        settings,
        social,
        errors
        
    };
    
}
