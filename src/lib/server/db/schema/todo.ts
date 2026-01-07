import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const TodosTable = sqliteTable('todo', {
	id: integer('id').primaryKey(),
	name: text('name').notNull()
});
