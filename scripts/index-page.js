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
let displayComment = (newComments) => {
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

//----New Comments----//
//extract data input by user in comment section
let commentHandler = () => {
    let newName = event.target.commentName.value;
    let newComment = event.target.commentComment.value;
    let timeStamp = new Date();

    //timestamp to date format mm/dd/yyyy function
    let newDate = timeStamp.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })

    // create new comment object
    let newCommentObj = {
        date: newDate,
        fullName: newName,
        content: newComment,
    }

    //add new comment object to the begining of the original array
    commentsArray.unshift(newCommentObj);
    commentForm.reset();
}

//event listener for the form to envoke display comment function
commentForm.addEventListener("submit", (event) => 
    {
    event.preventDefault();
    
    // removes error class modifiers on resubmit
    event.target.commentComment.classList.remove("comment__comment--error");
    event.target.commentName.classList.remove("comment__name--error");

        // condition to have non empty values in input
        if (event.target.commentName.value === "" && event.target.commentComment.value === "") {
            event.target.commentName.classList.add("comment__name--error");
            event.target.commentComment.classList.add("comment__comment--error");

        } else if(event.target.commentName.value === "") {
            event.target.commentName.classList.add("comment__name--error");

        } else if (event.target.commentComment.value === "") { 
            event.target.commentComment.classList.add("comment__comment--error");

        } else {
            displayComment(commentHandler());
        }
    }
)

