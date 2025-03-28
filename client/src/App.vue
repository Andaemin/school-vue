<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
}
</script>

<template>
  <v-container>
    <v-app>
        <router-link to="/"></router-link>
        <router-view/>
    </v-app>
</v-container>
</template>