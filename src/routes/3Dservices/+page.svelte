<script>
    import ServicesCardLarge from '$lib/components/ServicesCardLarge.svelte';
    import ServicesCardSmall from '$lib/components/ServicesCardSmall.svelte';
    import ServicesCardSquare from '$lib/components/ServicesCardSquare.svelte';
    import ServicesCardLargeMobile from '$lib/components/ServicesCardLargeMobile.svelte';
    import Overview from '$lib/components/Overview.svelte';
    import temp from '$lib/images/temp.png';
    import PrinterEquipment from '$lib/components/PrinterEquipment.svelte';
    import Separator from '$lib/components/Separator.svelte';
    let rightoneArray = ["Prusa", "Bambu", "Voron", "Ender", "Form 3"];
    let righttwoArray = ["PLA", "TPU", "PETG", "ABS", "SLA"];
</script>

<div class="font-plex-mono flex flex-col items-center justify-start h-1/2 text-center text-orange">
    <div class="flex md:flex-row flex-col h-full w-screen md:mt-20 md:p-20 p-5 md:space-x-10">
 
        <div class="hidden w-2/3 md:flex flex-col">
            <div class="flex flex-row h-1/4 space-x-10">
            <ServicesCardSmall
            color="bg-orange" 
            href="./3Dservices"
            logo="fa-solid fa-cube"
            text = "3D Prints"/>

            <ServicesCardSmall
            color="bg-off-white"
            href="./2Dservices"
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
            color="bg-orange"
            href="./3Dservices"
            logo="fa-solid fa-cube"
            text = "3D Prints"/>

            <ServicesCardSmall
            color="bg-off-white"
            href="./2Dservices"
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

<Separator/>

<div class="flex flex-col md:h-screen h-full w-screen text-orange">
    <Overview 
    image = {temp}
    header = "3D PRINTS OVERVIEW"
    subheaderone = "How to Request"
    paragraphone = "1. Have your file in either STL, 3MF, or STEP.
2. Send us an email to etsbing@binghamton.edu.
    &#8226; Attach the file.
    &#8226; Specify color and material.
    &#8226; Optionally, specify infill, strength, etc.
3. Wait for our response email.
4. Visit the ETS at the Tech hub!"
    subheadertwo = "how to Pay"
    paragraphtwo ="1. We accept BUC$, which you can load here.
2. Register with the Meal Plan Office if you do not have an account.
"
    />
</div>

<Separator/>

<div class="h-full w-screen">
    <PrinterEquipment/>
</div>

<Separator/>

<div class="flex flex-col w-screen h-full font-plex-mono text-white font-bold md:px-20 px-5 pb-32">
    <p class="flex md:text-5xl text-2xl w-full items-end custom-height-md md:pt-0 pt-10">
        New to 3D Printing?
    </p>
    <div class="flex md:flex-row flex-col mt-10">
        <div class="md:hidden flex w-full h-full justify-center mb-10">
            <img class="h-full w-1/2 object-cover" alt="thumbnail" src={temp}/>
        </div>
        <div class="md:w-2/3 w-full h-full">
            <p class="md:text-3xl text-lg">
                Come visit us at the Technology Hub!
            </p>
            <p class="pl-10 text-orange md:text-xl text-base">
                Walk-ins are encouraged! ALL Binghamton University students, staff, and faculty may use our resources!
            </p>
            <p class="mt-5 italic md:text-3xl text-lg">
                Resources
            </p>
            <div class="flex flex-col pl-10 text-orange md:text-xl text-base">
                <a href="https://www.raise3d.com/academy/a-beginners-guide-to-3d-printing/" class="hover:text-link hover:scale-105 transition-all duration-150">1. Guide to 3D Printing - <span class="italic">article</span></a>
                <a href="https://www.youtube.com/watch?v=Vx0Z6LplaMU" class="hover:text-link hover:scale-105 transition-all duration-150">2. What is 3D Printing and How Does it Work? | Mashable Explains - <span class="italic">video</span></a>
                <a href="https://www.thingiverse.com/" class="hover:text-link hover:scale-105 transition-all duration-150">3. Thingiverse - <span class="italic">free 3D models</span></a>
                <a href="https://thangs.com/marketplace/memberships?utm_source=google&utm_medium=cpc&utm_campaign=brandedsearch&gad_source=1&gclid=Cj0KCQjw-5y1BhC-ARIsAAM_oKk_y5xTKj1XS7Q4jkNPeufSiD4RXCrUDuEq7VGglP_jBjbkc6kvxBEaAgMkEALw_wcB" class="hover:text-link hover:scale-105 transition-all duration-150">4. Thangs - <span class="italic">free 3D models</span></a>
            </div>
        </div>
        <div class="md:flex hidden w-1/3 h-full justify-center">
            <img class="h-full w-1/2 object-cover" alt="thumbnail" src={temp}/>
        </div>
    </div>
</div>

