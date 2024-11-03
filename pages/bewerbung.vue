<!-- Datei: pages/bewerbung.vue -->
<template>
  <div>
    <h1>Bewerbungsformular</h1>
    <form action="/submit" method="post">
      <!-- Kontaktdaten -->
      <h2>Kontaktdaten</h2>
      <p>Bitte tragen Sie hier Ihre Kontaktdaten ein.</p>
      <label for="fname">Vorname:</label><br>
      <input type="text" id="fname" name="fname" required><br>
      <label for="lname">Nachname:</label><br>
      <input type="text" id="lname" name="lname" required><br>
      <label for="geburtsdatum">Geburtsdatum:</label><br>
      <input type="date" id="geburtsdatum" name="geburtsdatum" required><br>

      <label for="street">Straße:</label><br>
      <input type="text" id="street" name="street" required><br>
      <label for="hausenumber">Hausnummer:</label><br>
      <input type="text" id="hausenumber" name="hausenumber" required><br><br>

      <!-- Qualifikationen -->
      <h2>Qualifikationen</h2>
      <p>Bitte tragen Sie hier Ihre Qualifikationen ein.</p>
      <label for="abschluss">Höchster Abschluss:</label><br>
      <select id="abschluss" name="abschluss" required>
        <option value="">Bitte wählen</option>
        <option value="hauptschule">Hauptschule</option>
        <option value="realschule">Realschule</option>
        <option value="gymnasium">Gymnasium</option>
        <option value="berufsausbildung">Berufsausbildung</option>
        <option value="studium">Studium</option>
        <option value="master">Master</option>
        <option value="doktor">Doktor</option>
      </select><br><br>

      <label for="weitereabschluss">Titel vom Abschluss:</label><br>
      <input type="text" id="weitereabschluss" name="weitereabschluss"><br><br>
      <label for="weitereabschluss2">Weitere Qualifikationen:</label><br>
      <input type="text" id="weitereabschluss2" name="weitereabschluss2"><br><br>

      <!-- Referenzen -->
      <h2>Referenzen</h2>
      <p>Bitte tragen Sie hier Ihre Referenzen ein.</p>
      <label for="Referenzen">Name der Firma:</label><br>
      <input type="text" id="Referenzen" name="Referenzen"><br><br>
      <label for="Projekt">Name vom Projekt:</label><br>
      <input type="text" id="Projekt" name="Projekt"><br>

      <!-- Motivation -->
      <h2>Motivation</h2>
      <p>Bitte tragen Sie hier die Gründe für Ihre Bewerbung ein.</p>
      <textarea name="message" style="width:100%; height:200px;" required></textarea><br>

      <!-- Wissen-Bewertung -->
      <h2>Bewerten Sie Ihr Wissen</h2>
      <table>
        <tr>
          <th>Frage</th>
          <th>Stimme voll zu</th>
          <th>Stimme zu</th>
          <th>Neutral</th>
          <th>Stimme nicht zu</th>
          <th>Stimme überhaupt nicht zu</th>
        </tr>
        <!-- Beispiel-Frage -->
        <tr>
          <td>Ich habe Erfahrung mit agilen Entwicklungsmethoden (z.B. Scrum, Kanban).</td>
          <td><input type="radio" name="q1" value="5" required></td>
          <td><input type="radio" name="q1" value="4"></td>
          <td><input type="radio" name="q1" value="3"></td>
          <td><input type="radio" name="q1" value="2"></td>
          <td><input type="radio" name="q1" value="1"></td>
        </tr>
      </table>

      <!-- Vertrauenserklärung -->
      <h2>Vertrauenserklärung</h2>
      <p>Bitte bestätigen Sie, dass wir Ihre Daten zu Bewerbungszwecken verarbeiten dürfen.</p>
      <label for="Verarbeitung">
        <input type="checkbox" id="Verarbeitung" name="Verarbeitung" value="Ja" required> Ich stimme zu
      </label><br><br>

      <input type="submit" value="Bewerbung absenden">
      
    </form>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'default'
  })
</script>