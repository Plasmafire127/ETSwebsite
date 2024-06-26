<script>


  export let header, motto, one, two, three, link;
  export let image = '';
</script>

<div class="bg-off-white rounded-3xl text-center justify-between w-10/12 h-1/4 flex flex-row">
    <div class="h-full w-2/3 flex flex-col justify-start">
        <img class="rounded-l-3xl border-1 justify-center border-black flex h-full w-full object-cover" alt="thumbnail" src={image}/>
    </div>
    <div class="h-full w-1/2 flex flex-col justify-center space-y-2 items-center">
        <div class="flex flex-col w-full">
            <p class="text-lg">{header}</p>
            <p class="text-xs italic font-bold text-italic-gray">{motto}</p>
        </div>
        <div class="font-plex-mono text-orange text-xxs font-bold bg-nav-purple w-fit rounded-full p-1">
            {link} &gt;
        </div>
        <div class="flex flex-col text-xxs">
            <p>{one}</p>
            <p>{two}</p>
            <p>{three}</p>
        </div>
    </div>
</div>
