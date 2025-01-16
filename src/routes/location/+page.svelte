<script>
    import Separator from '$lib/components/Separator.svelte';
</script>

<div class="font-plex-mono font-bold flex flex-col items-center justify-center w-screen h-screen text-center text-orange">
    <p class="mt-10 md:text-4xl text-xl">
        Come visit us at the...
    </p>
    <p class="font-space-grotesk md:text-7xl text-3xl">
        Technology Hub!
    </p>
    <p class="md:mt-40 mt-20 md:text-4xl text-xl text-green">
        Binghamton University
    </p>
    <p class="mt-2 md:text-xl text-base">
        4400 Vestal Pkwy E, Binghamton, NY 13902
    </p>
    <a href="https://www.google.com/maps/dir/42.0880827,-75.968653/Computer+Center,+4410+Vestal+Pkwy+E,+Vestal,+NY+13850/@42.0880317,-75.969056,19z/data=!3m1!4b1!4m19!1m8!3m7!1s0x89daeec7ec578a2d:0x47ce8f9b101b368d!2sComputer+Center,+4410+Vestal+Pkwy+E,+Vestal,+NY+13850!3b1!8m2!3d42.08799!4d-75.9685948!16s%2Fg%2F11rp1wx33s!4m9!1m1!4e1!1m5!1m1!1s0x89daeec7ec578a2d:0x47ce8f9b101b368d!2m2!1d-75.9685948!2d42.08799!3e0?entry=ttu&g_ep=EgoyMDI0MDkwMi4wIKXMDSoASAFQAw%3D%3D" 
       class="mt-5 font-plex-mono md:text-2xl text-lg bg-nav-purple rounded-full w-auto h-auto py-2 px-6">
        Get Directions &gt;
    </a>
</div>

<Separator />

<div class="font-plex-mono font-bold flex flex-col justify-center align-center md:space-y-0 space-y-16 w-screen h-screen text-orange md:px-64 md:text-base text-xs">
    <div class="flex flex-row space-x-10">
        <!-- Larger, Fully Visible Image -->
        <img 
            class="w-2/3 h-auto object-contain rounded-lg shadow-xl" 
            alt="Technology Hub Location" 
            src="/images/etslocation.png"
        />
        
        <!-- Text -->
        <div class="flex flex-col">
            <p class="md:text-4xl text-xl text-white italic"> 
                First Floor Technology Hub
            </p>
            <p>
                We are currently located in the first floor of the Technology Hub which also hosts the Information Technology Hub (ITS)! This place is situated between the Glenn G. Bartle Library, the Engineering Building, and the University Union. 
            </p>
        </div>
    </div>
</div>