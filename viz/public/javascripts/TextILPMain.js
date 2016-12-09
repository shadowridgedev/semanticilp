$(document).ready(function(){
    installSubmitClickEvent();
    answerCollectionRadioButton();
    knowledgeRadioButton();
    solverTypeSelector();
});

// var installClickEvents = function(){
//
// };

var installSubmitClickEvent = function() {
    $("#submitBtn").click(function() {
        $.ajax({
            type: 'POST',
            url: "/solve",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "data": "someData"
            })
        });
    });
};

var answerCollectionRadioButton = function(){
    $("#candidatesManual").change(function() {
            $("#candidateTextArea").prop("disabled", false);
        }
    );
    $("#candidateAuto").change(function() {
            $("#candidateTextArea").prop("disabled", true);
        }
    );
};

var knowledgeRadioButton = function(){
    $("#knowManual").change(function() {
            $("#knowTextArea").prop("disabled", false);
        }
    );
    $("#knowLucene").change(function() {
            $("#knowTextArea").prop("disabled", true);
        }
    );
};

var solverTypeSelector = function(){
    $("#selectTableILP").click(function() {
            $("#solver-dropdown").text("Solver: TableILP ")
        }
    );

    $("#selectSalience").click(function() {
            $("#solver-dropdown").text("Solver: Salience ")
        }
    );

    $("#selectLucene").click(function() {
            $("#solver-dropdown").text("Solver: Lucene ")
        }
    );
};