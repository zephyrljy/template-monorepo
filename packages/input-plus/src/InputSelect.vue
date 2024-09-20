<template>
  <div
    class="rounded-4px focus-within:outline-1 focus-within:outline outline-offset-1 outline-color-[#1890ff] w-full h-32px border border-color-[#d9d9d9] bg-[#edeef0] relative"
  >
    <input
      v-model="value"
      placeholder="请选择"
      type="input"
      class="px-11px box-border placeholder:text-[#B2B2B4] p-0 border-0 position left-0 right-0 top-0 bottom-0 bg-transparent border-0 h-32px w-full outline-0"
    />

    <div class="max-h-264px"></div>
  </div>
</template>
<script lang="ts" setup>
const key = ref('')
const value = ref('')

const props = defineProps({
  api: {
    type: Function,
    default: () => {}
  },
  defaultApi: {
    type: Function,
    default: () => {}
  }
})

watch(value, (value) => {
  console.log('[ value ] >', value)
})
</script>
<style lang="less" scoped></style>
