async function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        const style1 = window.getComputedStyle(arr[l + i]);
        const newHeight1 = style1.getPropertyValue("height");
        let num1 = parseInt(newHeight1.substr(0, newHeight1.length - 2));
        arr[l + i].style.background = "aqua";
        L[i] = num1;
    }
    for (let j = 0; j < n2; j++) {
        await waitforme(delay);
        const style1 = window.getComputedStyle(arr[m + 1 + j]);
        const newHeight1 = style1.getPropertyValue("height");
        let num1 = parseInt(newHeight1.substr(0, newHeight1.length - 2));
        arr[m + j + 1].style.background = "yellow";
        R[j] = num1;
    }
    await waitforme(delay);

    let i = 0;

    let j = 0;

    let k = l;

    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (L[i] <= R[j]) {
            arr[k].style.height = L[i] + "px";
            arr[k].style.background = "#9AE66E";
            i++;
        }
        else {
            arr[k].style.height = R[j] + "px";
            arr[k].style.background = "#9AE66E";
            j++;
        }
        k++;
    }

    while (i < n1) {
        await waitforme(delay);
        arr[k].style.height = L[i] + "px";
        arr[k].style.background = "#9AE66E";
        i++;
        k++;
    }

    while (j < n2) {
        await waitforme(delay);
        arr[k].style.height = R[j] + "px";
        arr[k].style.background = "#9AE66E";
        j++;
        k++;
    }
}

async function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    let m = l + Math.floor(parseInt((r - l) / 2));
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
}
document.querySelector(".mergeSort").addEventListener("click", async function () {
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    let arr = document.getElementsByClassName("bar");
    let ln = parseInt(document.querySelector("#arr_sz").value);
    let x = Math.floor((100 - ln) / 2);
    await mergeSort(arr, x, x + ln - 1);
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});
