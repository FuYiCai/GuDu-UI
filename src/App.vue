<template>
<img alt="Vue logo" src="./assets/logo.png" />
<HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hi from './components/hi.vue'

export default {
    name: 'App',
    components: {
        HelloWorld: Hi
    }
}
</script>
