<template>
  <div class="flex flex-col gap-5">
    <section class="card bg-base-300/60">
      <div class="card-body grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://picsum.photos/51"
            alt="Product Image"
            width="800"
            height="800"
            class="rounded-lg w-full h-auto object-cover"
            style="aspect-ratio: 800 / 800; object-fit: cover"
          />
        </div>
        <div class="space-y-4">
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight">
            {{ res?.data?.name }}
          </h1>
          <p class="text-xl">
            {{ res?.data?.description }}
          </p>
          <div class="w-full space-y-5">
            <div class="flex justify-between">
              <p class="font-semibold text-xl">Qty : {{ res?.data?.qty }}</p>
              <p class="font-bold text-2xl">
                Price : {{ getRupiah(res?.data?.price) }}
              </p>
            </div>
            <button class="btn btn-primary w-full">Add To Cart</button>
          </div>
        </div>
      </div>
    </section>

    <section class="card bg-base-300/60">
      <div class="card-body">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">
          Product Specifications
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            class="bg-base-100 p-6 rounded-lg flex gap-7 justify-between sm:justify-start sm:flex-col"
          >
            <div class="text-lg font-semibold mb-2">Dimensions</div>
            <div class="">15" x 11" x 5" (38 x 28 x 12 cm)</div>
          </div>
          <div
            class="bg-base-100 p-6 rounded-lg flex gap-7 justify-between sm:justify-start sm:flex-col"
          >
            <div class="text-lg font-semibold mb-2">Material</div>
            <div class="">Premium full-grain leather</div>
          </div>
          <div
            class="bg-base-100 p-6 rounded-lg flex gap-7 justify-between sm:justify-start sm:flex-col"
          >
            <div class="text-lg font-semibold mb-2">Weight</div>
            <div class="">3.2 lbs (1.45 kg)</div>
          </div>
          <div
            class="bg-base-100 p-6 rounded-lg flex gap-7 justify-between sm:justify-start sm:flex-col"
          >
            <div class="text-lg font-semibold mb-2">Capacity</div>
            <div class="">20 liters</div>
          </div>
          <div
            class="bg-base-100 p-6 rounded-lg flex gap-7 justify-between sm:justify-start sm:flex-col"
          >
            <div class="text-lg font-semibold mb-2">Closure</div>
            <div class="">Zipper</div>
          </div>
          <div
            class="bg-base-100 p-6 rounded-lg flex gap-7 justify-between sm:justify-start sm:flex-col"
          >
            <div class="text-lg font-semibold mb-2">Warranty</div>
            <div class="">Lifetime warranty against defects</div>
          </div>
        </div>
      </div>
    </section>

    <section class="card bg-base-300/60">
      <div class="card-body">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">Related Products</h2>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <Related />
          <Related />
          <Related />
          <Related />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import Related from "./Related.vue"
const headers = useRequestHeaders(["cookie"]) as HeadersInit
const id = useRoute().params.id as string
const { data: res } = await useFetch(`/api/product/${id}`, { headers })
</script>
