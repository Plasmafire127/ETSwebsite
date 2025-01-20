<script>
    export let image, header, subheader;
    export let description = "";
</script>

<div class="font-plex-mono text-white my-5 md:px-20 px-5 py-10">
    <!-- Header Section -->
    <p class="w-full md:text-5xl text-3xl font-bold text-left mb-5">
        {header}
    </p>

    <!-- Content Section: Image and Text -->
    <div class="flex flex-col md:flex-row items-start">
        <!-- Left Column: Image -->
        <div class="flex flex-col md:w-1/2 w-full items-center md:items-start">
            <div class="flex w-full justify-center md:justify-start">
                <img 
                    class="w-full max-w-md h-auto object-cover rounded-lg shadow-lg" 
                    alt="thumbnail" 
                    src={image}
                />
            </div>
        </div>

        <!-- Right Column: Text -->
        <div class="flex flex-col md:w-1/2 w-full font-bold md:pl-3 mt-5 md:mt-0">
            <p class="italic md:text-3xl text-xl text-left">
                {subheader}
            </p>
            <p class="md:text-xl text-sm text-orange mt-2 text-left">
                {description}
            </p>
        </div>
    </div>
</div>
