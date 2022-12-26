export const Signup = () => {
    const Navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
        }) 
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage);
        })
    }
   return (
    <main>
        <section>
            <div>
                <div></div>
            </div>
        </section>
    </main>
   )
}