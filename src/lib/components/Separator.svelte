<script lang="ts">
    import {
        createSeparator,
        melt,
        type createSeparatorProps,
    } from '@melt-ui/svelte';
    
    export let orientation: CreateSeparatorProps['orientation'] = 'vertical';

    const {
        elements: { root: horizontal },
    } = createSeparator({
        orientation: 'horizontal',
        decorative: true,
    });
</script>

<div class="flex justify-center">
    <div use:melt={$horizontal} class=" my-5 h-[1px] w-11/12 bg-white"/>
</div>
