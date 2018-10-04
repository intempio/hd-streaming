<template>
  <section>
    <div class="columns">
      <daterange class="calendar" :sync-range.sync="range" :lang="lang" @change="onChange"></daterange>
    </div>
  </section>
</template>

<script>
import { DateRange } from 'vue-date-range';
export default {
  name: 'DateRange',
  components: {
    DateRange,
  },
  data() {
    return {
      lang: 'en',
      range: {
        startDate: moment(),
        endDate: moment().add(7, 'days'),
      },
    };
  },
  methods: {
    onChange(range) {
      this.range = range;
    },
    setRange(p) {
      if (typeof p === 'number') {
        console.log(p);
        this.range = {
          startDate: moment().add(p, 'days'),
          endDate: moment(),
        };
      }
    },
  },
};
</script>
