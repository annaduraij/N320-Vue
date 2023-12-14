<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Final        -->
<!-- Date: 8 December 2023          -->
<!-- Desc: Conference Session Info  -->


<template>
  <div class="SessionContainer">

    <div class="FlexEnd">
      <div class="SessionTitle"> <h3> {{session.title}} </h3> </div>
<!--      <div class="Button Positive"> Add to My List </div>-->

      <ButtonSlot
          v-if="session.added === false"
          class="Positive"
          @click="toggleSession(session)"
      >
        Add to My List
      </ButtonSlot>

      <ButtonSlot
          v-else-if="session.added === true"
          class="Negative"
          @click="toggleSession(session)"
      >
        Remove from My List
      </ButtonSlot>
    </div>

    <div class="FlexEnd">
      <div class="SessionPresenter">
        <div class="label"> Presented by: </div>
        <div class="value"> {{ session.presenter }} </div>
      </div>
      <div class="SessionTime">
<!--        {{session.sTime}} at {{session.sDay}}-->
        {{sessionTime}}
      </div>
    </div>

    <hr>
    <div class="SessionDescription">
      {{session.desc}}
    </div>
    <hr>

    <div class="SessionCategories">
      <div class="shaper label">Categories: </div>
      <div class="shaper value">
        <!-- Iterate Through Member Objects with the Key being the Member ID-->
        <Category
            v-for="category in session.tags" :key="category"
            :category="category"
            @filterByCategory="filterByCategory"
        />
      </div>
    </div>

  </div>
</template>

<script>

//Import Category Component
import Category from "@/components/Session/Category.vue";
import category from "@/components/Session/Category.vue";
import ButtonSlot from "@/components/Templates/ButtonSlot.vue";

// //Import the Classes to Process the Members/Team/Teams Data
// import Member from '@/classes/Member.js';
// import Team from '@/classes/Team.js';
// import Teams from '@/classes/Teams.js';



/**
 * Subfunction that validates an integer or a string that is a number or a string that is in the form '0#'
 * @param timeNumeral {number|string} - Input Integer or a padded integer ('0#') in the form of a string
 * @param returnPaddedInt {boolean} - Flag to Return Padded Integer as a String | Default: False
 * @return {number|string} - Returns the timeNumeral as an integer or a padded integer ('0#') in the form of a string
 */
function validateTimeNumeral(timeNumeral, returnPaddedInt = false) {
  // Error Handler - Ensure the input's type is either an integer or a string
  if (typeof timeNumeral !== 'number' && typeof timeNumeral !== 'string') {
    console.log(`Invalid data type: ${typeof timeNumeral}`);
    return;
  }

  //Debug:
  //console.log("Input Time Numeral:",typeof timeNumeral, timeNumeral);

  // Carrier of the Ultimate Integer Time
  let timeInt;

  // Check if input is a string
  if (typeof timeNumeral === 'string') {
    // Trim the string of empty spaces
    timeNumeral = timeNumeral.trim();

    // If the first character is zero, it is a leading zero and must be removed
    if (timeNumeral.startsWith('0')) {
      timeNumeral = timeNumeral.substring(1);
    }

    // Try to parse the string as an integer of base 10
    timeInt = parseInt(timeNumeral, 10);

    // Error Handler - Ensure string may be parsed as an integer
    if (isNaN(timeInt)) {
      console.log(`Cannot parse as integer: Original string '${timeNumeral}'`);
      return;
    }
  }

  //Otherwise timeNumeral is literally a number
  else {
    timeInt = timeNumeral;
  }

  // At this point, string is either a parsed integer or an integer

  // Error Handler - Validate the minimum and maximum value of the integer as between 0 and 59
  if (timeInt < 0 || timeInt > 59) {
    console.log(`Integer: ${timeInt} is not within the range 0-59, the accepted range for a Time Integer`);
    return;
  }

  // If the returnInt flag is enabled, return the integer
  if (!returnPaddedInt) {
    return timeInt;
  }

  // If the integer is a single digit, concatenate to the front a leading '0'
  if (timeInt < 10) {
    timeInt = `0${timeInt}`;
  }

  // Return the integer as a string
  return `${timeInt}`;
}

/**
 * Converts military time (24-hour format) to standard time (12-hour format with AM/PM)
 * @param time {string | int} - Handles both string and integer inputs for hours
 * @param returnInts {boolean} - Flag to determine whether output time object has padded integers as strings | Default: False
 * @return {{s: number, h: number, m: number}} - Time Object
 */
