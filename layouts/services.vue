<template>
    <div>
     <header class="shadow-sm big bg-white"> 
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold" >Homepage</NuxtLink>
            <ul class="flex gap-4">
            <li><NuxtLink to="/">Hampage</NuxtLink></li>
            <li><NuxtLink to="/produkte">Services</NuxtLink></li>
            <li><NuxtLink to="/impressum">Referencen</NuxtLink></li>
            <li><NuxtLink to="/impressum">Team</NuxtLink></li>
            <li><NuxtLink to="/impressum">Karriere</NuxtLink></li>
            </ul>
     </nav>
     </header>

      <!-- Page Content -->
 <div class="container mx-auto p-4">
 <slot />
 </div>
</div>
</template>

<style scoped>
/*Stylen vom Link der Nav Leiste */
.router-link-exact-active { color: brown; }
</style>