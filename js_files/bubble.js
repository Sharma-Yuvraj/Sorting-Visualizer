async function bubbleSort() {
    let arr = document.getElementsByClassName("bar");
    let arr_size = document.querySelector("#arr_sz").value;
    let x = Math.floor((100 - arr_size) / 2);
    for (let i = 0; i < arr_size - 1; i++) {
        for (let j = 0; j < arr_size - i - 1; j++) {
            const style1 = window.getComputedStyle(arr[j + x]);
            const style2 = window.getComputedStyle(arr[j + 1 + x]);

            const newHeight1 = style1.getPropertyValue("height");
            const newHeight2 = style2.getPropertyValue("height");

            let num1 = parseInt(newHeight1.substr(0, newHeight1.length - 2));
            let num2 = parseInt(newHeight2.substr(0, newHeight2.length - 2));
            if (num1 > num2) {
                arr[j + 1 + x].style.background = "#EA5455";
                arr[j + x].style.background = "#EA5455";

                await waitforme(delay);

                arr[j + 1 + x].style.height = newHeight1;
                arr[j + x].style.height = newHeight2;
                await waitforme(delay);
                arr[j + 1 + x].style.background = "#8785A2";
                arr[j + x].style.background = "#8785A2";
            }
        }
        arr[arr_size - i - 1 + x].style.background = "#9AE66E";
    }
    arr[0 + x].style.background = "#9AE66E";
}

document.querySelector(".bubbleSort").addEventListener("click", async function () {
    disableSortingBtns();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubbleSort();
    enableSortingBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});