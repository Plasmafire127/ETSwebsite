<script>
    // @ts-ignore
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
import "../app.css";
  </script> 

<!-- src/routes/__layout.svelte -->
<head>
  <link href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
</head>

    <!-- svelte-ignore a11y-media-has-caption -->
  <div class="opacity-30 fixed h-screen w-screen object-cover z-0">
  <video autoplay loop playsinline disablepictureinpicture muted>
      <source src="videos/prusa.mp4" type="video/mp4">
      <tack kind="captions"></tack>
  </video>
  </div>
  <Navbar />
  <slot />

<Footer />