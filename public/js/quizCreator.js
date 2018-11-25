var socket = io();
var loader = document.querySelector('.loader');

function updateDatabase(){
    var name = document.getElementById('name').value;
    var qty = document.getElementById('qty').value;

    showLoader();
    fetch(`https://wth-wiki-qwiz-be.herokuapp.com/api/trivia/${qty}?s=Any`)
        .then(response => response.json())
        .then(json => {
            hideLoader();
            var quiz = {id: 0, "name": name, "questions": json.questions};
            socket.emit('newQuiz', quiz);
        })
        .catch(err => {
            console.log(err);
            alert('Sorry, try later');
            hideLoader();
        });
}

//Called when user wants to exit quiz creator
function cancelQuiz(){
    if (confirm("Are you sure you want to exit? All work will be DELETED!")) {
        window.location.href = "../";
    }
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}

socket.on('startGameFromCreator', function(data){
    window.location.href = "../../host/?id=" + data;
});






