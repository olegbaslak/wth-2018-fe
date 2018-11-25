var socket = io();
var questionNum = 1; //Starts at two because question 1 is already present

function updateDatabase(){
    var name = document.getElementById('name').value;
    var qty = document.getElementById('qty').value;

    fetch(`https://wth-wiki-qwiz-be.herokuapp.com/api/trivia?count=${qty}`)
        .then(response => response.json())
        .then(json => {
            var quiz = {id: 0, "name": name, "questions": json.questions};
            socket.emit('newQuiz', quiz);
        });
}

//Called when user wants to exit quiz creator
function cancelQuiz(){
    if (confirm("Are you sure you want to exit? All work will be DELETED!")) {
        window.location.href = "../";
    }
}

socket.on('startGameFromCreator', function(data){
    window.location.href = "../../host/?id=" + data;
});






