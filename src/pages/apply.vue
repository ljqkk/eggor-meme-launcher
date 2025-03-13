<!-- apply for star -->

<template>
  <div class="container">
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
          <div
            class="itemInput"
            v-for="(item, index) in infoObject"
            :key="index"
          >
            <div class="itemInputTitle">
              {{ item.title }}
              <span style="color: #ef4444" v-if="item.isRequired">*</span>
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
              src="../assets/images/earth.png"
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
              <img
                :src="item.imgurl"
                width="14"
                height="14"
                alt=""
                style="object-fit: cover; margin-right: 8px"
              />
              {{ item.title }}
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
              src="../assets/images/icon.png"
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

          <textarea
            maxlength="200"
            class="itemInputTextArea"
            placeholder="请简要介绍您自己（限200字）"
            v-model="rise"
          ></textarea>
          <div style="text-align: left">
            <span id="span_Font_Length">
              {{ rise.length }}
            </span>
            <span>/</span>
            <span>300字</span>
          </div>

          <div class="itemInputTitle" style="margin-top: 24px">代表性经历</div>

          <textarea
            class="itemInputTextArea"
            placeholder="请填写您的代表性经历，如参与过的知名活动/作品等（选填）"
          ></textarea>
        </div>

        <!-- picture -->
        <div style="margin-top: 48px">
          <div class="itemTitle">
            <img
              src="../assets/images/picture.png"
              width="20"
              height="16"
              alt=""
              style="object-fit: cover; margin-right: 8px"
            />
            4.个人照片
          </div>

          <div class="picture" style="margin-top: 24px">
            <div class="picture-icon">
              <img
                src="../assets/images/picturetwo.png"
                alt=""
                width="48"
                height="39"
              />
            </div>
            <div class="picture-one">点击或拖拽上传头像</div>
            <div class="picture-two">支持 JPG、PNG 格式，大小不超过 2MB</div>
          </div>

          <div class="botton" @click="gotoSuccesstip">
            <img
              src="../assets/images/tipstwo.png"
              width="16"
              height="16"
              alt=""
            />
            <div class="botton-text">申请入驻</div>
          </div>
          <div class="tips">提交申请即表示您同意我们的服务条款和隐私政策</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import twitter from '../assets/images/twitter.png';
import Instagram from '../assets/images/Instagram.png';
import TikTok from '../assets/images/TikTok.png';
import YouTube from '../assets/images/YouTube.png';
import weibo from '../assets/images/weibo.png';
import { useRouter } from 'vue-router';

const rise = ref('');

const router = useRouter();
const gotoSuccesstip = () => {
  router.push('/successtip'); // 添加路由跳转
};
// 信息相关对象
const infoObject = reactive([
  {
    title: '姓名',
    placeholder: '请输入你的真实姓名',
    value: '',
    isRequired: true,
  },
  {
    title: '邮箱',
    placeholder: '请输入你的邮箱地址',
    isRequired: true,
    value: '',
  },
  {
    title: '国家',
    placeholder: '请选择你的国家',
    isRequired: true,
    value: '',
  },
  {
    title: '手机号',
    placeholder: '请输入你的手机号（选填）',
    value: '',
    isRequired: false,
  },
  {
    title: '地址',
    placeholder: '请输入你的详细地址（选填）',
    value: '',
    isRequired: false,
  },
]);

// 社交媒体相关信息
const socialMediaInfo = reactive([
  {
    title: 'twitter',
    placeholder: '请输入你的twitter主页链接',
    value: '',
    imgurl: twitter,
  },
  {
    title: 'Instagram',
    placeholder: '请输入你的Instagram主页链接',
    value: '',
    imgurl: Instagram,
  },
  {
    title: 'YouTube',
    placeholder: '请输入你的YouTube主页链接',
    value: '',
    imgurl: YouTube,
  },
  {
    title: 'TikTok',
    placeholder: '请输入你的TikTok主页链接',
    value: '',
    imgurl: TikTok,
  },
  {
    title: '微博',
    placeholder: '请输入你的微博主页链接',
    value: '',
    imgurl: weibo,
  },
]);

const collectInfoValue = (arr) => {
  return arr.map((item) => item.value);
};
</script>

<style scoped lang="scss">
.container {
  padding: 48px 0;
  background-color: #f9fafb;
}
.wrapper {
  margin: 0 auto;
  width: 768px;
  height: fit-content;
  border-radius: 12px;
  padding: 48px;
  box-shadow: 0 10px 15px -3px #0000001a;
  background-color: #fff;
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
  text-align: center;
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
  padding: 10px 0 10px 20px;
  width: 100%;
  resize: none;
  outline: none;
  box-sizing: border-box;
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
  display: flex;
  align-items: center;
}
.itemInputInput {
  box-sizing: border-box;
  width: 100%;
  margin-top: 8px;
  height: 48px;
  outline: none;
  padding-left: 20px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

.picture {
  width: 100%;
  height: 184px;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.picture-one {
  margin-top: 20px;
  font-size: 16px;
  color: #4b5563;
}
.picture-two {
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
}
.botton {
  margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  background-color: #ff8d0d;
  color: #fff;
  gap: 8px;
}
.tips {
  margin-top: 24px;
  text-align: center;
  color: #6b7280;
}
</style>
