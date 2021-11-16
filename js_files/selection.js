async function selectionSort() {
    let arr = document.getElementsByClassName("bar");
    let ln = parseInt(document.querySelector("#arr_sz").value);
    let x = Math.floor((100 - ln) / 2);
    for (let i = 0; i < ln - 1; i++) {
        let min_ind = i;
        for (let j = i + 1; j < ln; j++) {
            const style1 = window.getComputedStyle(arr[x + j]);
            const style2 = window.getComputedStyle(arr[x + min_ind]);

            const newHeight1 = style1.getPropertyValue("height");
            const newHeight2 = style2.getPropertyValue("height");

            let num1 = parseInt(newHeight1.substr(0, newHeight1.length - 2));
            let num2 = parseInt(newHeight2.substr(0, newHeight2.length - 2));
            if (num1 < num2) {
                min_ind = j;
            }
        }

        const style1 = window.getComputedStyle(arr[x + i]);
        const style2 = window.getComputedStyle(arr[x + min_ind]);
        const newHeight1 = style1.getPropertyValue("height");
        const newHeight2 = style2.getPropertyValue("height");

        arr[x + min_ind].style.background = "#EA5455";
        arr[x + i].style.background = "#EA5455";

        await waitforme(delay);

        arr[x + min_ind].style.height = newHeight1;
        arr[x + i].style.height = newHeight2;
        await waitforme(delay);
        arr[x + min_ind].style.background = "#8785A2";
        arr[x + i].style.background = "#8785A2";

        arr[x + i].style.background = "#9AE66E";
    }
    arr[parseInt(ln) + x - 1].style.background = "#9AE66E";
}

document.querySelector(".selectionSort").addEventListener("click", async function () {
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionSort();
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});

