<template>
 <div class="container">
  <div class="wrapper">
    <img width="64" height="64" loading="eager" src="../assets/images/tips.png" class="icon"></img>
    <div class="title">提交成功</div>
    <div class="subtitle">我们的工作人员会尽快与您联系。请确保您的联系方式畅通，以便完成后续审核。</div>
  </div>
 </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.container{
  height: 90vh;
  width: 100vw;
  background-color: #f9fafb;
  padding-top: 48px;
}
.wrapper {
    width: 768px;
    height: 216px;
    margin: 0 auto;
    box-shadow: 0 10px 15px -3px #0000001A;
    border-radius: 12px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 12px 48px;
    text-align: center;
}

.title {
    font-size: 36px;
    line-height: 40px;
    color: #111827;
    margin-top: 24px;
}
.subtitle {
    color: #4B5563;
    margin-top: 12px;
    font-size: 16px;
    line-height: 24px;
}
</style>


