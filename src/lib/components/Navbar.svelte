<script lang="ts">
    import Dropdown from "./Dropdown.svelte";
</script>


<nav class = "bg-nav-purple">
    <div class = "font-plex-mono flex px-10 h-20 items-center">
        <div class = "font-keania-one text-white text-6xl">
            ETS
        </div>
        <div class="flex flex-col font-plex-mono text-white text-lg basis-7/12">
            <p style="margin-bottom: -0.35rem; margin-top:-0.35rem">
                Emerging
            </p>
            <p style="margin-bottom: -0.35rem; margin-top:-0.35rem">
                Technology
            </p>
            <p style="margin-bottom: -0.35rem; margin-top:-0.35rem">
                Studio
            </p>
        </div>
        <div class="basis-4/12 flex flex-row justify-between text-orange text-2xl">
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