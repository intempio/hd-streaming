<template>
  <div>
    <!--<date-picker v-model="value4" lang="en" range type="datetime" format="YYYY-MM-DD hh:mm:ss a" :time-picker-options="{ start: '00:00', step: '00:30', end: '23:30' }"></date-picker>-->
    <!-- <date-picker v-model="value5" range type="datetime" lang="en" format="YYYY-MM-DD HH:mm:ss"></date-picker>-->
    <date-picker v-model="time3" range :shortcuts="shortcuts" lang="en" @change="onChange"></date-picker>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';

export default {
  components: { DatePicker },
  data() {
    return {
      time3: '',
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [new Date(), new Date()];
          },
        },
      ],
    };
  },
  methods: {
    onChange() {
      console.log(this.time3);
    },
  },
};
</script>