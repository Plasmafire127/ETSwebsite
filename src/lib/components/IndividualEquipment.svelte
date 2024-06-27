<script>
    export let image, header, description;
</script>

<div class="flex flex-col items-center my-5">
    <div class="flex flex-col items-start">
        <div class="flex justify-center h-full w-full mb-2">
                <img class="flex h-full object-cover" alt="thumbnail" src={image}/>
        </div>
        <p class="text-white md:text-4xl text-lg font-bold italic">
            {header}
        </p>
        <p class="text-green font-bold md:text-base text-xs">
            {description}
        </p>
    </div>
</div>
