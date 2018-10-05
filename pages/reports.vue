<template>
    <section class="section">
        <div class="container">
            <img src="http://intemp.io/wp-content/uploads/2018/05/logo.png" alt="" width="300"
                 style="display:block;margin:-40px auto 40px">
            <div class="columns">
                <div class="column is-one-quarter">
                </div>
                <div class="column is-one-quarter">
                    <date-picker v-model="time3" range :shortcuts="shortcuts" lang="en"
                                 @change="onChange"></date-picker>
                </div>
                <div class="column is-one-quarter">
                    <b-field>
                        <b-select placeholder="Start Time"  @change.native="onChangeTimeStart">
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
                        <b-select>
                            <option>AM</option>
                            <option>PM</option>
                        </b-select>
                    </b-field>
                </div>
                <div class="column is-one-quarter">
                    <b-field>
                        <b-select placeholder="End Time">
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
                        <b-select>
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
        components: {DatePicker},
        data() {
            return {
                items: [],
                startTime: '',
                endTime: '',
                time3: [],
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

        mounted: function () {
            this.loadItems();
        },
        methods: {
            loadItems: function () {
                // Init variables
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
                            headers: {Authorization: 'Bearer ' + app_key},
                        }
                    )
                    .then(function (response) {
                        self.items = response.data.records;
                        self.displayItems = self.filteredItems()
                        console.log(response.data.records);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            onChange() {
                console.log(this.time3);
            },
            onChangeTimeStart(event) {
                console.log(event.target.value);
                this.startTime = event.target.value;
            },
            dateRangeFilter: function (items) {
                if(this.time3.length <= 0) {
                    return this.items;
                }
                let startDate = this.time3[0],
                    endDate = this.time3[1];
                return items.filter(i => {
                    let itemDate = (new Date(i.fields["Date Stamp"]));
                    return itemDate >= startDate && itemDate <= endDate;
                })

            }
        },
        computed: {
            filteredItems: function () {
                // you can chain multiple filters here
                /**
                 * let items = this.items;
                 * items = this.dateRangeFilter(items)
                 * items = this.otherFilter(items)
                 * return items
                 * */
                let items = this.items;
                items = this.dateRangeFilter(items);
                /// other filters here
                return items;
            }
        },
    };
</script>
