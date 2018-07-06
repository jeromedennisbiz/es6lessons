let restaraunt = {
    name: "A2B",
    guestCapacity : 75,
    guestCount: 0,
    checkAvailability: function(partySize)
    {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function (fillSeat) {
        this.guestCount += fillSeat;
    },
    removeParty: function (removeSeat) {
        this.guestCount -= removeSeat;
    }
};

// let seatParty = function(fillSeat)
// {
//     restaraunt.guestCount += fillSeat;
// }

// let removeParty = function (removeSeat) {
//     restaraunt.guestCount -= removeSeat;
// }

console.log(restaraunt.checkAvailability(50));
restaraunt.seatParty(72);
console.log(restaraunt.checkAvailability(4));
restaraunt.removeParty(5);
console.log(restaraunt.checkAvailability(4));