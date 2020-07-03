<template>
    <div class="header">
        {{ userName }}
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    userName: String
  }
}
</script>

<style>
.header {
    width: 100%;
    height: 20px;
    min-width: 400px;
    padding: 16px;
    font-size: 14px;
    background: #24292e;
    color: #42b983;
    border-bottom: 1px solid #1f2d3d;
    line-height: 1.5;
}
</style>
