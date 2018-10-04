<template>
  <div>
    <img src="http://intemp.io/wp-content/uploads/2018/05/logo.png" alt="" width="300" style="display:block;margin:0 auto">
    <iframe id="youtubevideo" width="950" height="530" v-bind:src="url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="margin:20px auto; display:block"></iframe>
    <div class="question-block">
      <form method="post" @submit.stop.prevent="submit()">
        <div class="field">
          <div class="control qust">
            <input type="name" class="input" name="questions" v-model="questions" id="questions" placeholder="Please Enter your Questions Here" required>
          </div>
          <div class="control qust-btn">
            <input type="submit" class="button is-dark is-fullwidth" value="SUBMIT" />
          </div>
        </div>
      </form>
      <p v-if="formMessage" class="formMessage">{{ formMessage }}</p>
      <input type="name" class="input" name="idholder" v-model="idholder" id="idholder">
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'videos-form',
  // any data stored in the page. reference in a form field like v-model="attendee_email"
  data() {
    return {
      questions: null,
      formMessage: null,
      current_date: null,
      current_time: null,
    };
  },
  // EXAMPLE OF LOADING DATA BEFORE THE PAGE LOADS
  /*async getVideoURL() {
    try {
      let response = await axios.get(
        'https://int-helpdesk-api.herokuapp.com/api/v1/getVideoURL'
      );
      //This is to get the last video data
      let lastVideo = response.data[response.data.length - 1];
      //This is to get video ID from the last video
      let lastVideoID = lastVideo.fields['Video ID'];
      return {
        url: '',
        //idholder: res.data[0].fields['Video ID'],
        idholder: this.lastVideoID,
      };
    } catch (e) {
      window.alert('Error logging in' + e);
    }
  },*/

  async asyncData() {
    // We can call an endpoint before the page loads
    let res = await axios.get(
      'https://int-helpdesk-api.herokuapp.com/api/v1/getVideoURL'
    );
    // set the views data
    //return res.data.url ;
    /*   let lastVideo = res.data[res.data.length - 1];
    let lastVideoID = lastVideo.fields['Video ID'];*/
    // console.log(res.data[res.data.length - 1].fields['Video ID']);
    return {
      url: '',
      idholder: res.data[res.data.length - 1].fields['Video ID'],
      // idholder: this.lastVideoID,
    };

    //this.url = res.data.url;
    //console.log(res.data);
    //console.log(res.data[0].fields['Video ID']);
  },

  created: function() {
    var domain = 'https://www.youtube.com/embed/';
    var videoid = this.idholder;
    var param = '?feature=oembed';
    this.url = domain + videoid + param;
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    var today = new Date();
    this.current_date = today.toLocaleDateString('en-US', options);
    this.current_time = today.toString('tt');
  },
  // head of the page
  head: {
    title: 'Intempio HD Streaming',
  },
  //any custom functions for the page
  methods: {
    async submit() {
      try {
        let response = await axios.post(
          'https://int-helpdesk-api.herokuapp.com/api/v1/AddSunovionQuestions',
          {
            fields: {
              Questions: this.questions,
              Date: this.current_date,
              'Time Submitted': this.current_time,
            },
          }
        );
        // response.data would be the response from the Built.io flow that you send
        console.log(response);
        /* setTimeout(() => {
          this.formMessage = 'Question Submitted!';
        }, 1000);*/
        this.formMessage = 'Question Submitted!';
        this.questions = '';
        //this.$router.push('/videos');
      } catch (e) {
        window.alert('Error logging in');
      }
    },
  },
};
</script>
