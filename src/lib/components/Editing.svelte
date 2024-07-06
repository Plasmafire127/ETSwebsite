<script>
    export let header, paragraphone, logoone, subheaderone, subparagraphone, logotwo, subheadertwo, subparagraphtwo, logothree, subheaderthree, subparagraphthree;
</script>
<div class="md:px-20 px-5 text-white mt-5">
    <div class="font-plex-mono flex flex-col md:h-1/6 md:text-5xl text-3xl font-bold">
        <p>
            {header}
        </p>
        <p class="md:text-lg text-sm text-orange">
            {paragraphone}
        </p>
    </div>
    <div class="font-plex-mono font-bold md:text-4xl text-lg flex flex-col w-full h-5/6 md:pl-0 pl-5">
        <div class="flex flex-row md:my-8 my-2 items-center">
            <div class="flex flex-col text-black bg-white rounded-xl md:w-16 md:h-16 w-10 h-10 text-center justify-center">
                {logoone}
            </div>
            <div class="flex flex-col mx-5">
                <p class="md:text-2xl text-lg italic">
                    {subheaderone}
                </p>
                <p class="md:text-lg text-xs text-orange">
                    {subparagraphone}
                </p>
            </div>
        </div>
        <div class="flex flex-row md:my-8 my-2">
            <div class="flex flex-col text-black bg-white rounded-xl md:w-16 md:h-16 w-10 h-10 text-center justify-center">
                {logotwo}
            </div>
            <div class="flex flex-col mx-5">
                <p class="md:text-2xl text-lg italic">
                    {subheadertwo}
                </p>
                <p class="md:text-lg text-xs text-orange">
                    {subparagraphtwo}
                </p>
            </div>
        </div>
        <div class="flex flex-row md:my-8 my-2">
            <div class="flex flex-col text-black bg-white rounded-xl md:w-16 md:h-16 w-10 h-10 text-center justify-center">
                {logothree}
            </div>
            <div class="flex flex-col mx-5">
                <p class="md:text-2xl text-lg italic">
                    {subheaderthree}
                </p>
                <p class="md:text-lg text-xs text-orange">
                    {subparagraphthree}
                </p>
            </div>
        </div>
    </div>
</div>