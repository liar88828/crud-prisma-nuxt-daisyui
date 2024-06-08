<template>
  <div class="flex justify-center">
    <section class="card bg-base-100 max-w-lg w-full">
      <div class="card-body">
        <h2 class="card-title">Sign In Your Account</h2>
        <form @submit.prevent="onRegister">
          <label class="form-control">
            <div class="label">
              <span class="label-text">Name</span>
            </div>
            <input
              v-model="register.name"
              type="text"
              placeholder="Enter Your Name..."
              class="input input-bordered"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Email</span>
            </div>
            <input
              v-model="register.email"
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
              v-model="register.password"
              type="text"
              placeholder="Enter Your Password..."
              class="input input-bordered"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Confirm Password</span>
            </div>
            <input
              v-model="register.confPass"
              type="text"
              placeholder="Must be same as Password..."
              class="input input-bordered"
            />
          </label>
          <br />
          <div class="card-actions flex-col w-full">
            <button
              type="submit"
              :class="[
                'btn btn-primary btn-outline w-full',
                statusRegister.loading ? 'btn-disabled' : '',
              ]"
            >
              <span
                v-if="statusRegister.loading"
                class="loading loading-spinner"
              ></span>
              Register
            </button>
            <p>
              Have an account?
              <NuxtLink to="/auth/login" class="link">Login</NuxtLink>
            </p>
          </div>
          <ElDivider title="Or Continue With" />
          <div class="grid grid-cols-2 gap-2">
            <button class="btn btn-primary w-full">Google</button>
            <button class="btn btn-primary w-full">GitHub</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useSecure } from "~/composables/useSecure"

const { onRegister, register, statusRegister } = useSecure()
</script>
