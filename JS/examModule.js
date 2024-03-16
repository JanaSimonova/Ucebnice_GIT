class examModule {
    constructor(data, anchor = "main") {
        // variable for exam data from page.exam
        this.data = data;
        // variable for element where to put the quiz
        this.anchor = anchor;
    }

    generate2() {
        // console.log(this.data)

        const main = document.getElementById(this.anchor);

        const hr = document.createElement("hr");
        main.appendChild(hr);

        const h1 = document.createElement("h1")
        h1.textContent = "Praktický příklad"
        main.appendChild(h1)

        const examTile1 = document.createElement("div")
        examTile1.className = "exam-tile"
        main.appendChild(examTile1)
        
        const examTile2 = document.createElement("div")
        examTile2.className = "exam-tile"
        main.appendChild(examTile2)
        
        
        const title1 = document.createElement("h2")
        title1.textContent = "Zadání"
        title1.onclick = () => this.toggleExamContent(examTile1); 
        examTile1.appendChild(title1)
        
        const title2 = document.createElement("h2")
        title2.textContent = "Řešení"
        title2.onclick = () => this.toggleExamContent(examTile2); 
        examTile2.appendChild(title2)


        const examContentDiv1 = document.createElement("div")
        examContentDiv1.className = "exam-content"
        examTile1.appendChild(examContentDiv1)
        
        const examContentDiv2 = document.createElement("div")
        examContentDiv2.className = "exam-content"
        examTile2.appendChild(examContentDiv2)


        const content1 = document.createElement("p")
        content1.innerHTML = this.data[0].task
        examContentDiv1.appendChild(content1)

        const content2 = document.createElement("p")
        content2.textContent = this.data[0].solution
        examContentDiv2.appendChild(content2)
        
        // console.log(this.data[0].task)
        // console.log(this.data[0].solution)
    }

    toggleExamContent(tile) {

        var content = tile.getElementsByClassName('exam-content')[0];

        if (content) {
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        } else {
            console.log("kliknuto na tile")
            // console.error("No element with class 'exam-content' found within the clicked tile.");
        }
    }

}

export default examModule;