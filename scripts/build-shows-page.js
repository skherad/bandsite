let showContainer = document.querySelector(".show");

//create shows array
let showsArray = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Frnacisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Frnacisco, CA",
    },    
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Frnacisco, CA",
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Frnacisco, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Frnacisco, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Frnacisco, CA",
    },
]

//desktop & tablet table header
let labelArray = ["DATE", "VENUE", "LOCTION"];

for (let i=0 ; i < labelArray.length ; i++) {
    let dateLabelNoMobile = document.createElement("div");
    dateLabelNoMobile.classList.add("show__label-nonmobile");
    dateLabelNoMobile.innerText = labelArray[i];
    showContainer.appendChild(dateLabelNoMobile);
}


//create the elements for show cards
for(let i=0; i < showsArray.length; i++) {
    //shows card element
    let showCard = document.createElement("div");
    showCard.classList.add("show__card");
    showContainer.appendChild(showCard);

        //paragraph for date label - mobile
        let dateLabel = document.createElement("p");
        dateLabel.classList.add("show__label-mobile");
        dateLabel.innerText = "DATE";
        showCard.appendChild(dateLabel);

        //paragraph for show date values
        let dateValue = document.createElement("p");
        dateValue.classList.add("show__text", "show__text--bold");
        showCard.appendChild(dateValue);

        dateValue.innerText = showsArray[i].date;


        //paragraph for venue label - mobile
        let venueLabel = document.createElement("p");
        venueLabel.classList.add("show__label-mobile");
        venueLabel.innerText = "VENUE";
        showCard.appendChild(venueLabel);

        //paragraph for show venue values
        let venueValue = document.createElement("p");
        venueValue.classList.add("show__text");
        showCard.appendChild(venueValue);

        venueValue.innerText = showsArray[i].venue;


        //paragraph for location label - mobile
        let locLabel = document.createElement("p");
        locLabel.classList.add("show__label-mobile");
        locLabel.innerText = "LOCATION";
        showCard.appendChild(locLabel);

        //paragraph for show location values
        let locValue = document.createElement("p");
        locValue.classList.add("show__text");
        showCard.appendChild(locValue);

        locValue.innerText = showsArray[i].location;

        // button to buy tickets
        let ticketBtn = document.createElement("button")
        ticketBtn.classList.add("show__button");
        showCard.appendChild(ticketBtn);

        ticketBtn.innerText = "BUY TICKETS"
}


let showCardEvents = document.querySelectorAll(".show__card");

// event listener for hover - mouse enter
showCardEvents.forEach(showCardEvent => {
    showCardEvent.addEventListener("mouseenter", (event) => {
        event.target.classList.add("show__card--hover")
    })
} )
// event listener for hover - mouse leave
showCardEvents.forEach(showCardEvent => {
    showCardEvent.addEventListener("mouseleave", (event) => {
        event.target.classList.remove("show__card--hover")
    })  
} )


// event listener for selected row
showCardEvents.forEach(showCardEvent => {
    showCardEvent.addEventListener("click", (event) => {

        showCardEvents.forEach((card) => {
            card.classList.remove("show__card--selected");
        })
        event.currentTarget.classList.add("show__card--selected");
    })

})

