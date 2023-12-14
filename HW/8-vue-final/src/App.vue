<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Final        -->
<!-- Date: 8 December 2023          -->
<!-- Desc: Root Component for Vue   -->

<template>
    <!-- Navigation Bar for SPA -->
    <NavBar/>
    <!-- Mounts the Router and the Corresponding View -->
    <RouterView
        :sessions="sessions"
        @toggleSession="toggleSession"
        @filterByCategory="filterByCategory"
    />

    <!--  <RouterView-->
    <!--      :members="members"-->
    <!--      :teams="teams"-->
    <!--      @addMemberToTeam="addMemberToTeam"-->
    <!--      @removeMemberFromTeam="removeMemberFromTeam"-->
    <!--      @setLeaderToTeam = "setLeaderToTeam"-->
    <!--      @unsetLeaderFromTeam = "unsetLeaderFromTeam"-->
    <!--  />-->

    <!-- Footer Bar with App Info -->
    <Footer/>
</template>

<script>
//Import the Navbar Component
import NavBar from './components/Sections/NavBar.vue';
//Import the Navbar Component
import Footer from './components/Sections/Footer.vue';

//Import the JSON Data Containing the Members
import sessionsJSON from './data/Sessions.json';
//Import the Session Class to Construct Session Objects
import Session from './classes/Session.js';
const sessions = sessionsJSON.data.sessions.map(sessionData => new Session(sessionData));
console.log(sessions);

export default {

  components: {
    NavBar,
    Footer,
  },

  data() {
    return {
      sessions: sessions,
      filter : {
        active: false,
        value: null,
      }
    }
  },

  methods: {
    //Filter the Sessions Array by Categories
    filterByCategory(category) {
      //As long as the incoming category value isn't the same as the existing filter value, set the filter on
      if(category !== this.filter.value) {
        this.filter.active = true;
        this.filter.value = category;
      }

      else {
        //If the Filter is already active for the same category set the filter active state as false
        this.filter.active = false;
        //Set the Filter Value to Null
        this.filter.value = null;
      }

      console.log(this.filter);
    },

    //Update the Session in the Sessions Array to be Added
    toggleSession(sessionObj) {
      this.sessions.forEach( (session) => {
        if(session===sessionObj) { session.added = !session.added}
      })
      console.log(this.sessions);
    }

    // //Method to Add Member to a Team
    // addMemberToTeam(member, definedTeamName) {
    //   // this.$emit('addMemberToTeam', member, definedTeamName);
    //
    //   //Create a New Team or Bind Existing Team
    //   let team = this.teams.findOrCreate(definedTeamName);
    //   //Add the Member to the Team
    //   team.addMember(member);
    //   //Add/Update Teams with the Team
    //   this.teams.add(team);
    //
    //   //Debug: Check Teams
    //   //console.log("App.Vue:",this.teams);
    // },
    //
    // //Method to Remove Member from a Team
    // removeMemberFromTeam(member) {
    //   console.log("App", member);
    //   // this.$emit('removeMemberFromTeam',member);
    //
    //   //Identify Existing Team by Member
    //   let team = this.teams.findTeamByMember(member);
    //   //Remove Member from the Team
    //   team.removeMember(member);
    //   //Update Teams with the Team
    //   this.teams.add(team);
    //   //Cleanse Any Empty Team from the Teams
    //   this.teams.cleanse();
    //
    //   //Debug: Check Teams
    //   //console.log("App.Vue:",this.teams);
    // },
    //
    // //Sets a Leader from the Team
    // setLeaderToTeam(member) {
    //   //console.log("Executing the Set Leader Process...")
    //   //Identify Existing Team by Member
    //   let team = this.teams.findTeamByMember(member);
    //   //Set Member as Leader for the Team
    //   team.setLeader(member);
    //   //Update Teams with the Team
    //   this.teams.add(team);
    //
    //   //Debug: Check Teams
    //   console.log("App.Vue:",this.teams);
    // },
    //
    // //Unsets a Leader from the Team
    // //Note it can either use a member to reverse find the team, or directly accept a team
    // unsetLeaderFromTeam(member){
    //   console.log("Executing the Unset Leader Process...")
    //   //Identify Existing Team by Member
    //   let team = this.teams.findTeamByMember(member);
    //   //Unset Leaders for the Team
    //   team.unsetLeader();
    //   //Update Teams with the Team
    //   this.teams.add(team);
    //
    //   //Debug: Check Teams
    //   //console.log("App.Vue:",this.teams);
    // }
  } // End of Vue Methods
}
</script>

<style>

