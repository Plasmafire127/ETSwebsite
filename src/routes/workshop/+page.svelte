<script>
    import Separator from "$lib/components/Separator.svelte";
</script>

<!-- Header Section -->
<div class="flex flex-col h-screen w-screen text-orange text-center font-bold items-center justify-center">
    <p class="md:text-3xl text-xl">
        learn with us at our ...
    </p>
    <p class="font-space-grotesk md:text-7xl text-4xl font-extrabold">
        Workshop & Events
    </p> 
    <p class="md:mt-40 mt-20 md:text-2xl text-lg text-green">
        Check out our Calendar for updates!
    </p>
    <p class="md:text-xl text-base md:px-64 px-10">
        We host monthly workshop and occasionally special events in collaboration with other groups on campus. If you are a club and want to collaborate with us, please email us at etsbing@binghamton.edu!
        We announce our events on our mailing list and on our Instagram. We hope to see you there!
    </p>
</div>
<Separator />

<!-- Calendar Section -->
<div class="flex flex-col items-center justify-center text-center mt-10 mb-10">
    <p class="md:text-2xl text-lg text-green font-bold">
        Add our events to your Calendar:
    </p>
    <div class="flex flex-col md:flex-row gap-5 mt-4">
        <a 
            href="https://calendar.google.com/calendar/u/0?cid=c_46604327a2cb566d13f49287127283eb18cd37b5a4772842401f256e28e1cae4@group.calendar.google.com" 
            target="_blank" 
            class="px-4 py-2 bg-blue-500 text-orange font-bold bg-nav-purple rounded-full rounded hover:bg-blue-600">
            Add to Google Calendar &gt
        </a>
    </div>
</div>

<!-- Embedded Calendar -->
<div class="flex justify-center mt-10 mb-20">
    <iframe
        src="https://calendar.google.com/calendar/embed?src=c_46604327a2cb566d13f49287127283eb18cd37b5a4772842401f256e28e1cae4@group.calendar.google.com&ctz=America/New_York" 
        style="border: 0" 
        width="800" 
        height="600" 
        frameborder="0" 
        scrolling="no"
        title = "ETS Workshop Calendar">
    </iframe>
</div>