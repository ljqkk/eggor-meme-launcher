<template>
  <div class="swipper">
    <div class="swipper-item">
      <div class="top">
        <div class="top-left">
          <div class="avatar">
            <img src="../assets/images/avatar.png" alt="" />
          </div>
          <div class="item-desc">
            <div class="top-content">
              <div class="name">Sarah Chen</div>
              <div class="tick">
                <img src="../assets/images/tick.png" alt="" />
              </div>
            </div>
            <div class="top-right">
              <div class="desc">@sarahchen</div>
              <div class="time">
                <img src="../assets/images/point.png" alt="" />
                <div>2小时前</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../assets/images/bookmark.png" alt="" />
        </div>
      </div>
      <div class="center">
        <div class="center-content">
          很高兴能和大家分享我的新项目！这是我们团队努力的成果，希望得到大家的支持和建议。
        </div>
        <div class="image">
          <img src="../assets/images/content.png" alt="" />
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-item">
          <img src="../assets/images/like.png" alt="" />
          <div class="number">1.2K</div>
        </div>
        <div class="bottom-item">
          <div class="icon">
            <img src="../assets/images/comment.png" alt="" />
          </div>
          <div class="number">{{ 286 }}</div>
        </div>
        <div class="bottom-item">
          <img src="../assets/images/share.png" alt="" />
          <div class="number">分享</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swipper {
  padding-left: 24px;

  &-item {
    width: 734px;
    height: 633px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 25px;
    margin-top: 24px;
    .top {
      display: flex;
      justify-content: space-between;
      .top-left {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
      }
      .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .top-content {
        display: flex;
        justify-content: start;
      }

      .top-right {
        display: flex;
        justify-content: start;
      }
      .right {
        img {
          width: 20px;
          height: 20px;
        }
      }
      .name {
        font-weight: bold;
        font-size: 16px;
      }

      .desc {
        color: #4b5563;
      }

      .time {
        display: flex;
        margin-left: 5px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        img {
          width: 9px;
        }
      }
      .tick {
        width: 20px;
        height: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .center {
      .center-content {
        margin: 18px 0;
      }
      .image {
        width: 734px;
        height: 490px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .bottom {
      display: flex;
      gap: 20px;
      margin-top: 20px;
      .bottom-item {
        display: flex;
        img {
          width: 20px;
          height: 20px;
        }
        .number {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
