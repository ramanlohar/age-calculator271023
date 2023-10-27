const newHFColor = localStorage.getItem("hf-color")
const bodycolor = localStorage.getItem("background-color")
    localStorage.setItem("hf-color", newHFColor);
    const chfc = document.querySelector("header");
    chfc.style.backgroundColor = newHFColor;
    const cfhc = document.querySelector("footer");
    cfhc.style.backgroundColor = newHFColor;

    const body1 = document.querySelector("#body1");
    body1.style.backgroundColor = bodycolor;