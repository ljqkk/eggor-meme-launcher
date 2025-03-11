<template>
  <div>
    {{ $t('a') }}
  </div>

  <div @click="handleClick('zh')">切换中文</div>
  <div @click="handleClick('en')">切换英文</div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const handleClick = (val: string) => {
  locale.value = val;
};
</script>

<style lang="scss" scoped></style>
