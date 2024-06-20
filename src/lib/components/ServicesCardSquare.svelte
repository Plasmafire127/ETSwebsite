<script>
    export let header;
</script>
<div class="flex flex-col bg-off-white rounded-xl text-black text-4xl font-bold space-y-5 w-full p-5">
    <p>{header}</p>
    <hr class="border-2">
    <div class="flex flex-row w-full">
        <div class="flex flex-col w-1/2 items-start">
            <p>
                Weight
            </p>
            <p>
                Material
            </p>
        </div>

        <div class="flex flex-col w-1/2 items-end">
            <p>
                --- G
            </p>
            <p>
                ---
            </p>
        </div>
    
    </div>
    <hr class="border-2">
    <div class="flex flex-row w-full">
        <div class="flex flex-col w-1/2 items-start">
            <p>
                Total
            </p>
        </div>
        <div class="flex flex-col w-1/2 items-end">
            <p>
                $00.00
            </p>
        </div>
    </div>
</div>