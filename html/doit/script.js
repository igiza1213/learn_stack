const seats = document.querySelectorAll(".seat");

seats.forEach((seat) => {
    seat.addEventListener("click", selectSeat);
});

function selectSeat() {
    if (this.classList.contains("selected")) {
        if (confirm("좌석을 해제하시겠습니까?")) {
            this.classList.remove("selected");
        }
    } else if (confirm("좌석을 선택하시겠습니까?")) {
        this.classList.add("selected");
    }
}
