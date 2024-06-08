<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <IconTrolly class="w-5 h-5" />
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </div>

        <div
          tabindex="0"
          class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <IconPeople class="w-5 h-5" />
        </div>

        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box"
        >
          <li v-if="!isLogin">
            <NuxtLink to="/auth/login">Login</NuxtLink>
          </li>
          <li v-if="!isLogin">
            <NuxtLink to="/auth/register">Register</NuxtLink>
          </li>
          <li v-if="isLogin">
            <button @click="onLogout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { isLogin, onLogout } = useSecure()
</script>