/* Global Styles */

/** Google Font Import
 * Header Fonts: Montserrat | Raleway
 * Sans-serif Fonts: Poppins
 * Serif Fonts: Lora
 */
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* Establish Root Variables */
:root {
  --primary-color: rgb(66, 184, 131);
  --primary-color-bright: rgb(99, 255, 190);
  --primary-color-dark: rgb(33, 92, 65);

  --complimentary-color: rgb(187, 67, 121);
  --complimentary-color-bright: rgb(255, 100, 180);
  --complimentary-color-dark: rgb(94, 34, 60);

  --background-color: rgba(40,40,40,1);
  --background-color-translucent: rgba(40,40,40,0.8);
  --background-color-light: rgba(80,80,80,1);
  --background-color-dark: rgba(0,0,0,1);

  --color-white-translucent: rgba(255,255,255, 0.8);
  --color-white: rgba(255,255,255, 1);

  --text-color: rgba(255,255,255,0.8);
  --text-color-emphasis: rgba(255,255,255,1);
  --text-color-dim: rgba(200,200,200,0.8);
  --text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.7);

  --emphasis-color: rgba(255,255,255,1);
  --primary-gradient: linear-gradient(0deg, rgba(17, 46, 33, 0.8), rgba(34, 92, 66, 0.8) 25%, rgba(68, 184, 132, 0.8));

  --border-radius-extreme: 20px;
  --border-radius-normal: 10px;
  --border-radius-minor: 5px;

  --glow:
      0 0 3px var(--color-white),
      0 0 5px var(--color-white);

  --transitions: font-size 200ms, border-width 50ms, box-shadow 50ms, padding 50ms;

  --nav-bar-size: 8vh;
  --footer-bar-size: calc(var(--nav-bar-size)*0.6);
}

html, body, div#app {
  height: 100% !important;
  margin: 0;
  padding: 0px;
}

/* Set the Size of the Main to Expand to the Page*/
div#app {
  display: flex;
  flex-flow: column nowrap;
}
main {
  flex:1;
}

/* Establish the Background Pattern */
body {
  /* Diamond Background Pattern */
  --s: 4vh; /* Size of Diamonds*/
  /* Color of the Diamond Background */
  --c: #202020;
  /* Color of the Diamond Foreground */
  --a: #151515;
  --_g:
      #0000 calc(-650%/13) calc(50%/13),var(--c) 0 calc(100%/13),
      #0000 0 calc(150%/13),var(--c) 0 calc(200%/13),
      #0000 0 calc(250%/13),var(--c) 0 calc(300%/13);
  --_g0: repeating-linear-gradient( 45deg,var(--_g));
  --_g1: repeating-linear-gradient(-45deg,var(--_g));
  background:
      var(--_g0),var(--_g0) var(--s) var(--s),
      var(--_g1),var(--_g1) var(--s) var(--s) var(--a);
  background-size: calc(2*var(--s)) calc(2*var(--s));

  display: flex;
  flex-direction: column;

}

.wrapper {
  flex: 1;
}

* {
  color: var(--text-color);
  font-family: 'Poppins','Trebuchet MS', sans-serif;
}

/* Reset Headers */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  color: var(--text-color-emphasis);
  font-family: 'Raleway', inherit;
  vertical-align: baseline;
}

/* Scaling Header Text Size */
h1 {
  font-size: 2em;
}  h2 {
     font-size: 1.5em;
   }  h3 {
        font-size: 1.25em;
      }  h4 {
           font-size: 1.125em;
         }  h5 {
              font-size: 1.0625em;
            }  h6 {
                 font-size: 1.03125em;
               }

h1, h2, h3 {
  color: var(--primary-color-bright);
  text-shadow: var(--text-shadow);
}

div {
  padding: 0px;
}

hr {
  border: solid 1px var(--background-color-light);
  width: 100%;
}

div .shaper {
  padding: 0;
}

RouterView, main {
  flex: 1;
}

div.FlexEnd {
  display: flex;
  box-sizing: border-box !important;
  width: 100% !important;
  flex-flow: row wrap !important;
  justify-content: space-between !important;
}








/* Category Style */

.SessionCategories .category {
  margin: 0 5px;
  padding: 3px 5px;
  border: solid 1px var(--background-color-dark);
  background: var(--background-color-dark);
  border-radius: var(--border-radius-normal);
  transition: var(--transitions);;
}

.SessionCategories .category:hover {
  border: 1px solid white;
  cursor: pointer;
  /*font-size: 0.85em;
  padding: 5px; */
  box-shadow: var(--glow)
}


</style>