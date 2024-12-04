<template>
    <div class="min-h-screen flex flex-col">
        <!-- Header -->
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
                    <li v-if="user">
                        <button class="btn" @click="logOut">Logout</button>
                    </li>
                    <li v-if="!user">
                        <NuxtLink class="btn" to="/login">Login</NuxtLink>
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

<script>
export default {
    data() {
        return {
            user: null, // Zustand des Benutzers (null = nicht eingeloggt)
        };
    },
    methods: {
        logOut() {
            this.user = null; // Benutzer ausloggen
            // Weitere Logout-Logik wie das Entfernen von Tokens hinzufügen
        },
    },
};
</script>

<style scoped>
.router-link-exact-active {
    color: brown;
}
</style>
