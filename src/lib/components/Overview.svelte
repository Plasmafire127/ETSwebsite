<script>
    export let image, header, subheaderone, subheadertwo, paragraphone, paragraphtwo;
</script>

<p class="font-plex-mono flex md:h-1/6 md:pt-0 pt-10 text-white items-end md:text-5xl text-2xl font-bold md:px-20 px-5">
    {header}
</p>
<div class="font-plex-mono flex md:flex-row flex-col w-full h-5/6 md:px-0 px-5">
    <div class="flex md:flex-row flex-col md:h-full h-1/4 md:pl-20 md:py-20 md:mr-5 pt-5">
        <div class="h-full w-full">
            <img class="h-full md:w-full object-contain" alt="thumbnail" src={image}/> 
        </div>
    </div>
    <div class="flex flex-col h-full md:w-2/3 text-left text-white font-bold md:text-xl text-xs md:pr-20 md:py-20 py-10 md:ml-5 md:justify-center">
        <p class="italic md:text-4xl text-lg">
            {subheaderone}
        </p>
        <p class="whitespace-pre-line text-orange pl-5">
            {paragraphone}
        </p>
        <p class="italic md:text-4xl text-lg mt-10">
            {subheadertwo}
        </p>
        <p class="md:whitespace-break-spaces whitespace-pre-line text-orange pl-5">
            {paragraphtwo}
        </p>
    </div>
</div>