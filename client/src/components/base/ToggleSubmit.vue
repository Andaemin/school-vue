<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ToggleSubmit",
    emits: ["click"],
    // inheritAttrs : false
    methods: {},
});
</script>

<template>
    <v-btn @click="$emit('click')" SomeUser="SomeUser" corsor="pointer" class="ma-2">
        <slot>버튼</slot>
    </v-btn>
</template>
