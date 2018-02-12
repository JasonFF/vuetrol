<template>
  <div>
    component3 {{index}}
  </div>
</template>
<script>
export default {
  name: 'Component3',
  data() {
    return{
      index: 0
    }
  },
  methods: {
    add() {
      this.index++
    },
    minus() {
      this.index--
    },
    addIfOdd() {
      if (this.index%2 == 1) {
        this.index++
      }
    }
  }
}
</script>
