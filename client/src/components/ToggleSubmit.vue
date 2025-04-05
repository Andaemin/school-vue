<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ToggleSubmit',
    
    methods:{
        
    }
});
</script>

<template>
    <v-row>
        <v-col>
            <v-btn @click="" color="#42A5F5" variant="elevated" SomeUser="SomeUser">
                <v-icon icon="mdi-checkbox-marked-circle" start/>complete
            </v-btn>
        </v-col>
        <v-col>
            <v-btn>
                delete
            </v-btn>
        </v-col>
        <v-col>
            <v-btn>
                return
            </v-btn>
        </v-col>
    </v-row>
</template>