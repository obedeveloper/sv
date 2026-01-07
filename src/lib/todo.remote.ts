import { command, form, query } from '$app/server';
import * as v from 'valibot';
import { db } from './server/db';
import { TodosTable } from './server/db/schema';
import { eq } from 'drizzle-orm';

export const getItems = query(async () => {
	return await db.query.TodosTable.findMany();
});

export const addItem = form(
	v.object({ name: v.pipe(v.string(), v.trim(), v.nonEmpty('Item can not be empty!')) }),
	async ({ name }) => {
		await db.insert(TodosTable).values({ name });
		await getItems().refresh();
	}
);

export const deleteItem = command(v.number(), async (id) => {
	await db.delete(TodosTable).where(eq(TodosTable.id, id));
	await getItems().refresh();
});
