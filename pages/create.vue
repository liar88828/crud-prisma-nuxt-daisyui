<template>
  <div class="flex justify-center">
    <section class="card bg-base-100 max-w-lg w-full">
      <div class="card-body">
        <h2 class="card-title">Create Your Product</h2>
        <form @submit.prevent="onCreate">
          <label class="form-control">
            <div class="label">
              <span class="label-text">Name</span>
            </div>
            <input
              v-model="form.name"
              type="text"
              placeholder="Enter Name Product..."
              class="input input-bordered"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Price</span>
            </div>
            <input
              v-model="form.price"
              type="number"
              placeholder="Enter Price..."
              class="input input-bordered"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Qty</span>
            </div>
            <input
              v-model="form.qty"
              type="number"
              placeholder="Enter Quantity..."
              class="input input-bordered"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Description</span>
            </div>
            <textarea
              v-model="form.description"
              type="text"
              class="textarea textarea-bordered"
            ></textarea>
          </label>
          <br />
          <div class="card-actions flex-col w-full">
            <button
              type="submit"
              :class="[
                'btn btn-primary btn-outline w-full',
                onLoad.loading ? 'btn-disabled' : '',
              ]"
            >
              <span
                v-if="onLoad.loading"
                class="loading loading-spinner"
              ></span>
              Create
            </button>
          </div>
          <ElDivider title="Or Continue With" />
          <NuxtLink to="/" class="btn btn-outline w-full">Back</NuxtLink>
        </form>
      </div>
    </section>
    <ElToast :toasts="toasts" :removeToast="removeToast" />
  </div>
</template>

<script lang="ts" setup>
const { form, onLoad, toasts, onCreate, removeToast } = useProduct()
</script>
