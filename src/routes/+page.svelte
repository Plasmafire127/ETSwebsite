<script>
	import craft from '$lib/images/cricut.png';
  import printer from '$lib/images/printer.jpg';
  import vr from '$lib/images/vr.jpg';
</script>


<div class="font-plex-mono flex flex-col items-center justify-center h-screen text-center text-orange">
  <p class="mt-10 text-4xl font-bold">
    Welcome to the...
  </p>
  <p class="font-space-grotesk font-bold text-7xl">
    Emerging Technology Studio!
  </p>
  <p class="mt-40 text-4xl font-bold text-green">
    Binghamton University's
  </p>
  <p class="mt-2 text-4xl font-bold">
    Premier Makerspace.
  </p>
  <div class="mt-5 font-plex-mono text-2xl font-bold bg-nav-purple rounded-full w-auto h-auto py-2 px-6">
    Get Started >
  </div>
</div>

<div class="flex justify-center">
  <hr class="border-white w-11/12">
</div>

<div class="font-plex-mono flex flex-col h-screen text-orange">
  <p class="text-white text-6xl font-bold mx-10 mt-32">
    OUR SERVICES
  </p>
  <div class="flex flex-row justify-center h-screen space-x-20 items-center mx-10 text-black font-bold">
    <div class="bg-off-white rounded-3xl text-center w-1/4 h-3/4 content-center flex flex-col justify-center">
      <img class="items-center mx-10 h-1/3 border-2 border-black" alt="printing" src={printer}/>
      <div class="my-5 mx-10 h-1/2 text-left space-y-5">
        <p class="text-4xl">3D Printing</p>
        <p class="text-2xl italic font-bold text-italic-gray">Think it. Print it.</p>
        <div>
          <ls class="text-xl">
            <li>
              PLA Printing
            </li>
            <li>
              Resin Printing
            </li>
            <li>
              Multi-color Printing
            </li>
          </ls>
      </div>
      <div class="font-plex-mono text-orange text-xl font-bold bg-nav-purple w-fit rounded-full p-2 px-4 content-center">
        Print Now! >
      </div>
      </div>
    </div>
    <div class="bg-off-white rounded-3xl text-center w-1/4 h-3/4 content-center flex flex-col justify-center">
      <img class="items-center mx-10 h-1/3 border-2 border-black" alt="crafting" src={craft}/>
      <div class="my-5 mx-10 h-1/2 text-left space-y-5">
        <p class="text-4xl">2D Crafts</p>
        <p class="text-2xl italic font-bold text-italic-gray">Craft, Cut, Create!</p>
        <div>
          <ls class="text-xl">
            <li>
              Cricut
            </li>
            <li>
              Stickers & Iron-on
            </li>
            <li>
              CardStock, Vinyl, etc.
            </li>
          </ls>
      </div>
      <div class="font-plex-mono text-orange text-xl font-bold bg-nav-purple w-fit rounded-full p-2 px-4 content-center">
        Craft Now! >
      </div>
      </div>
    </div>
    <div class="bg-off-white rounded-3xl text-center w-1/4 h-3/4 content-center flex flex-col justify-center">
      <img class="items-center mx-10 h-1/3 border-2 border-black" alt="Virtual Reality" src={vr}/>
      <div class="my-5 mx-10 h-1/2 text-left space-y-5">
        <p class="text-4xl">Technology</p>
        <p class="text-2xl italic font-bold text-italic-gray">Immersive Experiences.</p>
        <div>
          <ls class="text-xl">
            <li>
              Virtual Reality (VR/AR)
            </li>
            <li>
              360&#176; Media and Scanning
            </li>
            <li>
              Adobe Software
            </li>
          </ls>
      </div>
      <div class="font-plex-mono text-orange text-xl font-bold bg-nav-purple w-fit rounded-full p-2 px-4 content-center">
        Explore Now! >
      </div>
      </div>
    </div>
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
