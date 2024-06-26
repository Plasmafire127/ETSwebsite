<script>
    export let image, header, subheaderone, subheadertwo, paragraphone, paragraphtwo;
</script>

<p class="flex h-1/6 text-white items-end md:text-6xl text-xl font-bold md:px-20 px-5">
    {header}
</p>
<div class="flex flex-row w-full h-5/6">
    <div class="flex flex-row h-full pl-20 py-20 mr-5">
        <div class="flex h-full w-full">
            <img class="h-full w-full object-contain" alt="thumbnail" src={image}/> 
        </div>
    </div>
    <div class="flex flex-col h-full text-left text-white text-xl pr-20 py-20 ml-5 justify-center">
        <p class="font-bold italic text-5xl">
            {subheaderone}
        </p>
        <p class="whitespace-pre">
            {paragraphone}
        </p>
        <p class="font-bold italic text-5xl">
            {subheadertwo}
        </p>
        <p class="whitespace-break-spaces">
            {paragraphtwo}
        </p>
    </div>
</div>