import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';
import {
	GOOGLE_SECRET,
	GOOGLE_ID,
	GITHUB_SECRET,
	GITHUB_ID,
	AUTH_SECRET
} from '$env/static/private';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import { db } from './lib/db';

export const handle = SvelteKitAuth({
	adapter: DrizzleAdapter(db),
	providers: [
		GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
		Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })
	],
	trustHost: true,
	secret: AUTH_SECRET
});
