let commentsContainer = document.querySelector(".comment");
let commentSection = document.querySelector(".comment__container");
let commentForm = document.querySelector(".comment__form");


commentsArray = [
    {   date: "02/17/2021",
        fullName: "Connor Walton",
        content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves     reverence. Let us appreciate this for what it is and what it contains."
    },
    {   date: "01/09/2021",
        fullName: "Emilie Beach",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {   date: "12/20/2020",
        fullName: "Miles Acosta",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
]

//function that creates comment card elements by taking in an array of objects
function displayComment(newComments) {
    commentSection.innerHTML = null;
    for (let i=0; i< commentsArray.length; i++) {
        
        // create comment card and make child of comments section
        let commentCard = document.createElement("div");
        commentSection.appendChild(commentCard);
        commentCard.classList.add("comment__card");

            //create avatar
            let commentAvatar = document.createElement("div");
            commentCard.appendChild(commentAvatar);
            commentAvatar.classList.add("comment__avatar");


            //create content div
            let commentContent = document.createElement("div");
            commentCard.appendChild(commentContent);
            commentContent.classList.add("comment__content");

                // create card header and make child of comment card
                let commentHeader = document.createElement("div");
                commentContent.appendChild(commentHeader);
                commentHeader.classList.add("comment__header");

                    //create card name title and make child of comment header
                    let commentTitle = document.createElement("h4");
                    commentHeader.appendChild(commentTitle);
                    commentTitle.classList.add("comment__title");

                    commentTitle.innerText=commentsArray[i].fullName;

                    //TODO CREATE TIMESTAMP
                    let commentTime = document.createElement("p");
                    commentHeader.appendChild(commentTime);
                    commentTime.classList.add("comment__time");


                    commentTime.innerText=commentsArray[i].date;
                    
                //create card text and make child of comment content 
                let commentText = document.createElement('p');
                commentContent.appendChild(commentText);
                commentText.classList.add("comment__text");

                commentText.innerText=commentsArray[i].content;
    }
}

//envoke the function to create the 3 default comments
displayComment(commentsArray)


//timestamp to date format mm/dd/yyyy function

let formatDate = (timestamp) => {
    let dateValue=timestamp.getDate().toString().padStart(2,'0');
    let month = timestamp.getMonth()+1;
    let monthValue = month.toString().padStart(2,'0');
    let yearValue = timestamp.getFullYear().toString();
    return monthValue + "/" + dateValue + "/" + yearValue;
}

//----New Comments----//
//extract data input by user in comment section
function commentHandler() {
    let newName = event.target.commentName.value;
    let newComment = event.target.commentComment.value;
    let timeStamp = new Date();
    let newDate = formatDate(timeStamp);

    let newCommentObj = {
        date: newDate,
        fullName: newName,
        content: newComment,
    }

    commentsArray.unshift(newCommentObj);
    commentForm.reset();
}

//event listener for the form to envoke display comment function
commentForm.addEventListener("submit", (event) => 
    {
    event.preventDefault();
    displayComment(commentHandler());
    }
)
