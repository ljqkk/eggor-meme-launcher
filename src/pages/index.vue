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
        background:
            url('../assets/images/banner.png') no-repeat,
            linear-gradient(to right, rgba(244, 127, 52, 0), rgba(191, 65, 0, 1));
        background-size:
            cover,
            auto;
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
        background-color: #FF8D0D;
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
        color: #FF8D0D;
        font-size: 60px;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .text {
        color: #4B5563;
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
            border: 2px solid #F3F4F6;
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
                background-color: #FF8D0D33;
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

.swipper {
    padding-left: 24px;

    &-item {
        .top {
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

            .name {
                font-weight: bold;
                font-size: 16px;
            }

            .desc {
                color: #4B5563;
            }

            .time {
                display: flex;

                img {
                    width: 9px;
                    // height: 24px;
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
    }
}
</style>

<template>
    <div class="wrapper">
        <div class="content">
            <div class="left">
                <div class="textone">
                    明星代币
                </div>
                <div class="texttwo">
                    一币登天
                </div>
            </div>
            <div class="right">
                明星注册
            </div>
        </div>

        <div class="dynamic">
            <div class="title">
                最新明星动态
            </div>
            <div class="text">
                明星互动，发现明星代币！
            </div>
            <div class="value">
                <div class="value-item">
                    <div class="left">
                        <div class="desc">
                            总明星代币价值
                        </div>
                        <div class="money">
                            $1,992,732,833.97
                        </div>
                    </div>
                    <div class="right">
                        <img src="../assets/images/trade.png" alt="">
                    </div>
                </div>
                <div class="value-item">
                    <div class="left">
                        <div class="desc">
                            24h 交易量
                        </div>
                        <div class="money">
                            $1,992,732,833.97
                        </div>
                    </div>
                    <div class="right">
                        <img src="../assets/images/value.png" alt="">

                    </div>
                </div>
            </div>
        </div>

        <div class="swipper">
            <div class="swipper-item">
                <div class="top">
                    <div class="avatar">
                        <img src="../assets/images/avatar.png" alt="">
                    </div>
                    <div class="top-content">
                        <div class="name">Sarah Chen</div>
                        <div class="tick"><img src="../assets/images/tick.png" alt=""></div>

                    </div>
                    <div class="top-right">
                        <div class="desc">@sarahchen </div>
                        <div class="time">
                            <img src="../assets/images/point.png" alt="">
                            <div>2小时前</div>
                        </div>
                    </div>
                    <div class="right"><img src="../assets/images/bookmark.png" alt=""></div>

                </div>
                <div class="center">
                    <div class="content">很高兴能和大家分享我的新项目！这是我们团队努力的成果，希望得到大家的支持和建议。</div>
                    <div class="image">
                        <img src="../assets/images/content.png" alt="">
                    </div>
                </div>
                <div class="bottom">
                    <div class="bottom-item" v-for="item in numberlist">
                        <img :src="item.img" alt="">
                        <div class="number">{{ item.content }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const numberlist = ref([
    {
        img: '../assets/images/like.png',
        content: '1.2K'
    }, {
        img: '../assets/images/comment.png',
        content: '286'
    }, {
        img: '../assets/images/share.png',
        content: '分享'
    }
])
</script>
