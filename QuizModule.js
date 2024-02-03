
class QuizModule {
    constructor(data, anchor = "main") {
        this.data = data;
        this.choosed_answer = [];
        this.score = 0;
        this.anchor = anchor;
    }

    generate() {
        const main = document.getElementById(this.anchor);

        const quizDiv = document.createElement("div");
        quizDiv.className = "quiz";
        quizDiv.id = "quiz";

        const h1 = document.createElement("h1");
        h1.textContent = "Kvíz";
        quizDiv.appendChild(h1);

        const quizContainer = document.createElement("div");
        quizContainer.id = "quiz-container";
        quizDiv.appendChild(quizContainer);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "buttons";
        buttonsDiv.style.display = "flex";
        buttonsDiv.style.justifyContent = "space-between";
        buttonsDiv.style.width = "430px";

        const submitButton = document.createElement("button");
        submitButton.textContent = "Vyhodnotit";
        submitButton.id = "submit";
        submitButton.onclick = this.submit.bind(this);
        buttonsDiv.appendChild(submitButton);

        const reloadButton = document.createElement("button");
        reloadButton.textContent = "Zkusit znovu";
        reloadButton.id = "reload";
        reloadButton.style.visibility = "hidden";
        reloadButton.onclick = () => location.reload();
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

        this.data.forEach((questionData, index) => {
            const questionSection = document.createElement("section");
            questionSection.id = `p${index}`;

            const questionTitle = document.createElement("h3");
            questionTitle.textContent = questionData.question;

            questionSection.appendChild(questionTitle);

            questionData.answers.forEach((answer, answerIndex) => {
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `ot${index + 1}`;
                input.id = `${index + 1}.${answerIndex + 1}`;
                input.className = "quiz-answer";
                input.value = answerIndex + 1;
                input.onclick = () => this.response(index, input);

                const label = document.createElement("label");
                label.id = `l${index + 1}.${answerIndex + 1}`;
                label.htmlFor = `${index + 1}.${answerIndex + 1}`;
                label.textContent = answer;

                questionSection.appendChild(input);
                questionSection.appendChild(label);
                questionSection.appendChild(document.createElement("br"));
            });

            quizContainer.appendChild(questionSection);
        });
    }

    response(question_number, selected) {
        this.choosed_answer[question_number] = selected.value;
    }

    submit() {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].correctAnswer == this.choosed_answer[i]) {
                this.score++;

                let correctLabelId = `l${i + 1}.${this.data[i].correctAnswer}`;
                let correctLabel = document.getElementById(correctLabelId);

                if (correctLabel) {
                    correctLabel.classList.add("correct");
                }
            } else {
                let wrongLabelId = `l${i + 1}.${this.choosed_answer[i]}`;
                let wrongLabel = document.getElementById(wrongLabelId);

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

        document.getElementById("result_label").innerHTML = this.score + "/" + this.data.length;
        document.getElementById("submit").disabled = true;
        document.getElementById("reload").style.visibility = "visible";
        document.getElementById("show").style.visibility = "visible";

        var slf = document.getElementById("result");
        console.log(slf.parentElement);

        // disable all quiz answers
        var inputs = document.getElementsByClassName("quiz-answer");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
    }

    show() {
        for (let i = 0; i < this.data.length; i++) {
            let correctAnswerId = `l${i + 1}.${this.data[i].correctAnswer}`;
            let correctAnswer = document.getElementById(correctAnswerId);
            correctAnswer.classList.add("correct");
        }
    }
}

export default QuizModule;
