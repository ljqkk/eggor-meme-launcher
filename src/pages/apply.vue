<!-- apply for star -->

<template>
  <div class="wrapper">
    <div class="title">申请成为名人</div>
    <div class="subTitle">
      欢迎加入 Eggor！请填写以下信息，我们的工作人员会尽快与您联系。
      请确保您的联系方式畅通，以便完成后续审核。
    </div>

    <div class="line"></div>
    <div class="contentWrapper">
      <!-- personInfo -->
      <div>
        <div class="itemTitle">
          <img
            src="../assets/images/person.png"
            width="20"
            height="20"
            alt=""
            style="object-fit: cover; margin-right: 8px"
          />
          1.个人信息
        </div>
        <div class="itemInput" v-for="(item, index) in infoObject" :key="index">
          <div class="itemInputTitle">
            {{ item.title }}
            <span style="color: #ef4444">*</span>
          </div>
          <input
            class="itemInputInput"
            type="text"
            :placeholder="item.placeholder"
            v-model="item.value"
          />
        </div>
      </div>

      <!-- socialMediaInfo -->
      <div style="margin-top: 48px">
        <div class="itemTitle">
          <img
            src="../assets/images/person.png"
            width="20"
            height="20"
            alt=""
            style="object-fit: cover; margin-right: 8px"
          />
          2.社交媒体信息
        </div>

        <div class="itemTitleTips">
          请填写至少 2 个社交媒体链接，以便我们更好地了解您的影响力
        </div>

        <div
          class="itemInput"
          v-for="(item, index) in socialMediaInfo"
          :key="index"
        >
          <div class="itemInputTitle">
            {{ item.title }}
            <span style="color: #ef4444">*</span>
          </div>
          <input
            class="itemInputInput"
            type="text"
            :placeholder="item.placeholder"
            v-model="item.value"
          />
        </div>
      </div>

      <!-- personIntroduce -->
      <div style="margin-top: 48px">
        <div class="itemTitle">
          <img
            src="../assets/images/person.png"
            width="20"
            height="20"
            alt=""
            style="object-fit: cover; margin-right: 8px"
          />
          3.个人简介
        </div>
        <div class="itemInputTitle" style="margin-top: 24px">
          个人介绍
          <span style="color: #ef4444">*</span>
        </div>

        <textarea class="itemInputTextArea"></textarea>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

// 信息相关对象
const infoObject = reactive([
  {
    title: '姓名',
    placeholder: '请输入你的真实姓名',
    value: '',
  },
  {
    title: '邮箱',
    placeholder: '请输入你的邮箱地址',
    value: '',
  },
  {
    title: '国家',
    placeholder: '请选择你的国家',
    value: '',
  },
  {
    title: '手机号',
    placeholder: '请输入你的手机号',
    value: '',
  },
  {
    title: '地址',
    placeholder: '请输入你的地址',
    value: '',
  },
]);

// 社交媒体相关信息
const socialMediaInfo = reactive([
  {
    title: 'twitter',
    placeholder: '请输入你的twitter主页链接',
    value: '',
  },
  {
    title: 'Instagram',
    placeholder: '请输入你的Instagram主页链接',
    value: '',
  },
  {
    title: 'YouTube',
    placeholder: '请输入你的YouTube主页链接',
    value: '',
  },
  {
    title: 'TikTok',
    placeholder: '请输入你的TikTok主页链接',
    value: '',
  },
  {
    title: '微博',
    placeholder: '请输入你的微博主页链接',
    value: '',
  },
]);

const collectInfoValue = (arr) => {
  return arr.map((item) => item.value);
};
</script>

<style scoped lang="scss">
.wrapper {
  margin: 48px auto;
  width: 768px;
  height: fit-content;
  border-radius: 12px;
  padding: 48px;
}

.line {
  margin-top: 48px;
  width: 100%;
  height: 8px;
  background-color: #f3f4f6;
}
.title {
  text-align: center;
  font-size: 36px;
  line-height: 40px;
  color: #111827;
}
.subTitle {
  margin-top: 12px;
  font-size: 16px;
  line-height: 24px;
  color: #4b5563;
}
.contentWrapper {
  margin-top: 48px;
}

.itemTitle {
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 28px;
  color: #111827;
}
.itemInput {
  margin-top: 24px;
}
.itemInputTextArea {
  margin-top: 8px;
  border-radius: 8px;
  height: 128px;
  border: 1px solid #d1d5db;
  width: 100%;
}

.itemTitleTips {
  color: #6b7280;
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
}
.itemInputTitle {
  font-size: 14px;
  line-height: 20px;
}
.itemInputInput {
  width: 100%;
  margin-top: 8px;
  height: 48px;
  outline: none;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
</style>
