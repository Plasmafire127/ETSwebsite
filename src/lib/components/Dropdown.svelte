<script lang="ts">
    import { fly } from 'svelte/transition';
    import { createDropdownMenu, melt } from '@melt-ui/svelte'
    const {
    elements: { menu, item, trigger },
    states: { open },
    
  } = createDropdownMenu();
</script>

<button use:melt={$trigger} class="whitespace-nowrap">Services <i class="fa-solid fa-chevron-up transition-transform duration-300 text-xs md:text-lg" class:rotate-180={$open}></i></button>
{#if $open}
  <div
    use:melt={$menu}
    in:fly={{ y: -20, duration: 400 }}
    out:fly={{ y: +20, duration: 400 }}
    class="z-50 bg-accent-dark rounded-lg w-auto h-auto p-4 mt-5 outline outline-1 font-plex-mono text-orange text-lg">
    <a href="/3Dservices" use:melt={$item} class="py-2">3D Printing & Modeling</a>
    <hr class="text-accent-purple">
    <div use:melt={$item} class="py-2">2D Editing & Design</div>
    <hr class="text-accent-purple">
    <div use:melt={$item} class="py-2">Other Equipment</div>
  </div>
{/if}