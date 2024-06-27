<script>
    export let logo, text, href,color;
</script>
<a href={href} class="flex {color} rounded-xl h-full w-full md:space-x-5 items-center md:text-4xl text-sm font-bold text-black md:p-5 p-2 hover:scale-105 transition-transform duration-300 ease-in-out transform">
    <i class={logo}></i> 
    <p>{text}</p>
</a>

