<template>
  <div>
    component4
    <button @click="add">+ 1</button>
    <button @click="minus">- 1</button>
    <button @click="addIfOdd">add if odd</button>
  </div>
</template>
<script>
import store from '@/vuetrol/index'
const cm3 = store.get('cm3')

export default {
  name: 'Component4',
  methods: {
    add() {
      cm3().add()
    },
    minus() {
      cm3().minus()
    },
    addIfOdd() {
      cm3().addIfOdd()
    }
  }
}
</script>
