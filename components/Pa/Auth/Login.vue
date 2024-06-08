<template>
  <div class="flex justify-center">
    <section class="card bg-base-100 max-w-lg w-full">
      <div class="card-body">
        <h2 class="card-title">Sign In Your Account</h2>
        <form @submit.prevent="onLogin">
          <label class="form-control">
            <div class="label">
              <span class="label-text">Email</span>
            </div>
            <input
              v-model="formLogin.email"
              type="text"
              placeholder="Enter Your Email..."
              class="input input-bordered"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Password</span>
            </div>
            <input
              v-model="formLogin.password"
              type="text"
              placeholder="Enter Your Password..."
              class="input input-bordered"
            />
          </label>
          <br />
          <div class="card-actions flex-col w-full">
            <button type="submit" class="btn btn-primary btn-outline w-full">
              Login
            </button>
            <p>
              Don't have an account?
              <NuxtLink to="/auth/register" class="link">Register</NuxtLink>
            </p>
          </div>
          <ElDivider title="Or Continue With" />
          <div class="grid grid-cols-2 gap-2">
            <button
              type="button"
              class="btn btn-primary w-full"
              @click="onSocial('google')"
            >
              <IconGoogle class="icons" /> Google
            </button>
            <button
              type="button"
              class="btn btn-primary w-full"
              @click="onSocial('github')"
            >
              <IconGithub class="icons" /> Github
            </button>
            <button
              type="button"
              class="btn btn-primary w-full"
              @click="onLogout"
            >
              <IconGithub class="icons" /> Logout
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { formLogin, onLogin, onLogout, onSocial } = useSecure()
</script>
