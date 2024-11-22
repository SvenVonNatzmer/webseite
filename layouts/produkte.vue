<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
         <!--Quelle: Vorlage Prof. Dr. Kraus und https://www.youtube.com/watch?v=X9ta1grG1j0&list=PL4cUxeGkcC9haQlqdCQyYmL_27TesCGPC&index=6 (Nuxt 3 Crash Course #5 - NuxtLink)-->
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">IT-Beratung Schmeichler</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink class="btn-light" to="/homepage">Homepage</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="btn-light" to="/produkte">Dienstleistungen</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="btn-light" to="/Unternehmen">Unternehmen</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="btn-light" to="/karriere">Karriere</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="btn-light" to="/Partner">Partner</NuxtLink>
                  </li>
                </ul>
            </nav>
        </header>
    
        <!-- Hauptinhalt -->
        <main class="flex-grow container mx-auto p-4">
            <NuxtPage /> <!-- Hier wird der Seiteninhalt gerendert -->
        </main>
    
        <!-- Footer -->
        <footer class="shadow-sm bg-gray-100">
            <nav class="container mx-auto p-4 flex justify-between">
                <div class="font-bold">&copy; 2024 IT-Beratung Schmeichler</div>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink class="btn-light" to="/datenschutz">Datenschutz</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="btn-light" to="/agb">AGB</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="btn-light" to="/kontakt">Kontakt</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="btn-light" to="/impressum">Impressum</NuxtLink>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
    </template>
    

<style scoped>
.router-link-exact-active {
    color: brown;
}
</style>