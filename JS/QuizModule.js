
// const quiz = new QuizModule(page.quiz, "learntext");
// quiz.generate();

class QuizModule {
    // special function, when making instance = not type "construktor" but name of class
    constructor(data, anchor = "main") {
        // variable for quiz data from page.quiz ()
        this.data = data;
        // ARRAY of choosed answers
        this.choosedAnswer = [];
        // variable for score
        this.score = 0;
        // variable for element where to put the quiz
        this.anchor = anchor;
    }

    generate() {
        const main = document.getElementById(this.anchor);

        const hr = document.createElement("hr");
        main.appendChild(hr);

        const quizDiv = document.createElement("div");
        quizDiv.className = "quiz";
        quizDiv.id = "quiz";
        
        const h1 = document.createElement("h1");
        h1.textContent = "Kvíz";
        quizDiv.appendChild(h1);
        
        const quizContainer = document.createElement("div");
        quizContainer.id = "quiz-container";
        quizContainer.className = "quiz-container";
        quizDiv.appendChild(quizContainer);
        
        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons";
        
        const submitButton = document.createElement("button");
        submitButton.textContent = "Vyhodnotit";
        submitButton.id = "submit";
        submitButton.onclick = this.submit.bind(this);
        buttonsDiv.appendChild(submitButton);
        
        const reloadButton = document.createElement("button");
        reloadButton.textContent = "Zkusit znovu";
        reloadButton.id = "reload";
        reloadButton.style.visibility = "hidden";
        reloadButton.onclick = this.reset.bind(this);
        buttonsDiv.appendChild(reloadButton);
        
        const showButton = document.createElement("button");
        showButton.textContent = "Ukázat odpovědi";
        showButton.id = "show";
        showButton.style.visibility = "hidden";
        showButton.onclick = this.show.bind(this);
        buttonsDiv.appendChild(showButton);
        
        quizDiv.appendChild(buttonsDiv);
        main.appendChild(quizDiv);
        
        quizContainer.innerHTML = ""; // Clear previous quiz content
        
        // questionData = ...   , index = number from 0 
        this.data.forEach((questionData, index) => {
            // element section for each question and answers
            const questionSection = document.createElement("section");
            questionSection.id = `sec${index}`;
            
            // question
            const questionTitle = document.createElement("h3");
            // content of h3 is content of question in pages.js
            questionTitle.textContent = questionData.question;
            
            questionSection.appendChild(questionTitle);
            
            questionData.answers.forEach((answer, answerIndex) => {
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `ot${index + 1}`;
                input.id = `${index + 1}.${answerIndex + 1}`;
                input.className = "quiz-answer";
                input.value = answerIndex + 1;
                // adds eventHandler for onclick, executes function response 
                input.onclick = () => this.response(index, input); 

                const label = document.createElement("label");
                label.id = `l${index + 1}.${answerIndex + 1}`;
                label.htmlFor = `${index + 1}.${answerIndex + 1}`;
                label.className = "quiz-answer-label";
                label.textContent = answer;

                const br = document.createElement("br")

                questionSection.appendChild(input);
                questionSection.appendChild(label);
                questionSection.appendChild(br);
            });

            quizContainer.appendChild(questionSection);
        });
    }

    // selected = selected input,answer,
    response(question_number, selected) {
        // adds value(1,2,3) of selected input to array of choosed answers, in place of number of question(section)
        this.choosedAnswer[question_number] = selected.value;
        // console.log(this.choosedAnswer)
    }

    submit() {
        for (let i = 0; i < this.data.length; i++) {

            console.log(this.choosedAnswer[i])

            // if choosed answer (in section i) is the same as correct answer (in ):
            if (this.choosedAnswer[i] == this.data[i].correctAnswer) {
                this.score++;
                
                // variable = id of choosed answer which is correct
                let correctLabelId = `l${i + 1}.${this.choosedAnswer[i]}`;
                // variable for finding label with correct label
                let correctLabel = document.getElementById(correctLabelId);

                // needed, becuase when no answer is choosed, correctLabel is null and can't add class
                if (correctLabel) {
                    correctLabel.classList.add("correct");
                }
            } else {
                // else = choosed answer is not correct

                let wrongLabelId = `l${i + 1}.${this.choosedAnswer[i]}`;
                let wrongLabel = document.getElementById(wrongLabelId);

                // needed, becuase when no answer is choosed, wrongLabel is null and can't add class
                if (wrongLabel) {
                    wrongLabel.classList.add("wrong");
                }
            }
        }

        if (!document.getElementById("result")) {
            var div = document.createElement("div");
            div.className = "result";
            div.id = "result";

            var label = document.createElement("label");
            label.className = "result_label";
            label.id = "result_label";

            var quizEl = document.getElementById("quiz");

            div.appendChild(label);

            quizEl.appendChild(div);
        }

        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result_label").innerHTML = this.score + "/" + this.data.length;
        document.getElementById("submit").disabled = true;
        document.getElementById("reload").style.visibility = "visible";
        document.getElementById("show").style.visibility = "visible";
        // var slf = document.getElementById("result");
        // console.log(slf.parentElement);

        // disable all quiz answers
        // disable hover on lables
        var inputs = document.getElementsByClassName("quiz-answer");
        var labels = document.getElementsByClassName("quiz-answer-label");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
            // labels[i].style.pointerEvents = "none";   
        }
    }

    show() {
        for (let i = 0; i < this.data.length; i++) {
            let correctAnswerId = `l${i + 1}.${this.data[i].correctAnswer}`;
            let correctAnswer = document.getElementById(correctAnswerId);
            correctAnswer.classList.add("correct");
        }
    }

    reset() {
            // Reset variables        
            this.choosedAnswer = [];
            this.score = 0;
            // Reset UI elements        
            const resultLabel = document.getElementById("result_label");
            if (resultLabel) {
                resultLabel.innerHTML = "";
                document.getElementById("result").style.visibility = "hidden";
            } 
            const submitButton = document.getElementById("submit"); 
            if (submitButton) { 
                submitButton.disabled = false; 
            } 
            const reloadButton = document.getElementById("reload"); 
            if (reloadButton) { 
                reloadButton.style.visibility = "hidden"; 
            } 
            const showButton = document.getElementById("show"); 
            if (showButton) { 
                showButton.style.visibility = "hidden"; 
            } 
            const inputs = document.getElementsByClassName("quiz-answer"); 
            for (let i = 0; i < inputs.length; i++) { 
                inputs[i].checked = false; inputs[i].disabled = false; 
            } 
            const labels = document.querySelectorAll(".quiz-answer + label"); 
            labels.forEach(label => {
                label.classList.remove("correct", "wrong");
                // labels[i].style.pointerEvents = "all";  
            });
        }


    }

export default QuizModule;