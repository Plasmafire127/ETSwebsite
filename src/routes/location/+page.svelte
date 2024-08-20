<script>
    import temp from '$lib/images/temp.png';
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
  <div class="mt-5 font-plex-mono md:text-2xl text-lg bg-nav-purple rounded-full w-auto h-auto py-2 px-6">
    Get Directions &gt;
  </div>
</div>

<Separator />

<div class="font-plex-mono font-bold flex flex-col justify-center align-center md:space-y-0 space-y-16 w-screen h-screen text-orange md:px-64 md:text-base text-xs">
    <div class="flex flex-row space-x-10">
        <img class="w-1/3 object-cover" alt="thumbnail" src={temp}/>
        <div class="flex flex-col">
            <p class="md:text-4xl text-xl text-white italic"> 
                First Floor Technology Hub
            </p>
            <p>
                We are currently located in the first floor of the Technology Hub which also hosts the Information Technology Hub (ITS)! This place is situated between the Glenn G. Bartle Library, the Engineering Building, and the University Union. 
            </p>
        </div>
    </div>
    <div class="flex flex-row space-x-10">
        <div class="flex flex-col text-right">
            <p class="md:text-4xl text-xl text-white italic"> 
                Ramp to ETS
            </p>
            <p>
                The well-known path is to go up this ramp on west drive and into the building directly in front of it. This ramp is situated between the road from the Bartle Library to Engineering Building section closer to the residential area.
            </p>
        </div>
        <img class="w-1/3 object-cover" alt="thumbnail" src={temp}/>
    </div>
</div>
