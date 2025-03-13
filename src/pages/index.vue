<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  padding-left: 50px;

  .left {
    width: 980px;
    height: 208px;
    border-radius: 22px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    background: url('../assets/images/banner.png') no-repeat,
      linear-gradient(to right, rgba(244, 127, 52, 0), rgba(191, 65, 0, 1));
    background-size: cover, auto;
    background-blend-mode: overlay;

    .textone {
      font-size: 32px;
      margin-bottom: 5px;
      margin-right: 30px;
    }

    .texttwo {
      margin-right: 30px;
      margin-bottom: 30px;
    }
  }

  .right {
    width: 160px;
    height: 48px;
    background-color: #ff8d0d;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
}

.dynamic {
  padding-left: 50px;
  margin-top: 24px;

  .title {
    color: #ff8d0d;
    font-size: 60px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .text {
    color: #4b5563;
  }

  .value {
    display: flex;
    gap: 20px;
    margin-top: 20px;

    .value-item {
      width: 640px;
      height: 114px;
      padding: 0 20px;
      border-radius: 12px;
      border: 2px solid #f3f4f6;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .money {
        font-size: 24px;
        font-weight: 500;
      }

      .right {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        background-color: #ff8d0d33;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}

.post {
  display: flex;
}

.search {
  margin-left: 24px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  .search-right {
    display: flex;
    gap: 10px;
    .search-right-icon {
      background-color: #f9fafb;
      width: 38px;
      height: 38px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .search-left {
    height: 48px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    justify-content: start;
    gap: 16px;
    .search-left-search {
      display: flex;
      align-items: center;
      background-color: #f9fafb;
      width: 480px;
      gap: 10px;
      padding-left: 10px;
      border-radius: 8px;
      input {
        outline: none;
        border: none;
      }
    }
    .search-left-center {
      width: 200px;
      display: flex;
      justify-content: center;
      background-color: #f9fafb;
      border-radius: 8px;
      color: #8b949e;
      align-items: center;
    }
    .search-left-icon {
      display: flex;
      justify-content: center;
      background-color: #f9fafb;
      border-radius: 8px;
      align-items: center;
      padding: 0 13px;
      color: #8b949e;
    }
  }
}

.bottom {
  margin: 24px;
}
</style>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="left">
        <div class="textone">明星代币</div>
        <div class="texttwo">一币登天</div>
      </div>
      <div class="right" @click="gotoApply">明星注册</div>
    </div>

    <div class="dynamic">
      <div class="title">最新明星动态</div>
      <div class="text">明星互动，发现明星代币！</div>
      <div class="value">
        <div class="value-item">
          <div class="left">
            <div class="desc">总明星代币价值</div>
            <div class="money">$1,992,732,833.97</div>
          </div>
          <div class="right">
            <img src="../assets/images/trade.png" alt="" />
          </div>
        </div>
        <div class="value-item">
          <div class="left">
            <div class="desc">24h 交易量</div>
            <div class="money">$1,992,732,833.97</div>
          </div>
          <div class="right">
            <img src="../assets/images/value.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="post">
      <Swipper />
      <Swipper />
      <Swipper />
    </div>

    <div class="search">
      <div class="search-left">
        <div class="search-left-search">
          <img
            src="../assets/images/search.png"
            width="20"
            height="20"
            alt=""
          />
          <input type="text" placeholder="Search Token" />
        </div>

        <div class="search-left-center">Listed on Radium</div>
        <div class="search-left-icon">
          All Tag
          <img
            src="../assets/images/pull_down.png"
            width="16"
            height="16"
            alt=""
          />
        </div>
        <div class="search-left-icon">
          All Token
          <img
            src="../assets/images/pull_down.png"
            width="16"
            height="16"
            alt=""
          />
        </div>
        <div class="search-left-icon">
          Creation Time
          <img
            src="../assets/images/pull_down.png"
            width="16"
            height="16"
            alt=""
          />
        </div>
      </div>
      <div class="search-right">
        <div class="search-right-icon">
          <img src="../assets/images/list.png" width="20" height="20" alt="" />
        </div>
        <div class="search-right-icon">
          <img
            src="../assets/images/refresh.png"
            width="20"
            height="20"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const gotoApply = () => {
  router.push('/apply'); // 添加路由跳转
};
</script>
