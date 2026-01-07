PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_todo` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_todo`("id", "name") SELECT "id", "name" FROM `todo`;--> statement-breakpoint
DROP TABLE `todo`;--> statement-breakpoint
ALTER TABLE `__new_todo` RENAME TO `todo`;--> statement-breakpoint
PRAGMA foreign_keys=ON;