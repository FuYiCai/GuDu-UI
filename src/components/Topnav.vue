<template>
<div class="topnav">
    <router-link to="/" class="logo">
        <svg class="icon">
            <use xlink:href="#icon-zhuanshi"></use>
        </svg>
    </router-link>
    <ul class="menu">
        <li>
            <router-link to="/doc">文档</router-link>
        </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
    </svg>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue'
export default {
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const menuVisibel = inject < Ref < boolean > > ("menuVisibel"); //get
        const toggleMenu = () => {
            menuVisibel.value = !menuVisibel.value
        }
        // vue 3 函数要return
        return {
            toggleMenu
        }
    }
}
</script>

<style lang="scss" scoped>
$color: #007974;

.topnav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: $color;
    z-index: 20;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;

        >svg {
            width: 32px;
            height: 32px;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        display: none;
        width: 32px;
        height: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (max-width: 500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
