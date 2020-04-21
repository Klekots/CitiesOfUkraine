<template>
  <header>
    <div>
      <h2>Сортування міст України</h2>
      <p>тестове завдання від kover</p>
    </div>

    <div class="img-wrap">
      <img src="../assets/images/logo.svg" alt="Kover">
    </div>

  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  header{
    width:100%;
    display: flex;
    align-items: center;
  }
  .img-wrap{
    margin-left: auto;
  }
  img {
    width: 100%;
  }
</style>