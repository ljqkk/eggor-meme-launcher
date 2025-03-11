<template>
  <div class="tabbar">
    <div class="logo">EGGOR LOGO</div>
    <div class="right">
      <div class="list">
        <div class="item active">探索</div>
        <div class="item">市场</div>
        <div class="item">排行榜</div>
      </div>
      <div class="purse">
        <img src="../assets/images/purse.png" alt="" />
        连接钱包
      </div>
    </div>
  </div>

</template>
<style lang="scss" scoped>
.tabbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 20px 60px;

    .right {
        display: flex;
        gap: 60px;
        justify-content: center;
        align-items: center;
    }

    .list {
        display: flex;
        gap: 60px;

        justify-content: center;

        .item {}

        .active {
            color: #FF8D0D;
        }
    }

    .purse {
        background-color: #FF8D0D;
        border-radius: 8px;
        color: #fff;
        height: 42px;
        width: 124px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 20px;
            height: 20px;
            margin-right: 6px;
        }
    }
}
</style>