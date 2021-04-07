<template>
<div>
  <mainConverter/>
  <appFooter/>
</div>
</template>

<script>
import mainConverter from './components/mainConverter'
import appFooter from './components/appFooter'

export default {
  mounted(){
    console.log("%cMain app loaded👻", "font-size: x-large");
  },
  name: 'App',
  components: {
    mainConverter,
    appFooter
  }
}
</script>

<style>
</style>
