<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Main Vue to Mount App    -->
<template>
  <!-- Navigation Bar for SPA -->
  <Navbar/>
  <!-- Mounts the Router and the Corresponding View -->
  <RouterView
      :members="members"
      :teams="teams"
      @addMemberToTeam="addMemberToTeam"
      @removeMemberFromTeam="removeMemberFromTeam"
      @setLeaderToTeam = "setLeaderToTeam"
      @unsetLeaderFromTeam = "unsetLeaderFromTeam"
  />
</template>

<script>
//Import the Navbar Component
import Navbar from './components/Sections/NavBar.vue';

//Import the JSON Data Containing the Members
import membersJSON from './data/members.json';

const members = membersJSON.data.blacklist.map(memberData => new Member(memberData));

//Import the Classes to Process the Members/Team/Teams Data
import Member from '@/classes/Member.js';
import Team from '@/classes/Team.js';
import Teams from '@/classes/Teams.js';
import TeamInfo from "@/components/Team/Info.vue";

const teams = new Teams();

export default {

  components: {
    TeamInfo,
    Navbar
  },

  data() {
    return {
      //Bind the Data of the Members
      members: members,
      //Bind the Data of the Teams
      teams: teams,
      //TeamsList is Required by the Assignment
      TeamsList: [
        /* TeamsList:
         *   {
         *     name: '<teamName>',
         *     members:
         *     [
         *       <memberObj1>,
         *       <memberObj2>,
         *       <memberObj3>,
         *     ]
         *   },
         *
         *   { <teamObj2> }
         */],
    }
  },

  methods: {
    //Method to Add Member to a Team
    addMemberToTeam(member, definedTeamName) {
      // this.$emit('addMemberToTeam', member, definedTeamName);

      //Create a New Team or Bind Existing Team
      let team = this.teams.findOrCreate(definedTeamName);
      //Add the Member to the Team
      team.addMember(member);
      //Add/Update Teams with the Team
      this.teams.add(team);

      //Debug: Check Teams
      //console.log("App.Vue:",this.teams);
    },

    //Method to Remove Member from a Team
    removeMemberFromTeam(member) {
      console.log("App", member);
      // this.$emit('removeMemberFromTeam',member);

      //Identify Existing Team by Member
      let team = this.teams.findTeamByMember(member);
      //Remove Member from the Team
      team.removeMember(member);
      //Update Teams with the Team
      this.teams.add(team);
      //Cleanse Any Empty Team from the Teams
      this.teams.cleanse();

      //Debug: Check Teams
      //console.log("App.Vue:",this.teams);
    },

    //Sets a Leader from the Team
    setLeaderToTeam(member) {
      //console.log("Executing the Set Leader Process...")
      //Identify Existing Team by Member
      let team = this.teams.findTeamByMember(member);
      //Set Member as Leader for the Team
      team.setLeader(member);
      //Update Teams with the Team
      this.teams.add(team);

      //Debug: Check Teams
      console.log("App.Vue:",this.teams);
    },

    //Unsets a Leader from the Team
    //Note it can either use a member to reverse find the team, or directly accept a team
    unsetLeaderFromTeam(member){
      console.log("Executing the Unset Leader Process...")
      //Identify Existing Team by Member
      let team = this.teams.findTeamByMember(member);
      //Unset Leaders for the Team
      team.unsetLeader();
      //Update Teams with the Team
      this.teams.add(team);

      //Debug: Check Teams
      //console.log("App.Vue:",this.teams);
    }
  }
}
</script>

<style>
html {
  height: 100%
}

body {
  margin: 0px;
  background: rgb(108, 86, 86);
  background-color: #000000;
  opacity: 1;

  /* For the Background Pattern */
  --s: 80px; /* control the size */
  --c: #202020;
  --_g:
      #0000 calc(-650%/13) calc(50%/13),var(--c) 0 calc(100%/13),
      #0000 0 calc(150%/13),var(--c) 0 calc(200%/13),
      #0000 0 calc(250%/13),var(--c) 0 calc(300%/13);
  --_g0: repeating-linear-gradient( 45deg,var(--_g));
  --_g1: repeating-linear-gradient(-45deg,var(--_g));
  background:
      var(--_g0),var(--_g0) var(--s) var(--s),
      var(--_g1),var(--_g1) var(--s) var(--s) #181818;
  background-size: calc(2*var(--s)) calc(2*var(--s));

  /*background-image: linear-gradient(30deg, #272727 12%, transparent 12.5%, transparent 87%, #272727 87.5%, #272727), linear-gradient(150deg, #272727 12%, transparent 12.5%, transparent 87%, #272727 87.5%, #272727), linear-gradient(30deg, #272727 12%, transparent 12.5%, transparent 87%, #272727 87.5%, #272727), linear-gradient(150deg, #272727 12%, transparent 12.5%, transparent 87%, #272727 87.5%, #272727), linear-gradient(60deg, #27272777 25%, transparent 25.5%, transparent 75%, #27272777 75%, #27272777), linear-gradient(60deg, #27272777 25%, transparent 25.5%, transparent 75%, #27272777 75%, #27272777);
  background-size: 28px 49px;
  background-position: 0 0, 0 0, 14px 25px, 14px 25px, 0 0, 14px 25px;
  background-size: 100%;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 25%, rgba(30,30,30,1) 100%); */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
  sans-serif;
}
</style>
