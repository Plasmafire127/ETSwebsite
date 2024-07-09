<script lang="ts">
    import Dropdown from "./Dropdown.svelte";
</script>


<nav class = "bg-black backdrop-blur-xl bg-opacity-10 hover:bg-opacity-100 transition-all duration-500 md:fixed w-screen shadow-md z-20">
    <div class = "font-plex-mono flex md:px-6 px-2  h-[4.5rem] items-center">
        <div class="flex flex-row w-1/4 justify-start">
            <a href="/" class = "font-keania-one text-white md:text-6xl text-4xl">
                ETS
            </a>
            <div class="md:visible invisible flex">
                <a href="/" class="flex flex-col font-plex-mono text-white md:text-lg text-xs text-left">
                    <p style="margin-bottom: -0.3rem; margin-top:-0.3rem">
                        Emerging
                    </p>
                    <p style="margin-bottom: -0.3rem; margin-top:-0.3rem">
                        Technology
                    </p>
                    <p style="margin-bottom: -0.3rem; margin-top:-0.3rem">
                        Studio
                    </p>
                </a>
            </div>
        </div>
        <div class="flex flex-row w-3/4 justify-end">
            <div class="flex flex-row items-center text-orange md:text-2xl text-xs space-x-5 md:space-x-10">
                    <Dropdown/>
                <div>
                    <a href="/about">
                        About
                    </a>
                </div>
                <div>
                    Location
                </div> 
                <div>
                    Contact
            </div>
        </div>
    </div>
</nav>