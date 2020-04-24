<template>
  <header>
    <div>
      <h1>Сортування міст України</h1>
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
    justify-content: flex-end;
    margin: 42px 8px;
  }
  h1{
    font-size: 2.15em;
    margin-bottom: 10px;

  }
  p{
    font-size: 1.25em;
  }
  .img-wrap{
    margin-left: auto;
  }
  img {
    width: 100%;
  }
</style>