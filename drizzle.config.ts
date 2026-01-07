import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema/index.ts',
	out: './src/lib/server/db/migrations/',
	dialect: process.env.TURSO_AUTH_TOKEN ? 'turso' : 'sqlite',
	dbCredentials: {
		url: process.env.DATABASE_URL,
		authToken: process.env.TURSO_AUTH_TOKEN
	},
	verbose: true,
	strict: true
});
