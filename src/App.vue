<template>
<router-view />
</template>

<script lang="ts">
import {
    provide,
    ref
} from 'vue';
export default {
    name: 'App',
    setup() {
        const width = document.documentElement.clientWidth;
        const menuVisibel = ref(width <= 500 ? false : true);
        provide("menuVisibel", menuVisibel) //set
    }
}
</script>
