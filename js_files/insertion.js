async function insertionSort() {
    let arr = document.getElementsByClassName("bar");
    let ln = parseInt(document.querySelector("#arr_sz").value);
    let x = Math.floor((100 - ln) / 2);
    for (let i = 1; i < ln; i++) {
        const style = window.getComputedStyle(arr[x + i]);
        const newHeight = style.getPropertyValue("height");
        let num = parseInt(newHeight.substr(0, newHeight.length - 2));
        let j;
        for (j = i - 1; j >= 0; j--) {
            const style1 = window.getComputedStyle(arr[x + j]);
            const style2 = window.getComputedStyle(arr[x + j + 1]);

            const newHeight1 = style1.getPropertyValue("height");

            let num1 = parseInt(newHeight1.substr(0, newHeight1.length - 2));

            if (num1 > num) {
                arr[x + j + 1].style.background = "#EA5455";
                arr[x + j].style.background = "#EA5455";

                await waitforme(delay);

                arr[x + j + 1].style.height = newHeight1;

                await waitforme(delay);

                arr[x + j + 1].style.background = "#8785A2";
                arr[x + j].style.background = "#8785A2";
            }
            else {
                break;
            }
        }
        j++;

        const style1 = window.getComputedStyle(arr[x + j]);
        const newHeight1 = style1.getPropertyValue("height");
        arr[x + j].style.height = newHeight;

        // arr[i-1].style.background = "green";
    }
    // arr[ln-1].style.background = "green";
}
document.querySelector(".insertionSort").addEventListener("click", async function () {
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionSort();
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});