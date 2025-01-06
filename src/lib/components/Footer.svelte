<script>
  import Separator from '$lib/components/Separator.svelte'; 
</script>

<Separator/>
<footer class="font-plex-mono font-bold flex flex-col md:flex-row w-full bg-black text-white py-10 px-20 gap-20">

  <!-- Left Section -->
  <div class="flex flex-col md:w-1/3 w-full justify-center items-center md:items-start">
    <img src="src/lib/images/ETSLogo.png" alt="ETS Logo" class="w-auto h-auto"> 
    <p class="text-base font-normal mt-5 text-center md:text-left mb-4">Get in touch with us. We are looking forward to starting a project with you!</p>
    <span class="border-t border-gray-500 mt-2 w-full"></span> 
    <div class="flex space-x-4 mt-5">
      <a href="https://www.linkedin.com/company/emerging-technology-studio-at-binghamton-university/about/" 
      class="text-xl text-orange hover:text-gray">
      <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.youtube.com/watch?v=-5vYevqc-eg" 
          class="text-xl text-orange hover:text-gray">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="https://www.instagram.com/bing_ets" 
          class="text-xl text-orange hover:text-gray">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>

  <!-- Middle Section -->
  <div class="flex flex-col md:w-1/3 w-full mt-8 md:mt-0">
    <h2 class="text-lg uppercase mb-4 flex flex-col">
      Contact Us!
      <span class="border-t border-gray-500 mt-2 w-full"></span> 
    </h2>
    <p class="text-base text-orange">
      <i class="fas fa-map-marker-alt"></i> 
      <a href="https://maps.app.goo.gl/pcWwtbqjBAZX5JJy5" target="_blank" class="hover:underline">
        Technology Hub 101
      </a>
    </p>
    <p class="mt-2 text-base text-orange">
      <i class="fas fa-phone"></i> 
      <a href="tel:+16077773877" class="hover:underline">(607) 777 3877</a>
    </p>
    <p class="mt-2 text-base text-orange">
      <i class="fas fa-envelope"></i> 
      <a href="mailto:etsbing@binghamton.edu" class="hover:underline">etsbing@binghamton.edu</a>
    </p>
  </div>

  <!-- Right Section -->
  <div class="flex flex-col md:w-1/3 w-full mt-8 md:mt-0">
    <h2 class="text-lg uppercase mb-4 flex flex-col">
      Opening Hours!
      <span class="border-t border-gray-500 mt-2 w-full"></span> 
    </h2>
    <div class="grid grid-cols-2 gap-x-2 text-orange text-base">
      <p>Mon</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Tues</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Wed</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Thur</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Fri</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Sat/Sun</p>
      <p>CLOSED</p>
    </div>
  </div>
</footer>
