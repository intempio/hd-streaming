<template>
    <section class="section">
        <div class="container">
            <img src="http://intemp.io/wp-content/uploads/2018/05/logo.png" alt="" width="300" style="display:block;margin:-40px auto 40px">
            <div class="columns">
                <div class="column is-one-quarter">
                </div>
                <div class="column is-one-quarter">
                    <date-picker v-model="date" range :shortcuts="shortcuts" lang="en" @change="onChange"></date-picker>
                </div>
                <div class="column is-one-quarter">
                    <b-field>
                        <b-select placeholder="Start Time" @change.native="onChangeTimeStart">
                            <option>12:00</option>
                            <option>1:00</option>
                            <option>2:00</option>
                            <option>3:00</option>
                            <option>4:00</option>
                            <option>5:00</option>
                            <option>6:00</option>
                            <option>7:00</option>
                            <option>8:00</option>
                            <option>9:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                        </b-select>
                        <b-select @change.native="onChangeTime">
                            <option>AM</option>
                            <option>PM</option>
                        </b-select>
                    </b-field>
                </div>
                <div class="column is-one-quarter">
                    <b-field>
                        <b-select placeholder="End Time" @change.native="onChangeEndStart">
                            <option>12:00</option>
                            <option>1:00</option>
                            <option>2:00</option>
                            <option>3:00</option>
                            <option>4:00</option>
                            <option>5:00</option>
                            <option>6:00</option>
                            <option>7:00</option>
                            <option>8:00</option>
                            <option>9:00</option>
                            <option>10:00</option>
                            <option>11:00</option>
                        </b-select>
                        <b-select @change.native="onChangeTimes">
                            <option>AM</option>
                            <option>PM</option>
                        </b-select>
                    </b-field>
                </div>
                <div class="column is-one-quarter">

                </div>
            </div>
            <div class="columns">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time Attended</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in filteredItems" v-bind:key="item">
                            <td>{{ item['fields']['Name'] }}</td>
                            <td>{{ item['fields']['Email Address'] }}</td>
                            <td>{{ item['fields']['Date Stamp'] }}</td>
                            <td>{{ item['fields']['Time Attended'] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import DatePicker from 'vue2-datepicker';

export default {
  components: { DatePicker },
  data() {
    return {
      items: [], //list of data from airtable
      date: [], //for the daterange
      startTime: '', //time event started
      endTime: '', //time event ended
      time: '', //start time AM/PM
      times: '', //end time AM/PM
      shortcuts: [
        //this is for the date range to get the dates selected
        {
          text: 'Today',
          onClick: () => {
            this.date = [new Date(), new Date()];
          },
        },
      ],
    };
  },

  mounted: function() {
    this.loadItems(); //loads the data from airtable
  },
  methods: {
    loadItems: function() {
      // getting of airtable data
      let self = this;
      let app_id = 'app8UqHD3bEzrbxE8';
      let app_key = 'keyshz0KkZeP17aeg';
      let dataTable = 'Attendees';
      let dataView = 'Reports';
      this.items = [];
      axios
        .get(
          'https://api.airtable.com/v0/' +
            app_id +
            '/' +
            dataTable +
            '?view=' +
            dataView,
          {
            headers: { Authorization: 'Bearer ' + app_key },
          }
        )
        .then(function(response) {
          self.items = response.data.records; //showing of airtable data
          self.displayItems = self.filteredItems(); //filters included below
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //Filters starts here
    onChangeEndStart(event) {
      // getting the end time value selected
      console.log(event.target.value);
      this.endTime = event.target.value;
    },
    onChangeTimeStart(event) {
      // getting the start time value selected
      console.log(event.target.value);
      this.startTime = event.target.value;
    },
    onChangeTime(event) {
      // getting the start time AM/PM
      console.log(event.target.value);
      this.time = event.target.value;
    },
    onChangeTimes(event) {
      // getting the end time AM/PM
      console.log(event.target.value);
      this.times = event.target.value;
    },
    onChangeTimesFilter: function(items) {
      // check if the end time selected is AM/PM then do the filter
      if (this.times.length <= 0) {
        return this.onChangeTimeFilter(items);
      }
      return items.filter(i => {
        let itemTs = i.fields['Time Attended'];
        return itemTs.match(this.times);
      });
    },
    onChangeTimeFilter: function(items) {
      // check if the start time selected is AM/PM then do the filter
      if (this.time.length <= 0) {
        return this.timeRangeFilter(items);
      }
      return items.filter(i => {
        let itemT = i.fields['Time Attended'];
        return itemT.match(this.time);
      });
    },
    timeRangeFilter: function(items) {
      // time actual filter
      if (this.endTime.length <= 0) {
        return this.dateRangeFilter(items);
      }
      return items.filter(i => {
        let itemTime = i.fields['Time Attended'];
        return itemTime >= this.startTime && itemTime <= this.endTime;
      });
    },
    dateRangeFilter: function(items) {
      //date actual filter
      if (this.date.length <= 0) {
        return this.items;
      }
      let startDate = this.date[0],
        endDate = this.date[1];
      return items.filter(i => {
        let itemDate = new Date(i.fields['Date Stamp']);
        return itemDate >= startDate && itemDate <= endDate;
      });
    },
  },
  computed: {
    //list of filters to be done before showing the end list
    filteredItems: function() {
      // you can chain multiple filters here
      /**
       * let items = this.items;
       * items = this.dateRangeFilter(items)
       * items = this.otherFilter(items)
       * return items
       * */
      let items = this.items;
      items = this.dateRangeFilter(items);
      items = this.timeRangeFilter(items);
      items = this.onChangeTimeFilter(items);
      /// other filters here
      return items;
    },
  },
};
</script>
