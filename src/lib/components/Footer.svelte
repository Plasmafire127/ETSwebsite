<script>
  import Separator from '$lib/components/Separator.svelte';
</script>

<Separator/>

<footer class="font-plex-mono flex md:flex-row flex-col md:h-1/2 w-full text-white">
    <div class="flex md:w-1/2 w-full">
      <div class="md:flex text-center justify-center w-1/3 hidden items-center"><i class="fa-solid fa-calendar-days scale-150 text-9xl"></i></div>
      <div class="md:w-2/3 w-full md:m-10 m-5 font-bold">
        <p class="md:text-6xl text-3xl">HOURS</p>
        <div class="flex font-normal flex-row md:my-5">
          <div class="flex flex-col md:text-lg text-base w-1/3">
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Weekends</p>
          </div>
          <div class="flex flex-col md:text-lg text-base w-2/3">
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
    <div class="flex md:w-1/2 w-full">
      <div class="md:flex text-center justify-center w-1/3 hidden items-center"><i class="fa-solid fa-envelope scale-150 text-9xl"></i></div>
      <div class="md:w-2/3 w-full md:m-10 m-5 font-bold">
        <p class="md:text-6xl text-3xl">CONTACT US!</p>
        <div class="flex flex-row md:my-5">
          <div class="flex flex-col md:text-lg text-base w-1/3">
            <p>Email</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Phone</p>
            <p>Location</p>
          
          </div>
          <div class="flex flex-col md:text-lg text-base w-2/3">
            <p>etsbing@binghamton.edu</p>
            <p>need link</p>
            <p>@etsbing</p>
            <p>(607) 777 3877</p>
            <p>Technology Hub 101</p>
          </div>
        </div>
      </div>
    </div>
</footer>
  