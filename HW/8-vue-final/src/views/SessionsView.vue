<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Final        -->
<!-- Date: 8 December 2023          -->
<!-- Desc: Home | Sessions View     -->

<script setup>
//Import the Vue Components
import SessionInfo from '../components/Session/Info.vue';
</script>

<template>
  <main>

    <!--  Sessions List -->
    <div class="wrapper">
      <div class="SessionsWrapper">

        <div class="FlexEnd">
          <div class="SessionsListTitle"> <h3> Vue Conference Sessions </h3></div>
          <div class="SessionsListCount"> <h3> {{sessionsQuantity}} Available Sessions </h3> </div>
        </div>

        <div class="SessionsList">
          <SessionInfo
              v-for="session in sessions" :key="session.id"
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

export default {

  components: {
    SessionInfo
  },

  data() {
    return {
    }
  },

  //Pass the array of Session Objects
  props: ['sessions'],

  //Emitters to > App.vue
  emits: ['filterByCategory','toggleSession'],

  computed: {
    // filteredSessions() {
    //   return this.sessions.map( (session) => )
    // },
    sessionsQuantity(){
      return this.sessions.length;
    },

    filteredSessions() {

    }
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