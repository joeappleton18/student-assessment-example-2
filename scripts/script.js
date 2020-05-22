// submit-idea.html code

    function sumbitIdeaLoad() {
        // button listener for the submit-idea.html button click
        var ideaButton = document.getElementById('submit-idea-button');
        ideaButton.addEventListener('click', ideaButtonClicked)
    }

    function ideaButtonClicked(){
        var ideaStaffName = document.getElementById('staff-name').value;
        var ideaTitle = document.getElementById('title').value;
        var idea = document.getElementById('idea').value;
        var ideaStaffInput = document.getElementById('staff-name');
        var ideaTitleInput = document.getElementById('title');
        var ideaInput = document.getElementById('idea');
        var submitDate =new Date();
        var likes = 0;
        var ideaErrStr = ''

        // test that all fields are complete and highlight incorrect ones, adding them to the warning string
        if(ideaStaffName == ''){
            ideaStaffInput.style.border = 'solid #ff0000';
            ideaErrStr =ideaErrStr + 'Staff Name\n';
        }
        else {
            ideaStaffInput.style.border = 'none';
        }
        if(ideaTitle == ''){
            ideaTitleInput.style.border = 'solid #ff0000';
            ideaErrStr = ideaErrStr + 'Idea Title\n';
        }
        else {
            ideaTitleInput.style.border = 'none';
        }
        if(idea == ''){
            ideaInput.style.border = 'solid#ff0000';
            ideaErrStr = ideaErrStr + 'Idea\n';
        }
        else {
            ideaInput.style.border = 'none';
        }
        
        // if any fields are incomplete display warning, otherwise proceed
        if(ideaStaffName == '' || ideaTitle == '' || idea == '') {
            window.alert('Please complete the following fields:\n' + ideaErrStr);
        }
        else {
            var newIdea = {
                staffName: ideaStaffName,
                ideaTitle: ideaTitle,
                idea: idea,
                submitDate: submitDate,
                likes: likes
            };
            
                // the below demonstrates that the data has been passed from the form to newIdea by logging to console and would be removed in production
                // in a production situation, newIdea would be further passed into a server-side SQL database which would then be retrieved and displayed on ideas.html
                console.log(newIdea);

                // button element used instead of input type='submit' to enable logging to console without refresh
                // in production this would be changed to input type='submit'
                // the below code clears the form and wil need to be deleted from production

                var delIdea = document.getElementById('submit-idea-form');
                delIdea.reset();

                // end of code to be deleted
        }
        }

// end of submit-idea.html code

// challenges.html code

    function challengeLoad() {
        // event listener for the challenges.html button click
        var challengeButton = document.getElementById('submit-challenge-button');
        challengeButton.addEventListener('click', challengeButtonClicked)

        // this list would be brought in via API fro server-side in production
        var responseList = [
            'Set up regular coffee mornings, after work/weekend drop-ins, and invite people along.',
            'Make sure everyone is set up on LinkedIN and link them to a local office account.',
            'Make more resources available online and send nudges to encourage use.',
            'Offer free additional training.'
        ]

        // create a response card for each response and populate on screen
        for (let i=0; i<responseList.length; i++) {
            var newCard = document.createElement('div');
            newCard.setAttribute('class', 'response-card');

            var newResponse = document.createElement('p');
            var responseValue = responseList[i];
            newResponse.innerHTML = responseValue;

            newCard = document.getElementById('challenges-right-content').appendChild(newCard);
            newCard.appendChild(newResponse);
        }
    }

    // when challenges.html response button clicked
    function challengeButtonClicked(){
        var challengeStaffName = document.getElementById('challenge-staff-name').value;
        var challengeTitle = document.getElementById('challenge').innerText;
        var challengeResponse = document.getElementById('challenge-response').value;
        var challengeStaffInput = document.getElementById('challenge-staff-name');
        var challengeResponseInput = document.getElementById('challenge-response');
        var challengeSubmitDate =new Date();
        var challengeErrStr = ''

        // test that all fields are complete and highlight incorrect ones, adding them to the warning string
        if (challengeStaffName == ''){
            challengeStaffInput.style.border = 'solid #ff0000';
            challengeErrStr = challengeErrStr + 'Staff Name\n'
        }
        else {
            challengeStaffInput.style.border = 'none';
        }
        if (challengeResponse == ''){
            challengeResponseInput.style.border = 'solid #ff0000';
            challengeErrStr = challengeErrStr + 'Response\n'
        }
        else {
            challengeResponseInput.style.border = 'none';
        }

        // if any fields are incomplete display warning, otherwise proceed
        if (challengeStaffName == ''|| challengeResponse == '') {
            window.alert('Please complete the following fields:\n' + challengeErrStr);
        }
        else {
            var newResponse = {
                staffName: challengeStaffName,
                challengeTitle: challengeTitle,
                challengeResponse: challengeResponse,
                submitDate: challengeSubmitDate,
            };

            // create new response card and append
            var addCard = document.createElement('div');
            addCard.setAttribute('class', 'response-card');

            var addResponse = document.createElement('p');
            var responseValue = newResponse.challengeResponse;
            addResponse.innerHTML = responseValue;

            addCard = document.getElementById('challenges-right-content').appendChild(addCard);
            addCard.appendChild(addResponse);

                // the below demonstrates that the data has been passed from the form to newResponse by logging to console and would be removed in production
                // in a production situation, newIdea would be further passed into a server-side SQL database which would then be appended to the existing responses already being loaded in   
                console.log(newResponse);

                // button element used instead of input type='submit' to enable logging to console without refresh
                // in production this would be changed to input type='submit'
                // the below code clears the form and wil need to be deleted from production

                var delResponse = document.getElementById('challenge-form');
                delResponse.reset();

                // end of code to be deleted

        }
    }

