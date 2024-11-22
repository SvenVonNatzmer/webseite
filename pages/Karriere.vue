<template>
    <!--
  Quellenangabe:
  - Das Skript basiert auf den Vorgaben und der Grundlage von Prof. Dr. Christian Krauss, Professor für Wirtschaftsinformatik – insbesondere Web Engineering und Programmierung.
  - Das Grundgerüst wurde von www.w3schools.com bereitgestellt.
  - Anpassungen und Ergänzungen wurden durch chatgpt.com vorgenommen.
  - Weitere Anpassungen und Tests wurden vom Autor Sven von Natzmer durchgeführt.
-->
    <div style="font-family: Arial, sans-serif;">
        <h1 style="font-family: Arial, sans-serif; text-align: left;">Karriere</h1>
        <main style="text-align: left;">
            <p>
                Du bist auch begeistert von KI und bist ein Experte auf diesem Gebiet?<br>
                Spannende Projekte und leistungsorientiertes Gehalt, sind dir wichtig?<br>
                Du willst mit uns gemeinsam erfolgreich sein?<br>
                Bewirb dich jetzt und werde Teil unserer Familie!
            </p><br>

            <h2 style="font-size: 24px; font-weight: bold; color: #333; font-family: Arial, sans-serif; text-align: left;">Hier sind unsere Stellenangebote:</h2><br>
            
            <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 40px 0; padding: 20px; background: #fefefe; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: left;">
                <h1 style="font-size: 28px; font-weight: bold; color: #007BFF; margin-bottom: 20px;">Data Scientist (m/w/d)</h1>
                <p style="font-size: 16px; color: #333; line-height: 1.6;">
                    Sie sind ein analytisches Talent, das Daten liebt und innovative KI-Lösungen schaffen möchte? 
                    Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft im Bereich Künstliche Intelligenz!
                </p>
                <hr style="border: none; border-top: 2px solid #007BFF; margin: 20px 0;">

                <h2 style="font-size: 22px; font-weight: bold; color: #007BFF;">Ihre Aufgaben:</h2>
                <ul style="font-size: 16px; color: #555; line-height: 1.8; padding-left: 20px;">
                    <li><strong>Datenanalyse und -modellierung:</strong> Identifikation von Trends und Entwicklung von Prognosemodellen.</li>
                    <li><strong>Machine-Learning-Modelle:</strong> Design und Optimierung von Algorithmen mit Python, R oder ähnlichen Tools.</li>
                    <li><strong>Integration von KI-Lösungen:</strong> Zusammenarbeit mit Entwicklern und IT-Teams zur Implementierung.</li>
                    <li><strong>Visualisierung:</strong> Erstellung aussagekräftiger Dashboards und Berichte.</li>
                </ul>

                <h2 style="font-size: 22px; font-weight: bold; color: #007BFF;">Ihr Profil:</h2>
                <ul style="font-size: 16px; color: #555; line-height: 1.8; padding-left: 20px;">
                    <li><strong>Fachwissen:</strong> Abschluss in Informatik, Mathematik, Statistik oder einem verwandten Bereich.</li>
                    <li><strong>Technische Fähigkeiten:</strong> Erfahrung mit Tools wie TensorFlow, PyTorch, SQL und gängigen Visualisierungstools.</li>
                    <li><strong>Analytisches Denken:</strong> Fähigkeit, komplexe Daten in verständliche Erkenntnisse zu übersetzen.</li>
                    <li><strong>Kommunikation:</strong> Präsentationsfähigkeiten für technische und nicht-technische Stakeholder.</li>
                </ul>

                <h2 style="font-size: 22px; font-weight: bold; color: #007BFF;">Wir bieten:</h2>
                <ul style="font-size: 16px; color: #555; line-height: 1.8; padding-left: 20px;">
                    <li><strong>Flexibilität:</strong> Hybrides Arbeiten zwischen Büro und Remote möglich.</li>
                    <li><strong>Weiterbildung:</strong> Zugang zu Schulungen, Konferenzen und E-Learning-Angeboten.</li>
                    <li><strong>Karrierechancen:</strong> Perspektiven für leitende Positionen im Bereich Data Science.</li>
                    <li><strong>Attraktives Gehalt:</strong> Leistungsorientierte Vergütung mit Zusatzleistungen.</li>
                </ul>
            </div>
        </main>
    </div>

    <div style="font-family: Arial, sans-serif;">
    <h2 style="font-size: 24px; font-weight: bold; color: #333; font-family: Arial, sans-serif; text-align: left;">Bewerbung:</h2>
    <div style="line-height: 1.6; color: #555; text-align: left;">
        <p>Bitte nutzen Sie unser Formular und beantworten Sie alle Fragen.</p>    
    </div>

    <form style="max-width: 600px; margin: 20px 0; padding: 20px; background: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); text-align: left;" 
    @submit.prevent="submitApplication"
    enctype="multipart/form-data">


        <!-- Persönliche Informationen -->
        <label for="fullName" style="font-weight: bold; margin-bottom: 8px; display: block;">Vollständiger Name:</label>
        <input type="text" id="fullName" name="fullName" required placeholder="Ihr Name" style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;">

        <label for="email" style="font-weight: bold; margin-bottom: 8px; display: block;">E-Mail-Adresse:</label>
        <input type="email" id="email" name="email" required placeholder="Ihre E-Mail" style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;">

        <label for="phone" style="font-weight: bold; margin-bottom: 8px; display: block;">Telefonnummer:</label>
        <input type="tel" id="phone" name="phone" required placeholder="Ihre Telefonnummer" style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;">

        <label for="resume" style="font-weight: bold; margin-bottom: 8px; display: block;">Bewerbung und Lebenslauf hochladen:</label>
        <input type="file" id="resume" name="resume" required accept=".pdf,.doc,.docx" style="margin-bottom: 16px;">

        <label for="message" style="font-weight: bold; margin-bottom: 8px; display: block;">Zusätzliche Informationen:</label>
        <textarea id="message" name="message" rows="4" placeholder="Warum sind Sie die perfekte Wahl?" style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;"></textarea>

        <!-- Quiz -->
        <h3 style="font-size: 18px; font-weight: bold; color: #333; margin-top: 20px;">Quiz:</h3>
        <p style="margin-bottom: 16px; color: #555;">Bitte beantworten Sie die folgenden Fragen:</p>

        <label for="question1" style="font-weight: bold; margin-bottom: 8px; display: block;">1. Was motiviert Sie am meisten bei Ihrer Arbeit?</label>
        <textarea id="question1" name="question1" rows="3" required placeholder="Ihre Antwort..." style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;"></textarea>

        <label for="question2" style="font-weight: bold; margin-bottom: 8px; display: block;">2. Wie würden Sie mit einer schwierigen Situation im Team umgehen?</label>
        <textarea id="question2" name="question2" rows="3" required placeholder="Ihre Antwort..." style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;"></textarea>

        <label for="question3" style="font-weight: bold; margin-bottom: 8px; display: block;">3. Welches Ihrer bisherigen Projekte hat Sie besonders stolz gemacht und warum?</label>
        <textarea id="question3" name="question3" rows="3" required placeholder="Ihre Antwort..." style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;"></textarea>

        <button type="submit" style="width: 100%; padding: 10px; background-color: #007BFF; color: #fff; font-size: 16px; border: none; border-radius: 4px; cursor: pointer;">Bewerbung absenden</button>
    </form>
</div>



</template>

<script setup>

import { ref } from "vue";

const submitApplication = async () => {
  try {
    const form = new FormData();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const resume = document.getElementById("resume").files[0];
    const message = document.getElementById("message").value;
    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;
    const question3 = document.getElementById("question3").value;

    // Formularfelder in die FormData einfügen
    form.append("fullName", fullName);
    form.append("email", email);
    form.append("phone", phone);
    form.append("resume", resume);
    form.append("message", message);
    form.append("question1", question1);
    form.append("question2", question2);
    form.append("question3", question3);

    const response = await fetch("/api/submitApplication", {
      method: "POST",
      body: form,
    });

    const result = await response.json();
    if (result.success) {
      alert("Bewerbung erfolgreich eingereicht!");
    } else {
      alert("Fehler beim Einreichen der Bewerbung: " + result.message);
    }
  } catch (error) {
    console.error("Fehler beim Absenden der Bewerbung:", error);
    alert("Ein unerwarteter Fehler ist aufgetreten.");
  }
};




</script>

<style scoped>
h1 {
    margin-bottom: 20px;
    font-size: 36px;
    text-align: left;
}

p {
    margin: 20px 0;
    text-align: left;
}
</style>
