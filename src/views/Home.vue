<template>
  <v-container grid-list-xs>
    <v-layout align-center class="info_box" row wrap>
      <v-flex sm2 xs12 offset-sm9>
        <h1>Tree</h1>
        <div>
        <p>Buy Our Tree plant</p>
        </div>
        </v-flex>
        </v-layout>
        <v-layout align-center class="info_box">
      <v-flex sm2 xs12 offset-sm1>
        <h1>Tree</h1>
        <div>
        <p>Buy Our Tree plant</p>
        </div>
      </v-flex>
      <v-flex sm2 xs12>
        <h1>Tree</h1>
        <div>
        <p>Buy Our Tree plant</p>
        </div>
      </v-flex>
      <v-flex sm2 xs12>
        <h1>Tree</h1>
        <div>
        <p>Buy Our Tree plant</p>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  }
}
</script>

<style lang="scss">
    .info_box .flex h1 {
      @include infobox_mixin(5px, map-get($colorz, white), 10px, 5px, map-get($colorz, white));
      font-weight: bold;
      text-transform: uppercase;
      font-size: 16px;
      text-align: center;
    }
    .info_box .flex div{
      background-color: white;
      padding: 20px;
    }

    .layout:first-child {
      height: 40vh;
    }
    .layout:last-child {
      height: 40vh;
    }
</style>