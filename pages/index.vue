<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-4 is-offset-4 container-login">
                    <h2 class="title has-text-centered">WELCOME</h2>

                    <form method="post" @submit.prevent="isSubmitted = true">

                        <div class="field">
                            <label class="label">Name</label>

                            <div class="control">
                                <input type="name" class="input" name="name" id="attendee_name" v-model="attendee_name">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Email</label>

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
            </div>
        </div>
    </section>
</template>

<script>
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
        asyncData({ req, params }) {
            // We can call an endpoint before the page loads
            let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // set the views data
            this.response = data
        },*/
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
</script>