// end of challenges.html code

// ideas.html code
    function ideasLoad() {

        // load in ideasList to ideas.html
        // in a production environment this would be facilitated by an API to a server-side database to obtain the data
        var ideasList = [{
            ideaTitle: 'My first idea',
            idea: 'This is the content of my first idea. Show this first. I really want to write something detailed here to make the idea break over a few lines, but we do have a fairly large space to be working with so will have to write quite a lot which is a little bit tiresome, but there you go. Perhaps my idea should have been using lorem a couple of times and copying that across. Oh well, what\'s done is done',
            likes: 1
        },
        {
            ideaTitle: 'My second idea',
            idea: 'A lot less text here, thankfully!',
            likes: 10
        },
        {
            ideaTitle: 'My third idea',
            idea: 'A lot less text here, thankfully!',
            likes: 1
        }
        ]

        for (var i=0; i<ideasList.length; i++) {
            var newCard = document.createElement('div');
            newCard.setAttribute('class', 'idea-card');

            var newTitle = document.createElement('h3');
            var titleValue = ideasList[i].ideaTitle;
            newTitle.setAttribute('class', 'idea-header');
            newTitle.innerHTML = titleValue;

            var newIdea = document.createElement('p');
            var ideaValue = ideasList[i].idea;
            newIdea.setAttribute('class', 'idea-detail');
            newIdea.innerHTML = ideaValue;

            var newImg = document.createElement('img');
            var likeImg = 'likeImg' + i;
            newImg.setAttribute('class', 'idea-like-img');
            newImg.setAttribute('src', 'assets/like-empty.svg');
            newImg.setAttribute('alt', 'Thumbs-up icon indicating likes');
            newImg.setAttribute('id', likeImg);

            newImg.addEventListener('click', likeIdea);

            var newLikes = document.createElement('p');
            var likesValue = ideasList[i].likes;
            newLikes.setAttribute('class', 'idea-like-count');
            newLikes.setAttribute('id', 'idea-like-count' + i);
            newLikes.innerHTML = likesValue;

            newCard = document.getElementById('ideas-left').appendChild(newCard);
            newCard.appendChild(newTitle);
            newCard.appendChild(newIdea);
            newCard.appendChild(newImg);
            newCard.appendChild(newLikes);
        }
}

function likeIdea() {
    var thisImg = document.getElementById(this.id);
    var imgStr = thisImg.id;
    var thisSrc = thisImg.getAttribute('src');
    var indexNum = imgStr.substring(7,imgStr.length);
    var thisLikeCount = document.getElementById('idea-like-count' + indexNum);
    var thisLikeNum = parseInt(thisLikeCount.innerHTML);

    if (thisSrc == 'assets/like-empty.svg') {
        thisImg.setAttribute('src', 'assets/like-filled.svg');
        thisSrc = thisImg.getAttribute('src');
        thisLikeNum ++;
        thisLikeCount.innerHTML = thisLikeNum;

        // functionality would be required here to pass the updated like count back to the server
    }
    

    
}

// end of ideas.html code