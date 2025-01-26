<template>
  <NuxtLayout name="base" />
</template>

<script setup lang="ts">

useHead({
  title: "Katering Mama Risma — Kelezatan Rumahan di Setiap Hidangan",
  script: [
    { src: "https://kit.fontawesome.com/b026c11a83.js", crossorigin: "anonymous" }
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: 'assets/icons/48x48.png' },
    { rel: 'icon', type: 'image/png', sizes: '72x72', href: 'assets/icons/72x72.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'assets/icons/96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '144x144', href: 'assets/icons/144x144.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'assets/icons/192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'assets/icons/512x512.png' },

    // Apple Touch Icon
    { rel: 'apple-touch-icon', sizes: '48x48', href: 'assets/icons/48x48.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: 'assets/icons/72x72.png' },
    { rel: 'apple-touch-icon', sizes: '96x96', href: 'assets/icons/96x96.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: 'assets/icons/144x144.png' },
    { rel: 'apple-touch-icon', sizes: '192x192', href: 'assets/icons/192x192.png' },
    { rel: 'apple-touch-icon', sizes: '512x512', href: 'assets/icons/512x512.png' },
  ]
})

</script>