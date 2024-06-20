<script>
    import ServicesCardLarge from '$lib/components/ServicesCardLarge.svelte';
    import ServicesCardSmall from '$lib/components/ServicesCardSmall.svelte';
    import ServicesCardSquare from '$lib/components/ServicesCardSquare.svelte';
      let rightoneArray = ["Prusa", "Bambu", "Voron", "Ender", "Form 3"];
    let righttwoArray = ["PLA", "TPU", "PETG", "ABS", "SLA"];
</script>

<div class="font-plex-mono flex flex-col items-center justify-start h-screen text-center text-orange">
    <div class="flex h-1/2 w-screen mt-20 p-20 space-x-10">
        <div class="w-2/3 flex flex-col h-full">

                <div class="flex flex-row h-1/6 space-x-10">
                <ServicesCardSmall 
                logo="fa-solid fa-cube"
                text = "3D Prints"/>

                <ServicesCardSmall
                logo="fa-solid fa-compass-drafting"
                text="2D Crafts"/>
                </div>

                <div class="h-4/6 mt-auto flex flex-col">
                <ServicesCardLarge
                leftone = "3D Printers"
                lefttwo = "Material"
                leftthree = "Color"
                rightone = {rightoneArray}
                righttwo = {righttwoArray}
                logo = "fa-solid fa-droplet"
                rightthree = "Click to select color"/>
                </div>

        </div>
        <div class="flex flex-row w-1/3">
            <ServicesCardSquare 
                header = "Price Estimate"
            />
        </div>
    </div>
</div>