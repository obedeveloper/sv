import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { dev } from '$app/environment';

if (dev) {
	validateSQLITE();
} else {
	validateTURSO();
}

const client = createClient({ url: env.DATABASE_URL });

export const db = drizzle(client, { schema });

function validateSQLITE() {
	if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
}

function validateTURSO() {
	if (!env.TURSO_CONNECTION_URL || !env.TURSO_AUTH_TOKEN)
		throw new Error('Turso URL and TOKEN are required');
}
