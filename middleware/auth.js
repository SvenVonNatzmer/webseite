export default function ({ $auth, redirect }) {
    // Überprüfen, ob der Nutzer eingeloggt ist
    if (!$auth.loggedIn) {
      return redirect('/login'); // Weiterleitung zur Login-Seite
    }
  }