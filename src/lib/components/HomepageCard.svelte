<script>
	import craft from '$lib/images/cricut.png';
  import printer from '$lib/images/printer.jpg';
  import vr from '$lib/images/vr.jpg';

  export let header, motto, one, two, three, link;
  export let image = '';
</script>

<div class="bg-off-white md:px-10 rounded-3xl text-left justify-between w-1/4 h-3/4 py-5 pt-10 flex md:flex-col flex-row">
  <div class="flex flex-col items-center h-fit w-full">
    <img class="border-2 justify-center border-black" alt="thumbnail" src={image}/>
  </div>
    <div>
      <p class="text-4xl">{header}</p>
      <p class="text-2xl italic font-bold text-italic-gray">{motto}</p>
    </div>
    <div>
      <ls class="flex flex-col text-xl px-5">
        <li>
          {one}
        </li>
        <li>
          {two}
        </li>
        <li>
          {three}
        </li>
      </ls>
    </div>
    <div class="flex font-plex-mono text-orange text-xl font-bold bg-nav-purple w-fit rounded-full md:p-2 md:px-4 items-center justify-center">
      {link} &gt;
    </div>
</div>
