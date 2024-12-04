/**export default function ({ $auth, redirect }) {
    // Überprüfen, ob der Nutzer eingeloggt ist
    if (!$auth.loggedIn) {
      return redirect('/login'); // Weiterleitung zur Login-Seite
    }
  }

  */


  export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    if (!user.value) {
     return navigateTo('/login')
    }
    })