

<template>
    <div>
     <header class="shadow-sm big bg-white"> 
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold" >Homepage</NuxtLink>
            <ul class="flex gap-4">
            <li><NuxtLink to="/">Homepage</NuxtLink></li>
            <li><NuxtLink to="/produkte">Services</NuxtLink></li>
            <li><NuxtLink to="/references">Referencen</NuxtLink></li>
            <li><NuxtLink to="/team">Team</NuxtLink></li>
            <li><NuxtLink to="/karriere">Karriere</NuxtLink></li>
            </ul>
     </nav>
     </header>

      <!-- Page Content -->
 <div class="container mx-auto p-4">
 <slot />
 </div>
</div>

<!-- footer -->

<footer class="shadow-sm big bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Homepage</NuxtLink>
        <ul class="flex gap-4">
            <li><NuxtLink to="/impressum">Impressum</NuxtLink></li>
            <li><NuxtLink to="/Datenschutz">Datenschutz</NuxtLink></li>
            <li><NuxtLink to="/Kontakt">Kontakt</NuxtLink></li>

        </ul>
    </nav>
</footer>


</template>


<style scoped>

/*Stylen vom Link der Nav Leiste */
.router-link-exact-active { color: rgb(10, 24, 230); }
</style>