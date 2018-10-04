<template>
  <section class="section">
    <div class="container">
      <calendar class="calendar" :show-lunar="false" :first-day-of-week="0" :disable-days-before-today="disableDaysBeforeToday" :sync-date.sync="date" :lang="lang" @change="onChange"></calendar>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { Calendar } from 'vue-date-range';
import moment from 'moment';
import DateRange from '../components/DateRange';

export default {
  components: {
    Calendar,
    DateRange,
  },
  data() {
    return {
      disableDaysBeforeToday: false,
      lang: 'en',
      date: moment(),
    };
  },
  methods: {
    onChange(date) {
      this.date = date;
      console.log(date);
    },
  },
};
</script>
