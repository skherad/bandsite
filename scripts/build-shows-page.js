let showUrl="https://project-1-api.herokuapp.com/showdates?api_key=4b1f3cfb-aeb7-43a8-9182-727c09dafdae"

let showContainer = document.querySelector(".show");

//desktop & tablet table header
let labelArray = ["DATE", "VENUE", "LOCTION"];

labelArray.forEach((label) => {
    let dateLabelNoMobile = document.createElement("div");
    dateLabelNoMobile.classList.add("show__label-nonmobile");
    dateLabelNoMobile.innerText = label;
    showContainer.appendChild(dateLabelNoMobile);
})


//function to display show data
let displayShow = (showsArray) => {
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
        // convert date format to mm/dd/yyyy
        dateValue.innerText = new Date(showsArray[i].date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });


        //paragraph for place label - mobile
        let placeLabel = document.createElement("p");
        placeLabel.classList.add("show__label-mobile");
        placeLabel.innerText = "place";
        showCard.appendChild(placeLabel);

        //paragraph for show place values
        let placeValue = document.createElement("p");
        placeValue.classList.add("show__text");
        showCard.appendChild(placeValue);

        placeValue.innerText = showsArray[i].place;


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
}}



// get shows data from api
axios.get(showUrl).then((response) => {
    console.log(response.data)
    displayShow(response.data)

    let showCardEvents = document.querySelectorAll(".show__card");
    // event listener for selected row
    showCardEvents.forEach(showCardEvent => {
        showCardEvent.addEventListener("click", (event) => {

            showCardEvents.forEach((card) => {
                card.classList.remove("show__card--selected");
            })
            event.currentTarget.classList.add("show__card--selected");
        })
    })
})
