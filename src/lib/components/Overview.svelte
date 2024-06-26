<script>
    export let image, header, subheaderone, subheadertwo, paragraphone, paragraphtwo;
</script>

<p class="w-full text-left text-white items-end md:text-6xl text-xl font-bold px-20 my-10">
    {header}
</p>
<div class="flex flex-row h-full w-full">
    <div class="h-full w-1/2 pl-20 py-20 mr-5">
        <div class="flex justify-center items-center h-full">
            <img class="border-1 border-white flex h-full object-cover" alt="thumbnail" src={image}/>
        </div>
    </div>
    <div class="flex flex-col w-1/2 h-full text-left text-white text-xl pr-20 py-20 ml-5 justify-center">
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