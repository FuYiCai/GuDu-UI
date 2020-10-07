<template>
<div>
    <div class="topnavAndBanner">
        <Topnav />
        <div class="banner">
            <h1>咕嘟 UI</h1>
            <h2 class="zwyHeightSec">一 个 快 速 体 验 VUE3 的 框 架</h2>
            <p class="actions">
                <a href="https://github.com/FuYiCai/GuDu-UI">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg>
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>全部使用 Vue 3 Composition API</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-ts"></use>
                </svg>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 书写（非严格检查）</p>
            </li>
            <li>
                <svg>
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner {
    background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
    display: flex;
    justify-content: center;

    >svg {
        margin: 64px auto;
        padding: 0 16px;

        @media (min-width: 800px) {
            width: 800px;
        }

        @media (min-width: 1200px) {
            width: 1200px;
        }

    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text
            }
        }
    }
}

.banner {
    padding: 100px 0;
    color: $color;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: $green;
            color: white;
            display: inline-block;

            padding: 8px 24px;
            border-radius: $border-radius;

            &:hover {
                text-decoration: none;
            }
        }
    }
}

.zwyHeightSec {
    position: relative;
    overflow: hidden;
}

@keyframes zwyHeightSec {
    100% {
        background-position: right -40px top 0px;
    }
}

.zwyHeightSec::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: zwyHeightSec 1s ease infinite;
}
</style>
