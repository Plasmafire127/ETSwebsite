<script lang="ts">
    import { fly } from 'svelte/transition';
    import { createDropdownMenu, melt } from '@melt-ui/svelte'
    import { quintInOut } from 'svelte/easing';
    const {
    elements: { menu, item, trigger },
    states: { open},
  } = createDropdownMenu();

</script>

<button use:melt={$trigger}>Services</button>
{#if $open}
<div use:melt={$menu} transition:fly={{ duration: 400}} class="bg-accent-dark rounded-lg w-auto h-auto p-4 mt-5 outline outline-1 font-plex-mono text-orange text-lg">
  <div use:melt={$item} class="py-2">3D Printing & Modeliing</div>
  <hr class="text-accent-purple">
  <div use:melt={$item} class="py-2">2D Editing & Design</div>
  <hr class="text-accent-purple">
  <div use:melt={$item} class="py-2">Other Equipment</div>
</div>
{/if}
<div class="group text-sky-600 transition duration-300">
    Link
    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
</div>