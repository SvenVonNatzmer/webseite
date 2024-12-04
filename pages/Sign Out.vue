<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()
async function logOut() {
try {
const { error } = await supabase.auth.signOut()
if (error) throw error
 router.push("/login")
} catch (error) {
 console.log(error.message)
}
}
</script>