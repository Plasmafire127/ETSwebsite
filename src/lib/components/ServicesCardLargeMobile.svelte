<script>
    export let leftone, lefttwo, leftthree, rightone, righttwo, rightthree, logoone, logotwo, logothree;
</script>


<div class="flex flex-row bg-off-white rounded-xl h-full px-5 py-2 whitespace-nowrap">
    <div class="flex flex-col text-sm font-bold text-black text-left justify-center w-1/3">
        <p class="flex h-1/3 items-center">{leftone}</p>
        <p class="flex h-1/3 items-center">{lefttwo}</p>
        <p class="flex h-1/3 items-center">{leftthree}</p>
    </div>

    <div class="flex flex-col w-2/3 text-xxs font-bold text-black justify-center space-y-5">
        <div class="flex flex-row h-1/3 items-center justify-start space-x-5">
            <div class="bg-dark-gray rounded-lg w-full px-5 py-2 text-left">
                <i class={logoone}></i> {rightone}
            </div>
        </div>
        <div class="flex flex-row h-1/3 items-center justify-start space-x-5">
            <div class="bg-dark-gray rounded-lg w-full px-5 py-2 text-left">
                <i class={logotwo}></i> {righttwo}
            </div>
        </div>
        <div class="flex flex-row h-1/3 items-center justify-start space-x-5">
            <div class="bg-dark-gray rounded-lg w-full px-5 py-2 text-left">
                <i class={logothree}></i> {rightthree}
            </div>
        </div>
    </div>
</div>