<template>
  <div>
    page1
    <Component1></Component1>
    <Component2></Component2>
  </div>
</template>
<script>
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'
import {controller} from '@/vuetrol/index'

const Page1 = {
  components: {
    Component1,
    Component2
  },
  name: 'Page1',
  mounted() {
    console.log(this)
  }
}
export default controller('Page1')(Page1)
</script>
<style lang="less" scoped>

</style>
