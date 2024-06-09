export default defineNuxtRouteMiddleware((to, from) => {
  const { status, signIn } = useAuth()
  // Return immediately if user is already authenticated
  if (status.value === "authenticated") {
    return
  }

  //   return signIn(undefined, { callbackUrl: to.path }) as ReturnType<
  //     typeof navigateTo
  //   >
})
