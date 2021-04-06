<template>
  <mainConverter/>
</template>

<script>
import mainConverter from './components/mainConverter'

export default {
  mounted(){
    console.log("%cMain app loaded👻", "font-size: x-large");
  },
  name: 'App',
  components: {
    mainConverter
  }
}
</script>

<style>
</style>
