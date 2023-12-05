<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 28 November 2023         -->
<!-- Desc: Display Set of Teams   -->

<template>
  <div v-if="teams.list.length === 0" class="EmptyMsg"> All Teams are Empty <br> Please Add Members </div>

  <div v-else class="team-list-container">

    <!-- Iterate over each team in the Teams list -->
    <div class="team-container">

      <!-- Iterate Through Team Info Components-->
      <TeamInfo
          v-for="(team, index) in teams.list" :key="index"
          :team="team"
          @removeMemberFromTeam="removeMemberFromTeam"
          @setLeaderToTeam = "setLeaderToTeam"
          @unsetLeaderFromTeam = "unsetLeaderFromTeam"
      />

    </div>
  </div>
</template>

<script>
// Import the MemberInfo component
import MemberInfo from '../Member/Info.vue';

//Import the TeamInfo component
import TeamInfo from './Info.vue';

//Import the Classes to Process the Members/Team/Teams Data
import Member from '@/classes/Member.js';
import Team from '@/classes/Team.js';
import Teams from '@/classes/Teams.js';
import team from "@/classes/Team.js";

export default {

    components: {
      TeamInfo,
      MemberInfo
    },

    created () {
      console.log("Team View Teams: ",this.teams);
    },

    data() {
        return {
         /* teams: {
            "list": [
              {
                "name": "Dragon",
                "members": [
                  {
                    "id": 1,
                    "name": "Raymond Reddington",
                    "phone": "(555) 010-1122",
                    "email": "reddington@blacklist.com",
                    "role": "Strategist",
                    "team": "Dragon"
                  },
                  {
                    "id": 19,
                    "name": "Marvin Gerard",
                    "phone": "(555) 190-1300",
                    "email": "mgerard@legal.com",
                    "role": "Strategist",
                    "team": "Dragon"
                  },
                  {
                    "id": 4,
                    "name": "Harold Cooper",
                    "phone": "(555) 040-1155",
                    "email": "cooper@fbi.gov",
                    "role": "Strategist",
                    "team": "Dragon"
                  },
                  {
                    "id": 6,
                    "name": "Dembe Zuma",
                    "phone": "(555) 060-1177",
                    "email": "dzuma@blacklist.com",
                    "role": "Strategist",
                    "team": "Dragon"
                  }
                ]
              },
              {
                "name": "Demon",
                "members": [
                  {
                    "id": 2,
                    "name": "Elizabeth Keen",
                    "phone": "(555) 020-1133",
                    "email": "ekeen@fbi.gov",
                    "role": "Agent",
                    "team": "Demon"
                  },
                  {
                    "id": 5,
                    "name": "Tom Keen",
                    "phone": "(555) 050-1166",
                    "email": "tkeen@private.com",
                    "role": "Operative",
                    "team": "Demon"
                  }
                ]
              },
              {
                "name": "Hero",
                "members": [
                  {
                    "id": 7,
                    "name": "Aram Mojtabai",
                    "phone": "(555) 070-1188",
                    "email": "mojtabai@tech.com",
                    "role": "Technical Expert",
                    "team": "Hero"
                  }
                ]
              }
            ]
          } */
        }
    },

    props: ['teams'],

    //Emitters to Roster -> View -> App.vue
    emits: [
      'removeMemberFromTeam',
      'setLeaderToTeam',
      'unsetLeaderFromTeam'
    ],

    computed: {

    },

    methods: {
      //Removes a Member to a Team
      removeMemberFromTeam(member,team) {
        console.log("R",member,team, member instanceof Member);
        //Fires Emit to Parent Component with Member Object to Remove
        this.$emit('removeMemberFromTeam', member,team);
      },

      //Sets/Unsets a Leader from the Team
      setLeaderToTeam(member,team) {
        console.log("TR Set Leader", member, team);
        //Fires Emit to Parent Component with Member Object to set as Leader
        this.$emit('setLeaderToTeam', member,team);
      },
      unsetLeaderFromTeam(member,team){
        //Fires Emit to Parent Component with Member Object to unset as Leader
        this.$emit('unsetLeaderFromTeam',member,team);
      }
    }
}
</script>


<style scoped>
.team-list-container {
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: fit-content;
}

.EmptyMsg {
  background: rgba(200,200,200,0.8);
  border: solid 1px white;
  border-radius: 10px;
  width: fit-content;
  margin: 20vh auto;
  padding: 2vh;
  text-align: center;
  font-size: 5vh;
}

</style>