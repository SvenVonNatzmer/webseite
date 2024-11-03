<template>
    <div>
        <!--Teplate Erstellt von Sven
        Paramenter ausgeben http://localhost:3000/Dienstleistungen/123 zeigt für Beliebige DL die Beschreibung
        -->
        <p>Dienstleistungen Beschreibungen {{ id }}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis nulla minus unde aliquid sapiente placeat voluptas esse 
            laboriosam, aperiam, ipsum enim necessitatibus nihil quam eius saepe exercitationem, mollitia corrupti libero!</p>
    </div>
</template>

<script setup>
// https://www.youtube.com/watch?v=QS8MwC8S4o8&list=PL4cUxeGkcC9haQlqdCQyYmL_27TesCGPC&index=4

// Parameter übergeben 
const { id } = useRoute().params

definePageMeta({
        layout: 'services'
        
    })

</script>
<style scoped>

</style>