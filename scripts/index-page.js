let commentsContainer = document.querySelector(".comment");
let commentSection = document.querySelector(".comment__container");
let commentForm = document.querySelector(".comment__form");

let commentUrl="https://project-1-api.herokuapp.com/comments?api_key=4b1f3cfb-aeb7-43a8-9182-727c09dafdae"

//function that creates comment card elements by taking in an array of objects
let displayComment = (commentsArray) => {
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

                    commentTitle.innerText=commentsArray[i].name;

                    //TODO CREATE TIMESTAMP
                    let commentTime = document.createElement("p");
                    commentHeader.appendChild(commentTime);
                    commentTime.classList.add("comment__time");
                    
                    // let timeStamp = newComments[i].timestamp.toLocaleDateString();
                    //???????????????????????

                    commentTime.innerText=commentsArray[i].timestamp;
                    
                //create card text and make child of comment content 
                let commentText = document.createElement('p');
                commentContent.appendChild(commentText);
                commentText.classList.add("comment__text");

                commentText.innerText=commentsArray[i].comment;
    }
}

// post new comment
commentForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    let newName = event.target.commentName.value;
    let newComment = event.target.commentComment.value;

    // create new comment object
    let newCommentObj = {
        name: newName,
        comment: newComment,
    }

    // post new comment to api
    axios.post(commentUrl, newCommentObj)
    .then((result) => {
        console.log(result)
        
        // get updated array of comments
        axios.get(commentUrl).then((response) => {
            console.log(response);
            let sortedArray = response.data.sort((a,b) => {
                return b.timestamp - a.timestamp;
            })
            displayComment(sortedArray)
        })
    })

    // reset form
    commentForm.reset();

})

// initial default 3 comments
axios.get(commentUrl)
.then((response) => {
    let commentsArray = response.data.sort((a,b) => {
        return b.timestamp - a.timestamp;
    });
    displayComment(commentsArray)
})



