<template>
<router-view />
</template>

<script lang="ts">
import {
    provide,
    ref
} from 'vue';
import {
    router
} from './router';
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisibel = ref(width <= 500 ? false : true);
        provide("menuVisibel", menuVisibel) //set
        router.afterEach(() => {
            if (width <= 500) {
                menuVisibel.value = false;
            }
        })
    }
}
</script>
