<template>
<<<<<<< HEAD
  <div>
    <img src="https://intempio.com/wp-content/uploads/2018/05/INTEMPIO_FINAL_Tag1.png" alt="" width="170" style="display:block;margin:20px auto">
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
=======
    <div>
        <img src="http://intemp.io/wp-content/uploads/2018/05/logo.png" alt="" width="300"
             style="display:block;margin:0 auto">
        <iframe id="youtubevideo" width="950" height="530" v-bind:src="videourl" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen style="margin:20px auto; display:block"></iframe>
        <div class="question-block">
            <div class="field">
                <div class="control qust">
                    <input type="name" class="input" name="name" v-model="name"
                           placeholder="Please Enter your Questions Here">
                </div>
                <div class="control qust-btn">
                    <button type="submit" class="button is-dark is-fullwidth">SUBMIT</button>
                </div>
            </div>
        </div>
>>>>>>> 58f8ceaa3610e855cd2c2fe0cbfe8c28ea51caee
    </div>
</template>
<script>
<<<<<<< HEAD
import axios from 'axios';
export default {
  name: 'videos-form',
  // any data stored in the page. reference in a form field like v-model="attendee_email"
  data() {
    return {
      questions: null,
      formMessage: null,
    };
  },
  // EXAMPLE OF LOADING DATA BEFORE THE PAGE LOADS
  async asyncData() {
    // We can call an endpoint before the page loads
    let res = await axios.get(
      'https://runflow.built.io/run/BN6UfIhCk?sync=true'
    );
    // set the views data
    //return res.data.url ;
    return {
      url: '',
      idholder: res.data.url,
    };

    //this.url = res.data.url;
    // console.log(res.data.url);
  },
  created: function() {
    var domain = 'https://www.youtube.com/embed/';
    var videoid = this.idholder;
    var param = '?feature=oembed';
    this.url = domain + videoid + param;
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
          'https://runflow.built.io/run/13seuEdOzu?sync=true',
          {
            questions: this.questions,
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
=======
    export default {
        name: "login-form",
        data: function () {
            return {
                videourl: '',
            };
        },
        created: function () {
            var domain = 'https://www.youtube.com/embed/';
            var videoid = this.$route.query.v;
            var param = '?feature=oembed';
            this.videourl = domain + videoid + param;
        },
    };

    //http://localhost:3000/videos?v=2ccaHpy5Ewo
>>>>>>> 58f8ceaa3610e855cd2c2fe0cbfe8c28ea51caee
</script>
