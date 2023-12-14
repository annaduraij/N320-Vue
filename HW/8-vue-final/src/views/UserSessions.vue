<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Final        -->
<!-- Date: 8 December 2023          -->
<!-- Desc: User Sessions View       -->

<script setup>
//Import the Vue Components
import SessionInfo from '../components/Session/Info.vue';
import ButtonSlot from "@/components/Templates/ButtonSlot.vue";
</script>

<template>
  <main>

    <!--  Sessions List -->
    <div class="wrapper">
      <div class="SessionsWrapper">

        <div class="FlexEnd">
          <div class="SessionsListTitle"> <h3> Vue Conference Sessions </h3></div>
          <ButtonSlot
              @click="toggleSortType"
          >
            Sort {{sort}}
          </ButtonSlot>
          <div class="SessionsListCount"> <h3> {{userSessionsQuantity}} of {{sessionsQuantity}} Sessions Selected </h3> </div>
        </div>

        <div class="SessionsList">
          <SessionInfo
              v-for="session in sortedUserSessions" :key="session.id"
              :session="session"
              @toggleSession="toggleSession"
              @filterByCategory="filterByCategory"
          />
        </div>

      </div>
    </div>

  </main>
</template>

<script>

import session from "@/classes/Session";

export default {

  components: {
    SessionInfo
  },

  data() {
    return {
      //Alphabetical | Chronological | Sequential
      sort: "Alphabetical",

    }
  },

  //Pass the array of Session Objects
  props: ['sessions'],

  //Emitters to > App.vue
  emits: ['filterByCategory','toggleSession'],

  computed: {

    sortedUserSessions() {
      //Alphabetical Sort
      if(this.sort === 'Alphabetical') {
        function sortSessionsAlphabeticallyByTitle(sessions) {
          // Sort the session objects based on the 'title' property of each session
          return sessions.sort((firstSession, secondSession) => {
            // Use localeCompare for a case-insensitive, locale-aware comparison
            return firstSession.title.localeCompare(secondSession.title, 'en', { sensitivity: 'base' });
          });
        }
        return sortSessionsAlphabeticallyByTitle(this.userSessions);
      }

      //Chronological Sort
      else if(this.sort === 'Chronological') {
        function sortSessionObjectsByDayAndTime(sessionObjects) {
          // This map associates days of the week with numeric values to facilitate sorting.
          const dayOfWeekToNumericValue = {
            'Monday': 1,
            'Tuesday': 2,
            'Wednesday': 3,
            'Thursday': 4,
            'Friday': 5,
            'Saturday': 6,
            'Sunday': 7
          };

          // The 'sort' method arranges the session objects in the desired order.
          return sessionObjects.sort((firstSession, secondSession) => {
            // Calculate the difference in day values for the two sessions.
            const differenceInDays = dayOfWeekToNumericValue[firstSession.sDay] - dayOfWeekToNumericValue[secondSession.sDay];

            // If the days are different, this value determines their order.
            if (differenceInDays !== 0) {
              return differenceInDays;
            }

            // If the days are the same, compare the sessions based on their time.
            // The session with the earlier time comes first.
            const differenceInTime = firstSession.sTime - secondSession.sTime;
            return differenceInTime;
          });
        }
        return sortSessionObjectsByDayAndTime(this.userSessions);
      }

      //Sequential Sort
      else {
        function sortSessionsByID(sessions) {
          // Sort the session objects based on the 'id' property of each session
          return sessions.sort((firstSession, secondSession) => {
            // Compare the 'id' properties
            return firstSession.id - secondSession.id;
          });
        }
        return sortSessionsByID(this.userSessions);
      }


    },

    userSessions() {
      //Return only the added sessions
      return this.sessions.filter( (session) => {
        if(session.added === true) return true;
      });
    },

    userSessionsQuantity(){
      return this.userSessions.length;
    },

    sessionsQuantity(){
      return this.sessions.length;
    },
  },

  methods: {
    //Fire an Event to Parent with the Category Information
    filterByCategory(category) {
      this.$emit('filterByCategory', category);
      console.log(this.sessions)
    },

    //Fire an Event to parent to suggest that the Session be Updated
    toggleSession(sessionObj) {
      this.$emit('toggleSession',sessionObj);
    },

    //Toggle the User Session Sort Type
    toggleSortType() {
      if (this.sort === 'Alphabetical') {
        this.sort = 'Chronological';
      }

      else if (this.sort === 'Chronological'){
        this.sort = 'Sequential';
      }

      else this.sort = 'Alphabetical';
    }
  }, //End of Methods
}
</script>

<style>
/* Sessions Style */

div.SessionsWrapper {
  padding: 0 2vw;
}

</style>