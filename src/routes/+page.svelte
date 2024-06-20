<script>
	import craft from '$lib/images/cricut.png';
  import printer from '$lib/images/printer.jpg';
  import vr from '$lib/images/vr.jpg'
  import HomepageCard from '$lib/components/HomepageCard.svelte';
</script>

<div class="font-plex-mono flex flex-col items-center justify-center h-screen text-center text-orange">
  <p class="mt-10 md:text-4xl text-xl font-bold">
    Welcome to the...
  </p>
  <p class="font-space-grotesk font-bold md:text-7xl text-3xl">
    Emerging Technology Studio!
  </p>
  <p class="md:mt-40 mt-20 md:text-4xl text-xl font-bold text-green">
    Binghamton University's
  </p>
  <p class="mt-2 md:text-4xl text-xl font-bold">
    Premier Makerspace.
  </p>
  <div class="mt-5 font-plex-mono md:text-2xl text-lg font-bold bg-nav-purple rounded-full w-auto h-auto py-2 px-6">
    Get Started &gt;
  </div>
</div>

<div class="flex justify-center">
  <hr class="border-white w-11/12">
</div>

<div class="font-plex-mono flex flex-col h-screen w-screen text-orange">
  <p class="flex text-white md:h-1/4 md:pt-0 pt-10 items-end md:text-6xl text-xl font-bold md:mx-10 mx-5">
    OUR SERVICES
  </p>
  <div class="flex md:flex-row flex-col justify-center h-full w-screen items-center md:space-x-20 space-x-5 md:space-y-0 space-y-10 text-black font-bold">
    <HomepageCard
    image={printer}
    header="3D Printing"
      motto="Think it. Print it."
      one="PLA Printing"
      two="Resin Printing"
      three="Multi-color Printing"
      link="Print Now!"
    /> 
    <HomepageCard 
      image={craft}
      header="2D Crafts"
      motto="Craft, Cut, Create!"
      one="Cricut"
      two="Stickers & Iron-on"
      three="CardStock, Vinyl, etc."
      link="Craft Now!"
    /> 
    <HomepageCard 
      image={vr}
      header="Technology"
      motto="Immersive Experiences."
      one="Virtual Reality (VR/AR)"
      two="360&#176; Media and Scanning"
      three="Adobe Software"
      link="Experience Now!"
    /> 
  </div>
</div>


<div class="flex justify-center">
  <hr class="border-white w-11/12">
</div>


<div class="font-plex-mono flex flex-row h-screen text-white space-x-10 m-10 justify-center items-center">
  <div class="flex h-2/5 w-4/5 items-center">
    <div class="flex text-center justify-center w-1/3"><i class="fa-solid fa-calendar-days scale-200 text-9xl"></i></div>
    <div class="w-2/3 m-10 font-bold">
      <p class="text-6xl">HOURS</p>
      <div class="flex flex-row my-5">
        <div class="flex flex-col text-lg w-1/2">
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday/Sunday</p>
        </div>
        <div class="flex flex-col text-lg w-1/2">
          <p>10:00 AM - 6:00 PM</p>
          <p>10:00 AM - 6:00 PM</p>
          <p>10:00 AM - 6:00 PM</p>
          <p>10:00 AM - 6:00 PM</p>
          <p>10:00 AM - 5:00 PM</p>
          <p>CLOSED</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex h-2/5 w-4/5 items-center">
    <div class="flex text-center justify-center w-1/3"><i class="fa-solid fa-envelope scale-200 text-9xl"></i></div>
    <div class="w-2/3 m-10 font-bold">
      <p class="text-6xl">CONTACT US!</p>
      <div class="flex flex-row my-5">
        <div class="flex flex-col text-lg w-1/2">
          <p>Email</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
          <p>Phone</p>
          <p>Location</p>
        </div>
        <div class="flex flex-col text-lg w-1/2">
          <p>etsbing@binghamton.edu</p>
          <p></p>
          <p>@etsbing</p>
          <p>(607) 777 3877</p>
          <p>Technology Hub 101</p>
        </div>
      </div>
    </div>
  </div>
</div>
