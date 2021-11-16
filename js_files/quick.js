let arr2 = document.getElementsByClassName("bar");
let ln2 = parseInt(document.querySelector("#arr_sz").value);
let x2 = Math.floor((100 - ln2) / 2);
async function partition(arr, low, high) {
    const style = window.getComputedStyle(arr[high]);
    const newHeight = style.getPropertyValue("height");
    let num = parseInt(newHeight.substr(0, newHeight.length - 2));
    let pivot = num;
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        const style1 = window.getComputedStyle(arr[j]);
        const newHeight1 = style1.getPropertyValue("height");
        let num1 = parseInt(newHeight1.substr(0, newHeight1.length - 2));
        await waitforme(delay)
        if (num1 < pivot) {
            i++;

            arr[i].style.background = "#EA5455";
            arr[j].style.background = "#EA5455";

            swap(arr[i], arr[j]);

            await waitforme(delay);

            arr[i].style.background = "#8785A2";
            arr[j].style.background = "#8785A2";
        }
    }

    arr[i + 1].style.background = "#EA5455";
    arr[high].style.background = "#EA5455";

    await waitforme(delay);
    swap(arr[i + 1], arr[high]);

    arr[high].style.background = "#8785A2";
    arr[i + 1].style.background = '#9AE66E';

    return (i + 1);
}

function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const newHeight1 = style1.getPropertyValue("height");
    const newHeight2 = style2.getPropertyValue("height");


    el1.style.height = newHeight2;
    el2.style.height = newHeight1;

}

async function quickSort(arr, low, high) {
    if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
    else {
        if (low >= x2 && high >= x2 && low < x2 + arr.length && high < x2 + arr.length) {
            arr[high].style.background = '#9AE66E';
            arr[low].style.background = '#9AE66E';
        }
    }
}
document.querySelector(".quickSort").addEventListener("click", async function () {
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    let arr = document.getElementsByClassName("bar");
    let ln = parseInt(document.querySelector("#arr_sz").value);
    let x = Math.floor((100 - ln) / 2);
    await quickSort(arr, x + 0, x + ln - 1);
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});