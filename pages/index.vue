<template>
  <!--
  Quellenangabe:
  - Das Skript basiert auf den Vorgaben und der Grundlage von Prof. Dr. Christian Krauss, Professor für Wirtschaftsinformatik – insbesondere Web Engineering und Programmierung.
  - Das Grundgerüst wurde von www.w3schools.com bereitgestellt.
  - Anpassungen und Ergänzungen wurden durch chatgpt.com vorgenommen.
  - Weitere Anpassungen und Tests wurden vom Autor Sven von Natzmer durchgeführt.
-->
    <div class="homepage">
      <h1 class="title">Willkommen bei der Homepage</h1>
      <main>
        <p class="intro-text">
          Wir sind Ihre Experten für IT-Beratung und die Integration von KI-Tools in Ihre Geschäftsprozesse.
          Unsere Mission ist es, Ihnen dabei zu helfen, durch den Einsatz modernster KI-Technologien effizienter, agiler und innovativer zu werden.
          Entdecken Sie mit uns, wie künstliche Intelligenz Ihr Unternehmen auf das nächste Level bringen kann.
        </p>
  
        <div class="container-grid">
          <div class="container-item">
            <img src="/static/images/Textgenerierung.jpg" alt="Analyse Bild" class="container-image" />
            <p class="container-text">Beratung zu Textgenerierung & Sprachverarbeitung</p>
          </div>
          <div class="container-item">
            <img src="/static/images/Bildgenerierung.jpg" alt="Analyse Bild" class="container-image" />
            <p class="container-text">Bildgenerierung & Designautomatisierung</p>
          </div>
          <div class="container-item">
            <img src="/static/images/Analyse.jpg" alt="Analyse Bild" class="container-image" />
            <p class="container-text">Datenanalyse & KI-gestützte Entscheidungsfindung</p>
          </div>
          <div class="container-item">
            <img src="/static/images/Audio.jpg" alt="Analyse Bild" class="container-image" />
            <p class="container-text">Sprach- und Audioverarbeitung 4</p>
          </div>
          <div class="container-item">
            <img src="/static/images/code.jpg" alt="Analyse Bild" class="container-image" />
            <p class="container-text">Softwareentwicklung & Codeoptimierung</p>
          </div>
          <div class="container-item">
            <img src="/static/images/schule.jpg" alt="Analyse Bild" class="container-image" />
            <p class="container-text">Schulungen & Weiterbildungen</p>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  // Das Setup-Skript bleibt unverändert
  </script>
  
  <style scoped>
  .homepage {
    font-family: 'Arial', sans-serif;
    color: #333;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .title {
    font-size: 2.5rem;
    color: #222;
    margin-bottom: 20px;
  }
  
  .intro-text {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #555;
  }
  
  /* Grid-Layout für die Container */
  .container-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
  
  .container-item {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .container-item:hover {
    transform: translateY(-5px);
  }
  
  .container-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .container-text {
    font-size: 1rem;
    color: #444;
  }
  
  @media (max-width: 768px) {
    .container-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .container-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
  