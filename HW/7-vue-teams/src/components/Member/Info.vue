<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Slotted Member Container -->

<template>
  <div class="MemberContainer">

    <div class="MemberName" ><span class="Dynamic"> {{ member.name }} </span></div>
    <div v-show="member.leader === true" class="MemberLeader"> Leader of {{member.team}} </div>
    <div class="MemberRole">Role: <span class="Dynamic">{{ member.role }}</span></div>


    <div>


    </div>

    <!-- Only show the Add Member Button if the Member doesn't already have a Team AND there is a User Defined Team-->
    <div class="button-slots">

      <!-- Accordion Style Expansion to Reveal Member Details -->
      <button-slot @click="toggleDetails" v-show="!accordionActive">Display Details</button-slot>

      <div class="MemberDetailsContainer" v-if="accordionActive" @click="toggleDetails">

        <!-- Render All the Details of the Member -->
        <div v-for="(detailValue, detailKey) in memberDetails" :key="detailKey" class="MemberDetail">
          <div>{{ detailKey }}:</div>
          <div> <span class="Dynamic">{{ detailValue }}</span> </div>
        </div>

      </div>

      <button-slot
          v-if="member.team === '' && definedTeamName !== ''"
          @click="addMemberToTeam(member, definedTeamName)"
      >
        <!-- Add Member Button-->
        <span class="add">Add</span> to Team '{{ definedTeamName }}'!
      </button-slot>

      <button-slot
          v-if="member.team !== ''"
          @click="removeMemberFromTeam(member)"
      >
        <!-- Remove Member Button-->
        <span class="remove"> Remove </span> from Team '{{ member.team }}'!
      </button-slot>

      <button-slot
          v-show="checkLeader() ==='NoLeader'"
          @click="setLeaderToTeam(member)"
      >
        <!-- Set Leader Button -->
        <span class="add">Set</span> as Leader of '{{ member.team }}'!
      </button-slot>

      <button-slot
          v-show="checkLeader() ==='IsLeader'"
          @click="unsetLeaderFromTeam(member)"
      >
        <!-- Remove Member Button-->
        <span class="remove"> Remove </span> as Leader of '{{ member.team }}'!
      </button-slot>

    </div>

  </div> <!-- End of MemberContainer -->
</template>

<script>

//Import the Classes to Process the Members/Team/Teams Data
import Member from '@/classes/Member.js';
import Team from '@/classes/Team.js';
import Teams from '@/classes/Teams.js';


export default {

  data() {
    return {
      accordionActive: false,
    }
  },

  // created() {
  //   console.log(this.member, "Leader Status: ", this.checkLeader())
  // },

  //Properties used for the Member Object to Display and the Team Name to Display on Buttons
  props: [
    'member',
    'definedTeamName', //From Member Roster
    'leader'//From Team Roster
  ],

  //Emitters to Roster -> View -> App.vue
  emits: [
      'addMemberToTeam',
      'removeMemberFromTeam',
      'setLeaderToTeam',
      'unsetLeaderFromTeam'
  ],

  methods: {
    //Toggles Details Accordion of the Member
    toggleDetails() {
      this.accordionActive = !this.accordionActive;
    },

    //Check Leader
    checkLeader() {

      //If the Leader Value is Undefined, this is not the right skin
      if (this.leader === undefined) { return; }

      //If the Leader Value is Null, the spot is open
      if (this.leader === null) {
        return "NoLeader";
      }

      //If the Leader Value is Not Null, the spot is occupied

      //If the Member's ID matches the Leader's ID, they are the leader
      if (this.member.id === this.leader.id) {
        return "IsLeader";
      }

      //If Leader is Not Null AND they don't match the Leader's ID, then they are not a Leader
      else return "NotLeader";
    },

    //Emitters to Roster -> View -> App.vue

    //Adds/Removes a Member to a Team
    addMemberToTeam(member, definedTeamName) {
      //Fires Emit to Parent Component with Member Object to Add to a User Defined Team
      this.$emit('addMemberToTeam', member, definedTeamName);
    },
    removeMemberFromTeam(member) {
      console.log("MI",member);
      //Fires Emit to Parent Component with Member Object to Remove
      this.$emit('removeMemberFromTeam', member);
    },


    //Sets/Unsets a Leader from the Team
    setLeaderToTeam(member) {
      console.log("T-MI Set Leader", member);
      //Fires Emit to Parent Component with Member Object to set as Leader
      this.$emit('setLeaderToTeam', member);
    },
    unsetLeaderFromTeam(member){
      //Fires Emit to Parent Component with Member Object to unset as Leader
      this.$emit('unsetLeaderFromTeam', member);
    }
  },

  computed: {

    //Replace Unassigned or Null Values of the Member's Team Property
    memberTeam() {
      if(this.member.team !== '') {
        return this.member.team;
      } else { return 'Unassigned'}
    },

    //Convert all the Details into a Key:Value Object
    memberDetails() {
      return {
        "Team": this.memberTeam,
        "ID": this.member.id,
        "E-Mail": this.member.email,
        "Phone": this.member.phone
      };
    }
  }
}
</script>

<style scoped>

.MemberContainer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: fit-content;
  border: 1px solid black;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(17, 46, 33, 0.8), rgba(34, 92, 66, 0.8) 25%, rgba(68, 184, 132, 0.8));
  color: RGBA(250, 250, 250, 0.8);
  font-style: italic;
}

.MemberContainer, .MemberDetailsContainer {
  transition: border-color 200ms, border-radius 300ms, height 200ms;
}

.MemberContainer:hover, .MemberDetailsContainer:hover {
  border-radius: 20px;
  border-color: white;
}

.MemberContainer > div,
.MemberDetailsContainer > div {
  padding: 4px;
  text-align: center;
}

.MemberDetailsContainer {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 10px;
  margin: 8px 4px;
  border: 1px solid transparent;
  cursor: pointer;
}

.MemberDetail {
  font-size: 0.9em;
  display: flex;
  justify-content: space-between;
}

span.Dynamic {
  color: white;
  font-style: normal;
}

.MemberLeader {
  font-size: 1em;
  color: rgb(66, 184, 131);
  background: black;
  width: fit-content;
  margin: 0 auto;
  border-radius: 10px;
}

.MemberName {
  font-size: 1.2em;
  text-align: center;
}

.MemberName > span,
.MemberContainer button {
  color: white;
  font-style: italic;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.7);
  text-align: center;
}

.MemberContainer button {
  font-size: 0.8em;
  margin-top: 2px;
}

.button-slots {
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
}

.add {
  color: rgb(66, 184, 131) !important;
}

.remove {
  color: rgb(187, 67, 121) !important;
}




</style>