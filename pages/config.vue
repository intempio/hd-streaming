<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4 cont-login" v-if="allow > 0">
          <h2 class="title has-text-centered">INSERT VIDEO ID HERE</h2>
          <form method="post" @submit.stop.prevent="submit()">
            <div class="field">
              <div class="control">
                <input type="name" class="input" name="name" v-model="url_id" id="url_id" required>
              </div>
            </div>
            <div class="control qust-btn">
              <input type="submit" class="button is-dark is-fullwidth" value="SUBMIT" />
            </div>
          </form>
          <p v-if="formMessage" class="formMessage">{{ formMessage }}</p>
        </div>
        <div class="column is-4 is-offset-4 cont-login" v-else>
          <h2 class="title has-text-centered">LOGIN</h2>
          <form method="post" @submit.stop.prevent="login()">
            <div class="field">
              <div class="control">
                <input type="name" name="uname" class="input" v-model="uname" id="uname" required>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input type="password" class="input" name="password" v-model="password" id="password" required>
              </div>
            </div>
            <div class="control qust-btn">
              <input type="submit" class="button is-dark is-fullwidth" value="LOGIN" />
            </div>
          </form>
          <p v-if="formMessage1" class="formMessage">{{ formMessage1 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'config-form',
  data() {
    return {
      url_id: null,
      formMessage: null,
      formMessage1: null,
      allow: '',
      uname: '',
      password: '',
      current_date: null,
    };
  },
  created: function() {
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    var today = new Date();
    this.current_date = today.toLocaleDateString('en-US', options);
  },
  head: {
    title: 'Intempio HD Streaming Config',
  },
  methods: {
    async submit() {
      try {
        let response = await axios.post(
          'https://int-helpdesk-api.herokuapp.com/api/v1/AddVideoURL',
          {
            fields: {
              'Video ID': this.url_id,
              Date: this.current_date,
            },
          }
        );
        // console.log(response);

        this.formMessage = 'Video ID Changed!';
        this.url_id = '';
        this.$router.push('/videos');
        //this.$router.push('/videos');
      } catch (e) {
        window.alert('Error logging in');
      }
    },
    async login() {
      var validuname = 'admin123';
      var validpass = 'admin123';
      var entereduname = this.uname;
      var enteredpass = this.password;

      if (entereduname === validuname && enteredpass === validpass)
        this.allow = '1';
      else this.formMessage1 = 'Wrong username or password!';
    },
  },
};
</script>
