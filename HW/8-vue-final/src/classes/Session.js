/* Auth: Jay Annadurai            */
/* Proj: N320: Vue - Final        */
/* Date: 8 December 2023          */
/* Desc: Represents a Session Obj */

class Session {

    /*
    id: data type and required
    title: data type and required
    presenter: data type and required
    description: data type
    tags: data type
    sTime: data type that must be one of the following: 8, 10, 13, 15, 20
    sDay: data type that must be one of the following: Thursday, Friday, Saturday
    added: data type with a default value
     */
    constructor({
        id,
        title,
        presenter,
        sTime,
        sDay,
        tags = [],
        desc = '',
        added = false
    }) {
        const acceptedTimes = [8,10,13,15,20]
        const acceptedDays = ["Thursday", "Friday", "Saturday"]

        if (!id || !title || !presenter) {
            console.log(id);
            throw "Missing Required Data";
        }

        if (!acceptedTimes.includes(sTime)) {
            console.log(id);
            throw "Invalid Time";
        }

        if(!acceptedDays.includes(sDay)) {
            console.log(id);
            throw "Invalid Day";
        }

        this.id = id;
        this.title = title;
        this.presenter = presenter;
        this.sTime = sTime;
        this.sDay = sDay;
        this.added = added;
        this.desc = desc;
        this.tags = tags;
    }
}

export default Session;