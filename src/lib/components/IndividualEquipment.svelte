<script>
    export let image, header;
    export let price = "";
    export let description = "";
    export let craftdescription = "";
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: flex-start; 
        height: 100%; 
        margin: 10px; 
        text-align: center; 
    }

    .image-container {
        width: 100%;
        max-width: 300px; 
        height: auto; 
        overflow: hidden; 
        display: flex;
        justify-content: center;
        align-items: center; 
        margin-bottom: 10px;
    }

    .equipment-image {
        width: 100%; 
        height: auto; 
        object-fit: cover; 
        border-radius: 8px; 
    }

    .equipment-info {
        text-align: center;
    }
</style>

<div class="container">
    <div class="image-container">
        <img class="equipment-image" alt="thumbnail" src={image} />
    </div>
    <div class="equipment-info text-white md:text-3xl text-lg font-bold italic">
        <p>{header}</p>
        <p class="text-green text-right md:ml-5 ml-2 self-start md:text-base text-sm">
            {price}
        </p>
    </div>
    <p class="text-green font-bold md:text-base text-xs">{description}</p>
    <p class="text-orange font-bold md:text-base text-xs whitespace-pre-line pl-4">
        {craftdescription}
    </p>
</div>