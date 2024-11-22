<template>
  <!--
  Quellenangabe:
  - Das Skript basiert auf den Vorgaben und der Grundlage von Prof. Dr. Christian Krauss, Professor für Wirtschaftsinformatik – insbesondere Web Engineering und Programmierung.
  - Das Grundgerüst wurde von www.w3schools.com bereitgestellt.
  - Anpassungen und Ergänzungen wurden durch chatgpt.com vorgenommen.
  - Weitere Anpassungen und Tests wurden vom Autor Sven von Natzmer durchgeführt.
-->
  
  <div>
    <!-- Produkte-Bereich -->
    <div class="grid grid-cols-4 gap-5" style="margin-top: 20px;">
      <div v-for="p in products" :key="p.id" style="padding: 10px; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <!-- Produktbild anzeigen -->
        <img :src="p.image" alt="Produktbild" style="width: 100%; height: auto; border-radius: 8px;">

        <!-- Produkttitel ohne Link -->
        <h3 style="font-weight: bold;">{{ p.title }}</h3>

        <!-- Produktbeschreibung -->
        <p>{{ p.description }}</p>

        <!-- Produktpreis -->
        <p><strong>Preis: </strong>{{ p.price }}</p>

        <!-- Detaillierte Beschreibung anzeigen, wenn vorhanden -->
        <p v-if="p.detailedDescription"><strong>Details:</strong> {{ p.detailedDescription }}</p>

        <!-- Produktservices anzeigen -->
        <div v-if="p.services.length">
          <strong>Leistungen:</strong>
          <ul>
            <li v-for="service in p.services" :key="service">{{ service }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'produkte',
})

// Produkte-Daten laden
const products = ref([])

onMounted(async () => {
  const { data } = await useFetch('/api/producstsgs')
  products.value = data.value
})
</script>

<style scoped>
h1 {
  font-size: 36px;
  margin-bottom: 20px;
}
p {
  margin: 20px 0;
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style> wo soll das rein?
