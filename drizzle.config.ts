import { defineConfig } from 'drizzle-kit';

const prod = process.env.ENVIRONMENT === 'PROD';

if (!prod && !process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (prod && (!process.env.TURSO_CONNECTION_URL || !process.env.TURSO_AUTH_TOKEN)) {
	throw new Error('Turso URL and TOKEN are required');
}

export default defineConfig({
	schema: './src/lib/server/db/schema/index.ts',
	out: './src/lib/server/db/migrations/',
	dialect: prod ? 'turso' : 'sqlite',
	dbCredentials: {
		url: prod ? process.env.TURSO_CONNECTION_URL! : process.env.DATABASE_URL!,
		authToken: prod ? process.env.TURSO_AUTH_TOKEN : undefined
	},
	verbose: true,
	strict: true
});
