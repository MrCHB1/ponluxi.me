const videoIds = [
    "TJowVFbxdp0", "LimuSErcQ6Q", "k2iSkGqad5A", "AZ5pZrEIODs", "WwS2z0hQ4SQ", "Is3JZ5LyHDU", "olGSatfcxr4"
]

const randomVideo = videoIds[Math.floor(Math.random() * (videoIds.length - 1))]

document.getElementById("backgroundVideo").src = "https://www.youtube.com/embed/" + randomVideo + "?autoplay=1&mute=1&loop=1&playlist=" + randomVideo + "&controls=0&showinfo=0&autohide=1&modestbranding=1&iv_load_policy=3"