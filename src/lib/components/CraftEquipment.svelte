<script>
    import IndividualEquipment from "./IndividualEquipment.svelte";
    import temp from '$lib/images/temp.png';
</script>


<div class="flex flex-col font-plex-mono text-white md:text-5xl text-2xl md:px-20 px-5 w-full md:pt-0 pt-10">
    <p class="flex custom-height-md items-end font-bold">
        Our 2D Services
    </p>
    <p class="md:text-base text-sm text-orange mt-5 italic font-bold">
        Provide the information below in the email that you send for our service. Max size for sheets are 6in x 9in.
    </p>
</div>
<div class="grid md:grid-cols-3 grid-cols-2 md:p-20 md:gap-x-0 gap-x-5 px-5 pb-10">
    <IndividualEquipment
    image = {temp}
    header = "Stickers"
    price = "$0.50/sheet"
    craftdescription = 
   "&#8226; PNG, JPEG, SVG Files
&#8226; Width & Height (inches)
&#8226; Outline/Offset (inches)
&#8226; Matte OR Glossy
&#8226; Die-cut OR Kiss-cut
&#8226; Optional: Lamination
    "
    />

    <IndividualEquipment
    image = {temp}
    header = "Card-Stock"
    price = "$0.80/sheet"
    craftdescription = 
   "&#8226; PNG, JPEG, PDF Files
&#8226; Double Sided?
&#8226; Color of Card-stock
&#8226; Markers OR Printed
&#8226; Optional: Emboss, Score, Perforation
    "
    />

    <IndividualEquipment
    image = {temp}
    header = "Iron-On"
    price = "$0.02/in&sup2"
    craftdescription = 
   "&#8226; PNG, JPEG, SVG Files
&#8226; Width & Height (inches)
&#8226; Outline/Offset (inches)
&#8226; Color of Iron-On Sheet
&#8226; Optional: Custom Decal, Special Instructions
    "
    />

    <IndividualEquipment
    image = {temp}
    header = "Vinyl"
    price = "$0.02/in&sup2"
    craftdescription = 
   "&#8226; PNG, JPEG, SVG Files
&#8226; Width & Height (inches)
&#8226; Black OR White Color
&#8226; Optional: Special Instructions
    "
    />

    <IndividualEquipment
    image = {temp}
    header = "Acrylic"
    price = "$0.50/circle"
    craftdescription = 
   "&#8226; PNG, JPEG, SVG Files
&#8226; Width & Height (inches)
    "
    />

    <IndividualEquipment
    image = {temp}
    header = "Other Materials"
    craftdescription = 
   "&#8226; Fabrics
&#8226; Plastics
&#8226; Cardboard
&#8226; More listed Here
    "
    />


</div>