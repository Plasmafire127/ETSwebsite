<script>
     import Separator from "$lib/components/Separator.svelte";
     import About from "$lib/components/About.svelte";
     import temp from '$lib/images/temp.png';
</script>
<div class="flex flex-col h-screen w-screen text-orange text-center font-bold items-center justify-center">
   <p class="md:text-3xl text-xl">
        the ETS is student run...
   </p>
   <p class="font-space-grotesk md:text-7xl text-4xl font-extrabold">
        Meet Our Team!
   </p> 
   <p class="md:mt-40 mt-20 md:text-2xl text-lg text-green">
        Think it. Print it. Create it.
   </p>
   <p class="md:text-xl text-base md:px-64 px-10">
    Here at the ETS, we have a diversified set of students working to provide you with the best services. Disciplines range from Mechanical Engineering to Computer Engineering & Science, to Art. Our goal is to embrace everyone's creativity and interests. So don't be shy, come on in and start creating your very own projects!
   </p>
</div>
<Separator />
<div class = "h-full w-screen grid md:grid-cols-3 grid-cols-2 md:px-20 px-5">
     <About
     image={temp}
     name="Van James Huynh"
     position="Director"
     major="Industrial Systems Engineering"
     year="Senior"
     />
     <About
     image={temp}
     name="Paul Ampadu"
     position="ML/Computer Graphics Specialist"
     major="Computer Science"
     year="Senior"
     />
     <About
     image={temp}
     name="Winnie Yong"
     position="Cricut Specialist"
     major="Computer Science"
     year="Senior"
     />
     <About
     image={temp}
     name="Rachel Koppelman"
     position="CNC Specialist"
     major="Mechanical Engineering"
     year="Senior"
     />
     <About
     image={temp}
     name="Sam Abramson"
     position="Robotics Specialist"
     major="Mechanical Engineering"
     year="Senior"
     />
     <About
     image={temp}
     name="Jake Digiugno"
     position="3D Engine Specialist"
     major="Computer Science"
     year="Junior"
     />
</div>

<Separator />

<div class="font-plex-mono font-bold h-full w-screen md:px-20 px-5">
     <p class="md:text-4xl text-xl text-white italic">
          Alumni:
     </p>
     <div class="md:flex md:flex-row md:space-y-0 grid grid-cols-2 space-y-5 justify-between md:text-base text-xs text-orange whitespace-pre-line md:px-20 mt-5">
     <p>
          Brian Min
          Mike Rosenberg
          Benjamin Neubardt
          Jacob Richman
     </p>
     <p>
          Cammie Summers
          David Demetros
          James Kaminski
     </p>
     <p>
          Lance Cheng
          Jasmin Zelaya
          Ali Merali
          Nathaniel Sehati
     </p>
     <p>
          Damian Rode
          Ameen Kunnathu
          Catherine Tai
          Joe Donaghy
     </p>
     </div>
</div>