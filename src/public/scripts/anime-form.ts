let creditsContainer: Element;
let creditCount: number;

window.onload = () => {
  creditsContainer = document.getElementById("credits")!;
  creditCount = document.getElementsByName("name").length ?? 0;

  // form submit
  const animeForm = document.getElementById("anime-form") as HTMLFormElement;
  animeForm.onsubmit = (e) => {
    e.preventDefault();

    const anime = formDataToAnime(animeForm);
    // console.log("to save " + JSON.stringify(anime));
    saveAnime(anime);
  };
};

function formDataToAnime(animeForm: HTMLFormElement) {
  const formData = new FormData(animeForm);
  const creditNames = formData.getAll("name");
  const creditValues = formData.getAll("value");
  const tags = formData.get("tags");

  const formDataObject = Object.fromEntries<any>(formData);

  delete formDataObject.name;
  delete formDataObject.value;

  // build the credits property object
  if (creditNames.length != 0) {
    formDataObject.credits = creditNames.map((name, i) => {
      return { name, value: creditValues[i] };
    });
  }
  if (tags) {
    formDataObject.tags = tags
      .toString()
      .split(",")
      .map((s) => s.trim());
  }
  // remove properties with empty string value
  const anime = Object.fromEntries(
    Object.entries(formDataObject).filter(([_, v]) => v != "")
  );

  return anime;
}

async function saveAnime(anime: Object) {
  const response = await fetch("save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(anime),
  });

  // redirect
  if (response.redirected) window.location.href = response.url;
  else return response.json();
}

function addCredit() {
  const div = document.createElement("div");
  div.className = "grid";

  const input = document.createElement("input");
  input.id = `credit-${creditCount + 1}-name`;
  input.name = "name";
  input.placeholder = `credit-${creditCount + 1}-name`;
  div.appendChild(input);

  const input2 = document.createElement("input");
  input2.id = `credit-${creditCount + 1}-value`;
  input2.name = "value";
  input2.placeholder = `credit-${creditCount + 1}-value`;
  div.appendChild(input2);

  creditCount++;
  creditsContainer.appendChild(div);
}
