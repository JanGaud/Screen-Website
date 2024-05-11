import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/svelte/kit';
import config from '../../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = import.meta.env.VITE_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
// TODO: Update the routes array to match your project's route structure.
const routes = [
	// fr
	{
		type: 'page',
		uid: 'accueil',
		path: '/'
	},
	{
		type: 'page',
		uid: 'widgets',
		path: '/widgets'
	},
	{
		type: 'page',
		path: '/:uid'
	},
	// en
	{
		type: 'page',
		uid: 'home',
		lang: 'en-us',
		path: '/:lang'
	},
	{
		type: 'page',
		uid: 'widgets',
		lang: 'en-us',
		path: '/:lang/widgets'
	},
	{
		type: 'page',
		path: '/:lang/:uid'
	}
];


/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {import('@prismicio/svelte/kit').CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = ({ cookies, ...config } = {}) => {
	const client = prismic.createClient(repositoryName, {
		routes,
		...config
	});

	enableAutoPreviews({ client, cookies });

	return client;
};
