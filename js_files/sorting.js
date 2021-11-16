let delay = 900;
let flag = 1;
defaultNewArray();
speed();

function waitforme(ms) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, ms);
    })

}

function defaultNewArray() {
    let arr = [];
    let arr_size = document.querySelector("#arr_sz").value;
    for (let i = 0; i < 100; i++) {
        arr[i] = Math.floor(Math.random() * 450) + 1;
    }
    for (let i = 0; i < 100; i++) {
        // creating a new div element to be pushed in div(bdy_comp)
        let bar = document.createElement("div");
        // // choosing a name for the class to be given to new div created
        let className = "bar";
        // // // assigning a class name to the element created
        bar.classList.add(className);
        bar.style.height = (arr[i]) + "px";
        bar.style.width = "0.8%";
        bar.style.backgroundColor = "#8785A2";
        bar.style.margin = "0.1%";
        bar.style.display = "inline-block";
        let barComp = document.getElementsByClassName("bar_comp");
        barComp[0].appendChild(bar);
    }
}
async function newArr() {
    let arr = document.getElementsByClassName("bar");
    let arr_size = document.querySelector("#arr_sz").value;
    let x = Math.floor((100 - arr_size) / 2);
    for (let i = 0; i < 100; i++) {
        arr[i].style.height = 0 + "px";
    }
    for (let i = 0; i < arr_size; i++) {
        arr[x + i].style.height = Math.floor(Math.random() * 450) + 1 + "px";
        arr[x + i].style.backgroundColor = "#8785A2";
    }
}
function speed() {
    let spd = document.querySelector("#arr_spd").value;
    delay = 1000 - spd;
}

document.querySelector("#arr_spd").addEventListener("input", speed);
document.querySelector(".newArray").addEventListener("click", async function () {
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    await newArr();
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});
document.querySelector("#arr_sz").addEventListener("input", async function () {
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    await newArr();
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});


function disableSortingBtns() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtns() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider() {
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider() {
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn() {
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn() {
    document.querySelector(".newArray").disabled = false;
}