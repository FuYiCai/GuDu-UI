<demo>
支持 disabled
</demo>
<template>
<Button disabled>禁用按钮</Button>
<Button theme="text" disabled>禁用按钮</Button>
<div class="p-t5">
    <Button theme="link" disabled>禁用链接按钮</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: {
        Button
    }
}
</script>
