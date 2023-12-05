<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: List of Teams View       -->

<script setup>
import InputForm from '../components/InputForm.vue'
import TeamRoster from '../components/Team/Roster.vue'
import TeamInfo from "@/components/Team/Info.vue";
</script>

<template>
<main>

  <!-- Roster that Displays List of Teams -->
  <TeamRoster
      :teams="teams"
      @removeMemberFromTeam="removeMemberFromTeam"
      @setLeaderToTeam = "setLeaderToTeam"
      @unsetLeaderFromTeam = "unsetLeaderFromTeam"
  />
</main>
</template>

<script>
//Import the Classes to Process the Members/Team/Teams Data
import Member from '@/classes/Member.js';
import Team from '@/classes/Team.js';
import Teams from '@/classes/Teams.js';


export default {

  data() {
    return {

    }
  },

  // created () {
  //   console.log(this.teams);
  // },

  props: ['teams'],

  methods: {

    //Removes a Member to a Team
    removeMemberFromTeam(member,team) {
      console.log("V",member);
      //Fires Emit to Parent Component with Member Object to Remove
      this.$emit('removeMemberFromTeam', member);
    },
    //Sets/Unsets a Leader from the Team
    setLeaderToTeam(member,team) {
      console.log("TV Set Leader", member, team);
      //Fires Emit to Parent Component with Member Object to set as Leader
      this.$emit('setLeaderToTeam', member,team);
    },
    unsetLeaderFromTeam(member,team){
      //Fires Emit to Parent Component with Member Object to unset as Leader
      this.$emit('unsetLeaderFromTeam',member,team);
    },

    //Watcher Updater
    setSelectedRole(newRole) {
      this.selectedRole = newRole;
    },
    setDefinedTeamName(newTeamName) {
      this.definedTeamName = newTeamName;
    },

  }
}
</script>