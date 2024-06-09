import type { LoginProps, RegisterProps } from "~/types/auth"

export const useSecure = () => {
  const { signIn, status, signOut } = useAuth()

  const register = reactive<RegisterProps>({
    name: "",
    email: "",
    password: "",
    confPass: "",
  })
  const statusRegister = reactive({
    error: ref(),
    loading: false,
  })
  const onRegister = async () => {
    statusRegister.loading = true

    const {
      data,
      error,
      status: res,
    } = await useFetch("/api/auth/register", {
      method: "POST",
      body: register,
    })

    if (!res.value) {
      statusRegister.error = error
    }
    if (res.value) {
      console.log(data)
      console.log(res)
      await navigateTo("/auth/login")
    }
  }

  // Login
  const formLogin = reactive<LoginProps>({
    email: "",
    password: "",
  })

  const onLogin = async () => {
    const result = await signIn("credentials", {
      email: formLogin.email,
      password: formLogin.password,
      redirect: false,
    })
    console.log(result, "page login")
    //@ts-ignore
    if (!result.error) {
      await navigateTo("/")
    }
  }

  // console.log(status, await getSession())
  const onSocial = async (action: string) => {
    await signIn(action, { redirect: false })
  }
  //
  const onLogout = async () => {
    await signOut()
  }
  const isLogin = computed(() => status.value === "authenticated")

  return {
    register,
    onRegister,
    statusRegister,
    onLogout,
    formLogin,
    onLogin,
    onSocial,
    isLogin,
  }
}
