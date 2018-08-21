<template>
  <div>
    <img src="http://intemp.io/wp-content/uploads/2018/05/logo.png" alt="" width="300" style="display:block;margin:40px auto">
    <iframe id="youtubevideo" width="700" height="400" v-bind:src="videourl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="margin:20px auto; display:block"></iframe>
  </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
export default {
  data: function() {
    return {
      videourl: '',
    };
  },
  created: function() {
    var domain = 'https://www.youtube.com/embed/';
    var videoid = this.$route.query.v;
    var param = '?feature=oembed';
    this.videourl = domain + videoid + param;
  },
};

//http://localhost:3000/videos?v=2ccaHpy5Ewo
</script>
