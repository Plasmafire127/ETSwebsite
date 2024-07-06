<script>
    import IndividualEquipment from "./IndividualEquipment.svelte";
    import temp from '$lib/images/temp.png';
</script>


<div class="flex flex-col">
    <p class="font-plex-mono flex text-white items-end md:text-5xl text-2xl font-bold md:px-20 px-5 w-full md:pt-0 pt-10 custom-height-md">
        Our 3D printers
    </p>
    <div>
        <div class="grid md:grid-cols-4 grid-cols-2 md:p-20 md:gap-x-0 gap-x-5 px-5 pb-10">
            <IndividualEquipment
            image = {temp}
            header = "Prusa XL"
            description = "(360mm x 360mm x 360mm)"
            />

            <IndividualEquipment
            image = {temp}
            header = "Prusa MK4"
            description = "(180mm x 180mm x 180mm)"
            />

            <IndividualEquipment
            image = {temp}
            header = "Voron 2.4"
            description = "(360mm x 350mm x 350mm)"
            />

            <IndividualEquipment
            image = {temp}
            header = "Bambu X1-Carbon"
            description = "(256mm x 256mm x 256mm)"
            />

            <IndividualEquipment
            image = {temp}
            header = "Bambu P1S"
            description = "(256mm x 256mm x 256mm)"
            />

            <IndividualEquipment
            image = {temp}
            header = "ELEGOO Saturn Ultra 3"
            description = "(218.88mm x 218.88mm x 260mm)"
            />

            <IndividualEquipment
            image = {temp}
            header = "Formlabs Form 3"
            description = "(145mm x 145mm x 185mm)"
            />

            <IndividualEquipment
            image = {temp}
            header = "Formlabs Form 2"
            description = "(145mm x 145mm x 175mm)"
            />
    </div>
    </div>
</div>