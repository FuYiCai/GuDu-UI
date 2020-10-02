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
        const menuVisibel = ref(false);
        provide("menuVisibel", menuVisibel) //set
    }
}
</script>
