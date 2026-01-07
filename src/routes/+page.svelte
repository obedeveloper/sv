<script lang="ts">
	import { addItem, deleteItem, getItems } from '$lib/todo.remote';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Todo App</title>
</svelte:head>

<h1>Todo App</h1>

<form {...addItem}>
	<input {...addItem.fields.name.as('text')} />
	<button>Add</button>

	{#each addItem.fields.name.issues() as issue, i (i)}
		<p>{issue.message}</p>
	{/each}
</form>

<ul>
	{#each await getItems() as { id, name } (id)}
		<li transition:fade>
			{name} <button onclick={async () => await deleteItem(id)}>Delete</button>
		</li>
	{/each}
</ul>

<style>
	p {
		color: light-dark(hsl(0, 100%, 50%), hsl(0, 100%, 69.4%));
	}
</style>
