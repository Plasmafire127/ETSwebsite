<script lang="ts">
    import Dropdown from "./Dropdown.svelte";
</script>


<nav class = "bg-nav-purple fixed w-full shadow-md z-50">
    <div class = "font-plex-mono flex px-10 h-20 items-center">
        <a href="/" class = "font-keania-one text-white text-6xl">
            ETS
        </a>
        <a href="/" class="flex flex-col font-plex-mono text-white text-lg basis-7/12">
            <p style="margin-bottom: -0.35rem; margin-top:-0.35rem">
                Emerging
            </p>
            <p style="margin-bottom: -0.35rem; margin-top:-0.35rem">
                Technology
            </p>
            <p style="margin-bottom: -0.35rem; margin-top:-0.35rem">
                Studio
            </p>
        </a>
        <div class="basis-4/12 flex flex-row justify-between items-center text-orange text-2xl space-x-10">
                <Dropdown/>
            <div>
                About
            </div>
            <div>
                Location
            </div> 
            <div>
                Contact
        </div>
    </div>
</nav>