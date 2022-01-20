<template>
  <div class="container">
    <at-input
      v-model="name"
      placeholder="Server name"
      size="large"
      icon="link"
    ></at-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    }
  },
  mounted() {
    console.log("mounted")
  }
}
</script>