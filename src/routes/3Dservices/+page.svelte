<script>
    import ServicesCardLarge from '$lib/components/ServicesCardLarge.svelte';
    import ServicesCardSmall from '$lib/components/ServicesCardSmall.svelte';
    import ServicesCardSquare from '$lib/components/ServicesCardSquare.svelte';
    import ServicesCardLargeMobile from '$lib/components/ServicesCardLargeMobile.svelte';
    import Overview from '$lib/components/Overview.svelte';
    import temp from '$lib/images/temp.png';
    let rightoneArray = ["Prusa", "Bambu", "Voron", "Ender", "Form 3"];
    let righttwoArray = ["PLA", "TPU", "PETG", "ABS", "SLA"];
</script>

<div class="font-plex-mono flex flex-col items-center justify-start h-1/2 text-center text-orange">
    <div class="flex md:flex-row flex-col h-full w-screen md:mt-20 md:p-20 p-5 md:space-x-10">
 
        <div class="hidden w-2/3 md:flex flex-col">
            <div class="flex flex-row h-1/4 space-x-10">
            <ServicesCardSmall 
            logo="fa-solid fa-cube"
            text = "3D Prints"/>

            <ServicesCardSmall
            logo="fa-solid fa-compass-drafting"
            text="2D Crafts"/>
            </div>

            <div class="h-2/3 mt-auto flex flex-col">
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


        <div class="hidden md:flex flex-row md:w-1/3">
            <ServicesCardSquare 
            header = "Price Estimate"
            />
        </div>

        <div class="md:hidden w-full flex flex-col h-full space-y-5">
            <div class="flex flex-row space-x-5">
            <ServicesCardSmall 
            logo="fa-solid fa-cube"
            text = "3D Prints"/>

            <ServicesCardSmall
            logo="fa-solid fa-compass-drafting"
            text="2D Crafts"/>
            </div>
        
            <div class="flex flex-col">
            <ServicesCardLargeMobile
                leftone = "3D Printers"
                lefttwo = "Material"
                leftthree = "Color"
                rightone = "Click to select printer"
                logoone = "fa-solid fa-cubes"
                righttwo = "Click to select material"
                logotwo = "fa-solid fa-layer-group"
                rightthree = "Click to select color"
                logothree = "fa-solid fa-droplet" />
            </div>
                 
            <div class="flex flex-row md:w-1/3">
                <ServicesCardSquare 
                header = "Price Estimate"
                />
            </div>
        </div>

    </div>
</div>

<div class="flex justify-center">
  <hr class="border-white w-11/12">
</div>

<div class="font-plex-mono flex flex-col h-screen text-orange">
    <Overview 
    image = {temp}
    header = "3D PRINT OVERVIEW"
    subheaderone = "How to Request"
    paragraphone = 
"
1. Have your file in either PNG, JPEG, or SVG.
2. Send us an email to etsbing@binghamton.edu.
    &#8226; Attach the file.
    &#8226; See below for more specific description.
3. Wait for our response email.
4. Visit the ETS at the Tech hub!"
    subheadertwo = "how to Pay"
    paragraphtwo =
"
1. We accept BUC$, which you can load here.
2. Register with the Meal Plan Office if you do not have an account.
"
    />
</div>

<div class="flex justify-center">
  <hr class="border-white w-11/12">
</div>

