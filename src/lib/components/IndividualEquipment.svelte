<script>
    export let image, header;
    export let price = "";
    export let description = "";
    export let craftdescription = "";
</script>

<div class="flex flex-col items-center my-5"> 
    <div class="flex flex-col items-start">
        <div class="h-full w-full mb-2"> <!-- add justify-center if you want images center.-->
                <img class="h-full object-cover" alt="thumbnail" src={image}/>
        </div>
        <div class="flex flex-row w-full text-white md:text-4xl text-lg font-bold italic">
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
