<template>
    <!--
  Quellenangabe:
  - Das Skript basiert auf den Vorgaben und der Grundlage von Prof. Dr. Christian Krauss, Professor für Wirtschaftsinformatik – insbesondere Web Engineering und Programmierung.
  - Das Grundgerüst wurde von www.w3schools.com bereitgestellt.
  - Anpassungen und Ergänzungen wurden durch chatgpt.com vorgenommen.
  - Weitere Anpassungen und Tests wurden vom Autor Sven von Natzmer durchgeführt.
-->
    <div>
        <p>Details für Dienstleistungen {{ id }}</p>
        <p>Hier finden Sie eine genaue Beschreibung</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped>
h1 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>
