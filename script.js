var btn = document.querySelectorAll(".btn");
var emoji = document.getElementById("emoji");
Array.from(btn).forEach((e, index) => {
    e.addEventListener("click", () => {
        for (let i=0;i<btn.length;i++) {
            btn[i].style.color = "white";
        }
        for (let j=0;j<=index;j++) {
            btn[j].style.color = "#ffc83d";
            // btn[j].style.color = "black";
        }
        switch (index) {
            case 0:
                emoji.innerHTML = "&#128531"
                break;
            case 1:
                emoji.innerHTML = "&#128530"
                break;
            case 2:
                emoji.innerHTML = "&#128528"
                break;
            case 3:
                emoji.innerHTML = "&#128578"
                break;
            case 4:
                emoji.innerHTML = "&#128512"
                break;
        }
    })

})