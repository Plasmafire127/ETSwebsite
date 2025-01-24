<script>
  import Separator from '$lib/components/Separator.svelte'; 
  import logo from '$lib/images/ETSLogo.png';
</script>

<Separator/>

<footer class="font-plex-mono font-bold flex flex-col md:flex-row w-full bg-black text-white py-10 px-10 md:px-20 gap-8 md:gap-16">
  <!-- Left Section -->
  <div class="flex flex-col items-center md:items-start md:w-1/3 w-full text-center md:text-left">
    <img src={logo} alt="ETS Logo" class="w-44 h-auto md:w-52 md:h-auto mx-auto md:mx-0"> 
    <p class="text-sm md:text-base font-normal mt-5 mb-4">
      Get in touch with us. We are looking forward to starting a project with you!
    </p>
    <span class="border-t border-gray-500 mt-2 w-full"></span> 
    <div class="flex space-x-4 mt-5 justify-center md:justify-start">
      <a href="https://www.linkedin.com/company/emerging-technology-studio-at-binghamton-university/about/" 
         class="text-xl text-orange hover:text-gray" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.youtube.com/watch?v=-5vYevqc-eg" 
         class="text-xl text-orange hover:text-gray" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="https://www.instagram.com/bing_ets" 
         class="text-xl text-orange hover:text-gray" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>

  <!-- Middle Section -->
  <div class="flex flex-col md:w-1/4 w-full mt-8 md:mt-0 text-center md:text-left justify-start">
    <h2 class="text-lg uppercase mb-2">Contact Us!</h2>
    <span class="border-t border-gray-500 mb-4 w-full"></span> 
    <div class="grid grid-cols-1 gap-2">
      <p class="text-sm md:text-base text-orange">
        <i class="fas fa-map-marker-alt"></i> 
        <a href="https://maps.app.goo.gl/pcWwtbqjBAZX5JJy5" target="_blank" class="hover:underline">
          Technology Hub 101
        </a>
      </p>
      <p class="text-sm md:text-base text-orange">
        <i class="fas fa-phone"></i> 
        <a href="tel:+16077773877" class="hover:underline">(607) 777 3877</a>
      </p>
      <p class="text-sm md:text-base text-orange">
        <i class="fas fa-envelope"></i> 
        <a href="mailto:etsbing@binghamton.edu" class="hover:underline">etsbing@binghamton.edu</a>
      </p>
    </div>
  </div>

  <!-- Right Section -->
  <div class="flex flex-col md:w-1/4 w-full mt-8 md:mt-0 text-center md:text-left justify-start">
    <h2 class="text-lg uppercase mb-2">Opening Hours!</h2>
    <span class="border-t border-gray-500 mb-4 w-full"></span> 
    <div class="grid grid-cols-[auto,auto] gap-x-6 text-orange text-sm md:text-base">
      <p>Mon</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Tues</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Wed</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Thur</p>
      <p>10:00 AM - 06:00 PM</p>
      <p>Fri</p>
      <p>12:00 PM - 05:00 PM</p>
      <p>Sat/Sun</p>
      <p>CLOSED</p>
    </div>
  </div>
</footer>


