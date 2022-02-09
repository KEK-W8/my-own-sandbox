<template>
  <div>
    Background changes its color depends on device screen width
  </div>
</template>

<script lang="ts">

</script>

<style lang="less" scoped>
@import url('~@/assets/style/variables.less');

div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.8em;
  background-size: contain;
  color: #FF6F00;
  @media @mq-sizes[xs] {
    background-color: firebrick;
  }
  @media @mq-sizes[sm] {
    background-color: yellow;
  }
  @media @mq-sizes[md] {
    background-color: green;
  }
  @media @mq-sizes[lg] {
    background-color: purple;
  }
  @media @mq-sizes[xl] {
    background-color: navajowhite;
  }
}
</style>
