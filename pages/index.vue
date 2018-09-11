<template>
<<<<<<< HEAD
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4 container-login">
          <img src="https://intempio.com/wp-content/uploads/2018/05/INTEMPIO_FINAL_Tag1.png" alt="" width="170" style="display:block;margin:20px auto">
          <h2 class="title has-text-centered">WELCOME</h2>

          <form method="post" @submit.stop.prevent="submit()">
=======
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-4 container-login">
                    <h2 class="title has-text-centered">WELCOME</h2>

                    <form method="post" @submit.prevent="isSubmitted = true">
>>>>>>> 58f8ceaa3610e855cd2c2fe0cbfe8c28ea51caee

                        <div class="field">
                            <label class="label">Name</label>

<<<<<<< HEAD
              <div class="control">
                <input type="name" class="input" name="name" id="attendee_name" v-model="attendee_name" required>
              </div>
            </div>
=======
                            <div class="control">
                                <input type="name" class="input" name="name" id="attendee_name" v-model="attendee_name">
                            </div>
                        </div>
>>>>>>> 58f8ceaa3610e855cd2c2fe0cbfe8c28ea51caee

                        <div class="field">
                            <label class="label">Email</label>

<<<<<<< HEAD
              <div class="control">
                <input type="email" class="input" name="email" id="attendee_email" v-model="attendee_email" required>
              </div>
            </div>
            <div class="control">
              <input type="submit" class="button is-dark is-fullwidth" value="Log In" />
=======
                            <div class="control">
                                <input type="email" class="input" name="email" id="attendee_email" v-model="attendee_email">
                            </div>
                        </div>

                        <div class="control">
                            <button type="submit" @click.stop.prevent="submit()" class="button is-dark is-fullwidth">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
>>>>>>> 58f8ceaa3610e855cd2c2fe0cbfe8c28ea51caee
            </div>
        </div>
    </section>
</template>

<script>
<<<<<<< HEAD
import axios from 'axios';
export default {
  name: 'questions-form',
  // any data stored in the page. reference in a form field like v-model="attendee_email"
  data() {
    return {
      attendee_email: null,
      attendee_name: null,
    };
  },
  /* EXAMPLE OF LOADING DATA BEFORE THE PAGE LOADS
=======
    import axios from 'axios';

    export default {
        name: "login-form",
        // any data stored in the page. reference in a form field like v-model="attendee_email"
        data(){
            return {
                attendee_email : null,
                attendee_name: null
            }
        },
        /* EXAMPLE OF LOADING DATA BEFORE THE PAGE LOADS
>>>>>>> 58f8ceaa3610e855cd2c2fe0cbfe8c28ea51caee
        asyncData({ req, params }) {
            // We can call an endpoint before the page loads
            let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // set the views data
            this.response = data
        },*/
<<<<<<< HEAD
  // head of the page
  head: {
    title: 'Intempio HD Streaming Login',
  },
  //any custom functions for the page
  methods: {
    async submit() {
      try {
        let response = await axios.post(
          'https://runflow.built.io/run/8zrghqwsf?sync=true',
          {
            attendee_email: this.attendee_email,
            attendee_name: this.attendee_name,
          }
        );
        // response.data would be the response from the Built.io flow that you send
        // console.log(response);
        this.$router.push('/videos');
      } catch (e) {
        window.alert('Error logging in');
      }
    },
  },
};
=======
        // head of the page
        head: {
            title: 'Sunovion Login'
        },
        //any custom functions for the page
        methods: {
            async submit(){
                try {
                    let response = await axios.post('https://runflow.built.io/run/8zrghqwsf?sync=true', {
                            attendee_email: this.attendee_email,
                            attendee_name: this.attendee_name
                        });
                    // response.data would be the response from the Built.io flow that you send
                    console.log(response);
                    this.$router.push("/videos");
                } catch(e) {
                    window.alert("Error logging in");
                }
            }
        }
    };
>>>>>>> 58f8ceaa3610e855cd2c2fe0cbfe8c28ea51caee
</script>
