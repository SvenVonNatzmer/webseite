<script setup>
const supabase = useSupabaseClient()
const email = ref("")
const password = ref(null)
const errorMsg = ref(null)
const successMsg = ref(null)
async function signUp() {
try {
const {data, error} = await supabase.auth.signUp({
 email: email.value,
 password: password.value,
})
if (error) throw error
 successMsg.value = "Bestätige Deinen Account in der E-Mail"
 errorMsg.value = ""
} catch (error) {
 errorMsg.value = error.message
}
}
</script>