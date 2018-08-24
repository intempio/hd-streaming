<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4 container-login">
          <h2 class="title has-text-centered">INSERT VIDEO URL HERE</h2>
          <form method="post" @submit.prevent="login">
            <div class="field">
              <div class="control">
                <input type="name" class="input" name="name" v-model="config">
              </div>
            </div>
            <div class="control qust-btn">
              <button type="submit" class="button is-dark is-fullwidth">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//import Notification from '~/components/Notification';
/*
export default {
  middleware: 'guest',

  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        });

        this.$router.push('/');
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};*/
</script>

