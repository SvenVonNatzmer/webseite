<script setup>
definePageMeta({
 middleware: 'auth'
})
const user = ref(useSupabaseUser())
</script>
<template>
<div>
 <h1>Backend</h1>
 <p v-if="user">Hallo {{ user.email }}</p>
 <p>Hier nur Zugang mit Mail und Password</p>
</div>
</template>