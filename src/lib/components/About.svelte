<script>
    export let image, name, position, major, year;
</script>
<div class="h-full w-full items-center text-center font-plex-mono md:font-bold font-normal">
    <div class="h-full w-full flex flex-col items-center">
        <img class="h-full w-1/2 object-cover mb-2 mt-4" alt="thumbnail" src={image}/>
        <div class="text-white md:text-3xl text-xs font-bold">
            {name}
        </div>
        <div class="text-green md:text-xl text-xs">
            {position}
        </div>
        <div class="text-orange md:text-lg text-xs">
            {major}
        </div>
        <div class="text-primary-purple md:text-base text-xs">
            {year}
        </div>
    </div>
</div>