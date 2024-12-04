<script setup>
const supabase = useSupabaseClient()
const router = useRouter()
const email = ref("")
const password = ref(null)
const errorMsg = ref(null)
const successMsg = ref(null)
async function logIn() {
try {
 const {data, error} = await supabase.auth.signInWithPassword({
 email: email.value,
 password: password.value,
 })
 if (error) throw error
 router.push("/backend")
 } catch (error) {
 errorMsg.value = error.message
}
}