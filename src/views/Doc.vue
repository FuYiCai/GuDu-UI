<template>
<div>
    <Topnav />
    <Topnav class="content">
        <aside>边栏</aside>
        <main>主内容</main>
    </Topnav>
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