function convertMilitaryToStandardHours(time, returnPaddedInts = false) {

  // Initialize an inputTime empty object
  let inputTime = {h: 0, m: 0, s: 0};

  // Check if time is a string in the format of HH or HH:MM or HH:MM:SS
  if (typeof time === 'string') {

    // Explode the string into an array
    let timeParts = time.split(':');

    // For each element, use the validateTimeNumeral with returnInt = false
    inputTime.h = validateTimeNumeral(timeParts[0]);
    // Check if the Array has the values for Minutes and Seconds, otherwise set to 0
    inputTime.m = timeParts.length >= 1 ? validateTimeNumeral(timeParts[1]) : 0;
    inputTime.s = timeParts.length >= 2 ? validateTimeNumeral(timeParts[2]) : 0;

  }

  // Else if time is simply an integer, initialize
  else if (typeof time === 'number') {

    // Apply the validateTimeNumeral with returnInt = false to the hour
    inputTime.h = validateTimeNumeral(time);

  }

  // Error Handler - Invalid Input Time Type
  else {
    console.log(`Invalid time data type: ${typeof time}`);
    return;
  }

  //Begin Processing the AM/PM calculations

  // Error Handler - Check if not(inputTime.h is an Integer between 0 and 23)
  if (inputTime.h === undefined || inputTime.h < 0 || inputTime.h > 23) {
    console.log(`Invalid hour: ${inputTime.h}`);
    return;
  }

  // Initialize the 'meridiem' AKA AM/PM to a string 'AM'
  inputTime.meridiem = 'AM';

  // If inputTime.h is 0, set it to 12 as that is the equivalent in standard time
  if (inputTime.h === 0) {
    inputTime.h = 12;
  }

  // If inputTime.h is > 12, it is PM
  if (inputTime.h > 12) {
    // Convert inputTime.h in 24-hour format to 12-hour format by subtracting 12
    inputTime.h -= 12;
    // Update meridiem to 'PM'
    inputTime.meridiem = 'PM';
  }

  // If the returnPaddedInts Enabled, return as Padded Values
  if(returnPaddedInts) {
    //Iterate through the Properties of the Input Time Object
    let props = ['h','m','s'];

    //Convert the Integers to Strings which are Padded Integers
    props.forEach( (prop) => {
      inputTime[prop] = validateTimeNumeral(inputTime[prop],false);
    })
  }

  // Return the inputTime object
  return inputTime;
}

export default {

  components: {
    ButtonSlot,
    Category
  },

  data() {
    return {
      // session: {
      //   "id": 2,
      //   "title": "Build a Modern Single Page Application with Vue",
      //   "desc": "You will learn the latest tools and patterns Vue offers for building reusable and testable UI code. You will get hands-on practice scaling an app to multiple pages using routing and state management libraries. At the end of this workshop, you will be ready to build complex and responsive front-end applications.",
      //   "presenter": "Matt Burke",
      //   "tags": ["Javascript", "Front End"],
      //   "sTime": 13,
      //   "sDay": "Friday",
      //   "added": false
      // }
      //accordionActive: false,
    }
  },

  //Properties
  props: ['session'],

  //Emitters to View -> App.vue
  emits: ['filterByCategory','toggleSession'],

  methods: {
    //Fire an Event to Parent with the Category Information
    filterByCategory(category) {
      this.$emit('filterByCategory', category);
    },

    //Fire an Event to parent to suggest that the Session be Updated
    toggleSession(sessionObj) {
      this.$emit('toggleSession',sessionObj);
    }
  }, //End of Methods

  computed: {

    sessionTime() {
      //Ensure sessionTime is in Standard Time
      let sessionTime = convertMilitaryToStandardHours(this.session.sTime);

      //Restructure the Time Object into a Time String in the format H:MM
      sessionTime = `${sessionTime.h}:${validateTimeNumeral(sessionTime.m,true)} ${sessionTime.meridiem}`;

      //Structure the Event Time
      return `${this.session.sDay} at ${sessionTime}`;
    }

    //
    // //Replace Unassigned or Null Values of the Member's Team Property
    // memberTeam() {
    //   if(this.member.team !== '') {
    //     return this.member.team;
    //   } else { return 'Unassigned'}
    // },
    //
    // //Convert all the Details into a Key:Value Object
    // memberDetails() {
    //   return {
    //     "Team": this.memberTeam,
    //     "ID": this.member.id,
    //     "E-Mail": this.member.email,
    //     "Phone": this.member.phone
    //   };
    // }
  }//End of Computed Properties
}
</script>


<style scoped>

/* SessionInfo Style */

.SessionContainer {
  border: solid 2px var(--background-color-dark);
  border-radius: 2vh;
  margin: 10px 0px;
  padding: 1vh 1.5vw;
  box-sizing: border-box;
  width: 100%;

  background: var(--background-color-translucent);
}

.SessionContainer div {
  display: flex;
  width: fit-content;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: var(--border-radius-normal);
}

.SessionTitle {
  font-size: 1.2em;
}

.SessionDescription {
  text-align: justify;
  padding: 5px 2vw;
  margin: 0px 2vw;
}

.SessionPresenter,

.SessionCategories,

.SessionCategories .value {
  display: flex;
  flex-flow: row wrap !important;
}

.label {
  margin-right: 5px;
  color: var(--text-color-dim);
}

</style>