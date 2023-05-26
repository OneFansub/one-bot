function deleteAnime(animeId) {
    fetch("anime/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ animeId }),
    });
}

function sendDiscordEmbed(animeId) {
    fetch("sendDiscordEmbed", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ animeId, channel: "998707695332884481" }),
    });
} 
