/**
 * Author: Jay Annadurai
 * Date: 28 Nov 2023
 * File: Team.js
 * Project: 7-vue
 * Description: Class to Represent a Team full of Members
 */

//Import the Member Class
import Member from './Member';

class Team {
    /**
     * @param teamName - String Name of the Team
     * @param members - Array of Member Objects
     */
    constructor(teamName,...members) {
        this.name = teamName;
        // Filter out any non-Member instances if necessary or throw an error
        this.members = members.filter(member => member instanceof Member);
        // Set the Leader Property to Null
        this.leader = null;
    }


    /**
     * Add a Member into the Team
     * @param memberToAdd - Member Object to Insert into the Array of Members
     */
    addMember(memberToAdd) {
        //Error Handler
        if(!(memberToAdd instanceof Member)) { console.log("Added member is not of class type Member"); return this;}

        //Check if the existing array of Members already has a Member by that ID
        if (this.members.some(existingMember => existingMember.id === memberToAdd.id)) {
            console.log("Member with this ID already exists in the team");
            return this; // Return early if a member with the same ID already exists
        }

        //Update the Member's Team to the Name of the Team
        memberToAdd.team = this.name;

        //Push the Member into the Array
        this.members.push(memberToAdd);

        //Fluent Return
        return this;
    }//End of addMember Method

    /**
     * Remove a Member from the Team by Member Object or by Member ID
     * @param {Member|number} member - Member object or member ID to remove the corresponding Member Object
     * @return {Member|null} - Returns the removed Member Object, or null if not found
     */
    removeMember(memberToRemove) {

        console.log("From Remove Member", memberToRemove);

        //Initialize the memberToRemove's ID
        let memberToRemoveID = Member.returnMemberID(memberToRemove);

        // Find the member object with the specified ID
        const foundMemberToRemove = this.members.find(member => member.id === memberToRemoveID);

        // Error Handler - If there is no matching member
        if (!foundMemberToRemove) {
            console.log(`No matching member with an ID of ${memberToRemoveID} to remove`);
            return null;
        }

        // Error Handler - Ensure the Member is not the Leader
        if (foundMemberToRemove === this.leader) { this.unsetLeader(); }

        // Update the 'Team' property of the matching Member to ''
        foundMemberToRemove.team = '';

        // Filter out the member to remove
        this.members = this.members.filter(member => member.id !== memberToRemoveID);

        // Return the removed Member
        return foundMemberToRemove;

    }//End of removeMember Method

    /**
     * Set's one of the Team's Members as a Leader
     * @param memberToSetLeader - The Member Object or MemberID to set as the Leader
     * @return {Team} - Fluently Returns the Entire Team Object
     */
    setLeader(memberToSetLeader) {
        //Initialize the memberToSetLeader's ID
        let memberToSetLeaderID = Member.returnMemberID(memberToSetLeader);

        //Walk through the Array of Members and set their Leader Status to False
        this.members.forEach( (member) => {

            //If the Member's ID Matches, set that Team Member's Leader Property to the Leader
            if(member.id === memberToSetLeaderID) {

                //Set the Member to False and then Assign them to the Leader
                let leader = member.setLeader(true);

                //Set the Team's Leader Property
                this.leader = leader;

                //Return the Updated Leader to the Array
                return leader;

            }

            //Otherwise ensure the other members are not false
            else {
                return member.setLeader(false);
            };
        });

        //Fluent Return
        return this;
    }

    /**
     * Unsets the leader status from all members
     * @return {Team} - Fluently Returns the Entire Team Object
     */
    unsetLeader() {

        //Walk through the Array of Members and set All Members to False
        this.members.forEach((member) => {
            member.setLeader(false);
        });

        //Set the Team's Property to Have No Leader
        this.leader = null;

        //Fluent Return
        return this;
    }

    /**
     * Accepts a Team Object or a Team Name and then returns the Team Name
     * @param teamObjOrName
     * @return {string} teamName
     */
    static returnTeamName(teamObjOrName) {
        //Initialize the TeamName
        let teamName;

        // Check if 'team' is a Team object and extract the Name, otherwise treat it as a team Name
        if (teamObjOrName instanceof Team) {
            teamName = teamObjOrName.name;
        } else if (typeof teamObjOrName === 'number') {
            teamName = teamObjOrName;
        } else {
            console.log("The argument must be a Team object or a team name");
            return null;
        }

        //Return the TeamName
        return teamName;
    }


}//End of Teams Class

export default Team;
