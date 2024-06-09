<template>
  <section class="card bg-base-100 card-compact">
    <ElToast :toasts="toasts" :removeToast="removeToast" />

    <div class="card-body">
      <div class="flex justify-between m-2">
        <h1 class="card-title">Data Product</h1>
        <NuxtLink to="/create" class="btn btn-primary btn-sm">Create</NuxtLink>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-zebra bg-base-200/70 table-xs">
          <!-- head -->
          <thead>
            <tr class="text-center">
              <th>ID</th>
              <th>Name</th>
              <th>Desc</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data?.data">
              <th class="line-clamp-2">{{ item.id }}</th>
              <th>{{ item.name }}</th>
              <th>{{ item.description }}</th>
              <th>{{ item.qty }}</th>
              <th>{{ item.price }}</th>
              <th class="gap-2 flex">
                <NuxtLink
                  :to="`/${item.id}/detail`"
                  class="btn btn-square btn-sm btn-info"
                >
                  <IconInfo class="icons" />
                </NuxtLink>

                <NuxtLink
                  :to="`/${item.id}/edit`"
                  class="btn btn-square btn-sm btn-warning"
                >
                  <IconEdit class="icons" />
                </NuxtLink>
                <button
                  @click="
                    () => {
                      onDelete(item.id)
                      refresh()
                    }
                  "
                  class="btn btn-square btn-sm btn-error"
                >
                  <IconDelete class="icons" />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <ElToast :toasts="toasts" :removeToast="removeToast" />
  </section>
</template>

<script lang="ts" setup>
const { headers, onDelete, toasts, removeToast } = useProduct()
const { data, refresh } = await useFetch("/api/product", { headers })
</script>
