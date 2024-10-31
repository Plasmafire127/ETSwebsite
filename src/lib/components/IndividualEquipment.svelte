<script>
    export let image, header;
    export let price = "";
    export let description = "";
    export let craftdescription = "";
</script>

<div class="flex flex-col items-center my-5"> 
    <div class="flex flex-col items-center mt-auto">
        <div class="items-center h-full w-full mb-2">
                <img class="object-cover" alt="thumbnail" src={image}/>
        </div>
        <div class="text-white md:text-3xl text-lg font-bold italic">
            <p>
                {header}
            </p>
            <p class="text-green text-right md:ml-5 ml-2 self-start md:text-base text-sm">
                {price}
            </p>
        </div>
        <p class="text-green font-bold md:text-base text-xs">
            {description}
        </p>
        <p class="text-orange font-bold md:text-base text-xs whitespace-pre-line pl-4">
            {craftdescription}
        </p>
    </div>
</div>
