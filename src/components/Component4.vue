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
const Component3 = store.get('Page1_Component2_Component3')

export default {
  name: 'Component4',
  methods: {
    add() {
      Component3().add()
    },
    minus() {
      Component3().minus()
    },
    addIfOdd() {
      Component3().addIfOdd()
    }
  }
}
</script>
