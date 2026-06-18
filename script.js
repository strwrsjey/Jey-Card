const CORRECT_PIN = "0309";

function openBouquet() {

    const pin = document.getElementById("pin").value;

    if (pin === CORRECT_PIN) {

        document
            .getElementById("pinPage")
            .classList.add("hidden");

        document
            .getElementById("bouquetPage")
            .classList.remove("hidden");

        const music = document.getElementById("bgMusic");

        music.play()
            .then(() => {
                console.log("Musik berhasil diputar");
            })
            .catch(error => {
                console.log("Gagal memutar musik:", error);
            });

    } else {

        alert("PIN salah");

    }
}
