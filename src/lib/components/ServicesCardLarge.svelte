<script>
    export let leftone, lefttwo, leftthree, rightthree, logo;
    /**
     * @type {any[]}
     */
     export let rightone = [];
    /**
     * @type {any[]}
     */
     export let righttwo = [];
    /**
     * @type {any[]}
     */
</script>


<div class="flex flex-row bg-off-white rounded-xl h-full px-10 py-2 whitespace-nowrap">
    <div class="flex flex-col text-4xl font-bold text-black text-left justify-center w-1/3">
        <p class="flex h-1/3 items-center">{leftone}</p>
        <p class="flex h-1/3 items-center">{lefttwo}</p>
        <p class="flex h-1/3 items-center">{leftthree}</p>
    </div>

    <div class="flex flex-col w-full text-xl font-bold text-black justify-center overflow-auto pl-10">
        <div class="flex flex-row h-1/3 items-center justify-start space-x-5">
            {#each rightone as rightone (rightone)}
            <div class="bg-dark-gray rounded-lg px-5 py-2 hover:scale-105 transition-transform duration-300 ease-in-out transform">
                {rightone}
            </div>
            {/each}
        </div>
        <div class="flex flex-row h-1/3 items-center justify-start space-x-5">
            {#each righttwo as righttwo (righttwo)}
            <div class="bg-dark-gray rounded-lg px-5 py-2 hover:scale-105 transition-transform duration-300 ease-in-out transform">
                {righttwo}
            </div>
           {/each}
        </div>
        <div class="flex flex-row h-1/3 items-center justify-start space-x-5">
            <div class="bg-dark-gray rounded-lg w-2/3 px-5 py-2 text-left hover:scale-105 transition-transform duration-300 ease-in-out transform">
                <i class={logo}></i> {rightthree}
            </div>
        </div>
    </div>
</div>
