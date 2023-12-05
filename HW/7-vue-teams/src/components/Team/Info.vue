<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Slotted Member Container -->

<template>

  <!-- Team Container -->
  <div class="team-container">

    <!-- Team Name -->
    <div class="team-name">Team - {{ team.name }}</div>

    <!-- Team Leader -->
    <div class="team-leader"> Leader: {{ team.leader ? team.leader.name : "(Vacant)"}}</div>

    <!-- Team Members Container -->
    <div class="team-members-container">
      <!-- Iterate over each member in the team -->
      <MemberInfo
          v-for="member in team.members" :key="member.id"
          :member="member"
          :leader="team.leader"
          @removeMemberFromTeam="removeMemberFromTeam"
          @setLeaderToTeam = "setLeaderToTeam"
          @unsetLeaderFromTeam = "unsetLeaderFromTeam"
      />
    </div>

  </div>

</template>

<script>

//Import the Classes to Process the Members/Team/Teams Data
import Member from '@/classes/Member.js';
import Team from '@/classes/Team.js';
import Teams from '@/classes/Teams.js';
import MemberInfo from "@/components/Member/Info.vue";


export default {
  components: {MemberInfo},

  data() {
    return {
      accordionActive: false,
    }
  },

  //Properties used for the Team Object to Display and the Team Name to Display on Buttons
  props: ['team','leader'],

  //Emitters to Roster -> View -> App.vue
  emits: [
    'addMemberToTeam',
    'removeMemberFromTeam',
    'setLeaderToTeam',
    'unsetLeaderFromTeam'
  ],

  methods: {

    //Emitters to Roster -> View -> App.vue

    //Adds/Removes a Member to a Team
    addMemberToTeam(member, definedTeamName) {

      //Fires Emit to Parent Component with Member Object to Add to a User Defined Team
      this.$emit('addMemberToTeam', member, definedTeamName);
    },
    removeMemberFromTeam(member) {
      console.log("TI",member,this.team);
      //Fires Emit to Parent Component with Member Object to Remove
      this.$emit('removeMemberFromTeam', member, this.team);
    },

    //Sets/Unsets a Leader from the Team
    setLeaderToTeam(member) {
      console.log("TI Set Leader", member, this.team);
      //Fires Emit to Parent Component with Member Object to set as Leader
      this.$emit('setLeaderToTeam', member, this.team);
    },
    unsetLeaderFromTeam(member){
      //Fires Emit to Parent Component with Member Object to unset as Leader
      this.$emit('unsetLeaderFromTeam',member, this.team);
    }
  },

}
</script>

<style scoped>

.team-container {
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  background: rgba(0,0,0,0.6) !important;
 /* width: 80%; */
}


.team-name,.team-leader {
  color: white;
  text-align: center;
  margin-bottom: 5px;
}

.team-leader {
  color: rgb(66, 184, 131);
}

.team-name {
  font-size: 1.5em;
}

.team-members-container {
  display: flex;
  flex-flow: row wrap; /* Wrap members if they don't fit in one line */
  gap: 10px; /* Space between member components */
  justify-content: center;
}

</style>