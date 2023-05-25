function deleteAnime(animeId) {
    fetch("anime/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ animeId }),
    });
}
