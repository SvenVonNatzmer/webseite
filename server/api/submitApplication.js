/** <!--
  Quellenangabe:
  - Das Skript basiert auf den Vorgaben und der Grundlage von Prof. Dr. Christian Krauss, Professor für Wirtschaftsinformatik – insbesondere Web Engineering und Programmierung.
  - Das Grundgerüst wurde von www.w3schools.com bereitgestellt.
  - Anpassungen und Ergänzungen wurden durch chatgpt.com vorgenommen.
  - Weitere Anpassungen und Tests wurden vom Autor Sven von Natzmer durchgeführt.
--> */

export default defineEventHandler(async (event) => {
    try {
      // Eingabedaten aus der Anfrage abrufen
      const body = await readBody(event);
  
      // Beispiel: Daten in einer JSON-Datei speichern (kann durch eine Datenbank ersetzt werden)
      const fs = await import("fs/promises");
      const filePath = "./data/applications.json";
  
      // Alte Daten laden, wenn vorhanden
      let applications = [];
      try {
        const data = await fs.readFile(filePath, "utf-8");
        applications = JSON.parse(data);
      } catch (err) {
        console.log("Erstelle neue Datei für Bewerbungen.");
      }
  
      // Neue Bewerbung hinzufügen
      applications.push(body);
  
      // Daten speichern
      await fs.writeFile(filePath, JSON.stringify(applications, null, 2), "utf-8");
  
      return {
        success: true,
        message: "Bewerbung erfolgreich gespeichert!",
      };
    } catch (error) {
      console.error("Fehler beim Speichern der Bewerbung:", error);
      return {
        success: false,
        message: "Fehler beim Speichern der Bewerbung.",
      };
    }
  });
  