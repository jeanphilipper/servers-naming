<template>
  <div class="wrapper container">
    <div class="header">
      <h1>Server name generator</h1>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  margin-top: 100px;

  .content {
    margin-top: 30px;
  }
}
</style>
