<script>
    export let image, header, subheader;
    export let description = "";
</script>

<div class="flex flex-col h-full font-plex-mono items-center text-white my-5 md:px-20 px-5 py-10">
    <p class="flex flex-row h-full w-full md:text-5xl text-3xl font-bold">
        {header}
    </p>
    <div class="flex flex-row h-full w-full mt-10">
        <div class="md:flex hidden h-full w-1/3 mr-10"> <!-- add justify-center if you want images center.-->
            <img class="h-full w-full object-cover rounded-lg" alt="thumbnail" src={image}/>
        </div>
        <div class="flex flex-col h-full w-2/3 font-bold md:text-4xl text-lg justify-center my-auto"> <!-- not sure how to center this w/o my-auto-->
            <p class="italic">
                {subheader}
            </p>
            <p class="md:text-xl text-xs text-orange md:pl-5">
                {description}
            </p>
        </div>
        <div class="flex flex-col md:hidden h-full w-1/3 ml-10"> <!-- add justify-center if you want images center.-->
            <img class="h-full w-full object-cover rounded-lg" alt="thumbnail" src={image}/>
        </div>
    </div>
</div>
