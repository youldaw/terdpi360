// Chap
document.getElementById("left").onclick = () => {
    viewer.setYaw(viewer.getYaw() - 15);
};

// O'ng
document.getElementById("right").onclick = () => {
    viewer.setYaw(viewer.getYaw() + 15);
};

// Tepa
document.getElementById("up").onclick = () => {
    viewer.setPitch(viewer.getPitch() + 10);
};

// Past
document.getElementById("down").onclick = () => {
    viewer.setPitch(viewer.getPitch() - 10);
};

// Zoom +
document.getElementById("zoomIn").onclick = () => {
    viewer.setHfov(viewer.getHfov() - 10);
};

// Zoom -
document.getElementById("zoomOut").onclick = () => {
    viewer.setHfov(viewer.getHfov() + 10);
};

// Home
document.getElementById("home").onclick = () => {
    viewer.loadScene("room1");
};

//==============================
// FULLSCREEN
//==============================

const fullBtn = document.getElementById("fullscreen");

fullBtn.onclick = () => {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

}

//==============================
// WHEEL ZOOM
//==============================

panorama.addEventListener("wheel",(e)=>{

    e.preventDefault();

    if(e.deltaY<0){

        scale +=0.1;

    }else{

        scale -=0.1;

    }

    if(scale<1) scale=1;
    if(scale>3) scale=3;

    updateView();

});

//==============================
// MARKAZ HAQIDA MODAL
//==============================

const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");
const closeBtn = document.querySelector(".close");

// Ochish
aboutBtn.onclick = function(e){

    e.preventDefault();

    aboutModal.style.display = "flex";

}

// Yopish
closeBtn.onclick = function(){

    aboutModal.style.display = "none";

}

// Modal tashqarisini bosganda
window.onclick = function(e){

    if(e.target == aboutModal){

        aboutModal.style.display = "none";

    }

}

// ESC bosilganda
document.addEventListener("keydown",function(e){

    if(e.key === "Escape"){

        aboutModal.style.display = "none";

    }

});

//==============================
// XONALAR MODAL
//==============================

const roomsBtn = document.getElementById("roomsBtn");
const roomsModal = document.getElementById("roomsModal");
const closeRooms = document.getElementById("closeRooms");

// Ochish
roomsBtn.addEventListener("click", function(e){

    e.preventDefault();

    roomsModal.style.display = "flex";

});

// Yopish
closeRooms.addEventListener("click", function(){

    roomsModal.style.display = "none";

});

// Modal tashqarisini bosganda yopish
window.addEventListener("click", function(e){

    if(e.target === roomsModal){

        roomsModal.style.display = "none";

    }

});

// ESC bilan yopish
document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        roomsModal.style.display = "none";

    }

});

//==============================
// QIDIRUV
//==============================

const searchInput = document.getElementById("searchRoom");

searchInput.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const cards = document.querySelectorAll(".room-card");

    cards.forEach(card=>{

        const name = card.dataset.name.toLowerCase();

        if(name.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

//==============================
// XONANI OCHISH
//==============================

function openRoom(scene){

    viewer.loadScene(scene);

    roomsModal.style.display = "none";

}


// ==============================
// XONANI OCHISH (URL orqali)
// ==============================
const viewer = pannellum.viewer("panorama", {
    default: {
        firstScene: "room1",
        autoLoad: true
    },

    scenes: {
        room1: {
            panorama: "img/2-bino.jpg",
            hfov: 120, // Uzoqroq ko'rinish
            pitch: 11, // Boshlanishida sal tepaga qaraydi
            hotSpots: [{
                pitch: 1,
                yaw: 0,
                type: "scene",
                text: "Fayaga kirish",
                sceneId: "room2"
            }]
        },

        room2: {
            panorama: "img/2-bino-faya.jpg",
            hfov: 120,
            hotSpots: [
                {
                    pitch: -2,
                    yaw: -65,
                    type: "scene",
                    text: "Fayadan chapga",
                    sceneId: "room3"
                },
                {
                    pitch: -2,
                    yaw: 60,
                    type: "scene",
                    text: "Fayadan o'ngga",
                    sceneId: "room5"
                }
            ]
        },

        room3: {
            panorama: "img/faya-chap2.jpg",
            hfov: 120,
            hotSpots: [{
                pitch: -10,
                yaw: 182,
                type: "scene",
                text: "Chap tomon oxiri",
                sceneId: "room4"
            }]
        },
        room4: {
            panorama: "img/faya-chap.jpg",
            hfov: 120,
            hotSpots: [{
                pitch: 0,
                yaw: 0,
                type: "scene",
                text: "Fayaga qaytish",
                sceneId: "room2"
            }]
        },

        // o'ng tomon

        room5: {
            panorama: "img/faya-right.jpg",
            hfov: 120,
            hotSpots: [{
                pitch: -8,
                yaw: -2,
                type: "scene",
                text: "Karidorning oxiri",
                sceneId: "room6"
            },
            {
                pitch: -6,
                yaw: -92,
                type: "scene",
                text: "Koridor chap",
                sceneId: "room8"
            },
            {
                pitch: -2,
                yaw: 182,
                type: "scene",
                text: "Fayaga qaytish",
                sceneId: "room5"
            }]
        },
        room6: {
            panorama: "img/faya-right-oxiri.jpg",
            hfov: 120,
            hotSpots: [{
                pitch: 0,
                yaw: 0,
                type: "scene",
                text: "101-xonaga kirish",
                sceneId: "room7"
            },
            {
                pitch: -2,
                yaw: 182,
                type: "scene",
                text: "Ortga qaytish",
                sceneId: "room5"
            }
        ]
        },
        room7: {
            panorama: "img/101xona.jpg",
            hfov: 120,
            hotSpots: [{
                pitch: -10,
                yaw: -80,
                type: "scene",
                text: "Chiqish",
                sceneId: "room6"
            }]
        },
        room8: {
            panorama: "img/arm-koridor.jpg",
            hfov: 120,
            hotSpots: [{
                pitch: -10,
                yaw: -80,
                type: "scene",
                text: "Ortga qaytish",
                sceneId: "room5"
            }]
        }

    }
});


viewer.on("load", function () {

    setTimeout(() => {

        viewer.lookAt(
            0,
            0,
            140,
            1500
        );

    }, 300);

});