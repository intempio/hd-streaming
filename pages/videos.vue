<template>
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
    </div>
</template>
<script>
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
</script>
