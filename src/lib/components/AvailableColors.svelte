<script>
    const colors = 
    [
    ['#000000','Black'],
    ['#9e9c95','Silver'],
    ['#FFFFFF','White'],
    ];
</script>


<div class="font-plex-mono text-white flex flex-col">
    <p class="flex items-end md:text-5xl text-2xl font-bold md:px-20 px-5 w-full md:pt-0 pt-10 custom-height-md">
        Available Colors
    </p>
    <div class="flex items-center justify-center pt-5">
        <div class="grid grid-cols-6 grid-rows-4">
            {#each colors as [color,name]}
            <div>
                <div class="w-32 h-32 mx-4 mt-4 mb-2 rounded-lg border-white border-2" style="background-color: {color};"></div>
                <div class="text-center font-bold italic">{name}</div>
            </div>
            {/each}
        </div>
    </div>
</div>