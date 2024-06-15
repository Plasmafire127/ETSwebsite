<script>
    import Navbar from "$lib/components/Navbar.svelte";
import "../app.css";
  </script> 

<!-- src/routes/__layout.svelte -->
<head>
  <link href="/node_modules/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
</head>

  <Navbar />
  <slot />