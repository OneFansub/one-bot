let channelInput: HTMLInputElement;
let messageInput: HTMLInputElement;
let embedInput: HTMLInputElement;
let messageForm: HTMLFormElement;

window.onload = () => {
  channelInput = document.getElementById("channel") as HTMLInputElement;
  messageInput = document.getElementById("message") as HTMLInputElement;
  embedInput = document.getElementById("embed") as HTMLInputElement;
  messageForm = document.getElementById("message-form") as HTMLFormElement;

  messageForm.onsubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(messageForm));
    const response = makeRequest("/sendMessage", "POST", formData);
    alert(await (await response).text());
  };
};

function fillChannel(channelId: string) {
  channelInput.value = channelId;
}

function useTemplate(templateIndex: number) {
  const channelTemplate = document.getElementById(
    `template-${templateIndex}-channel`
  ) as HTMLInputElement;
  const messageTemplate = document.getElementById(
    `template-${templateIndex}-message`
  ) as HTMLInputElement;
  const embedTemplate = document.getElementById(
    `template-${templateIndex}-embed`
  ) as HTMLInputElement;

  channelInput.value = channelTemplate.value;
  messageInput.value = messageTemplate.value;
  embedInput.value = embedTemplate.value;
}

function openModal() {
  const dialog = document.getElementById("dialog") as HTMLDialogElement;
  dialog.showModal();
}

function closeModal() {
  const dialog = document.getElementById("dialog") as HTMLDialogElement;
  dialog.close();
}

async function saveTemplate() {
  const templateName = document.getElementById(
    "template-name"
  ) as HTMLInputElement;
  const formData = Object.fromEntries(new FormData(messageForm));

  const response = makeRequest("/msgTemplates", "POST", {
    name: templateName.value,
    ...formData,
  });
  templateName.value = "";
  closeModal();
  alert(await (await response).text());
}

async function deleteTemplate(templateId: string) {
  if (confirm("¿Está seguro que desea eliminar la plantilla?")) {
    const response = makeRequest("/msgTemplates", "DELETE", { templateId });
    alert(await (await response).text());
  }
}

function makeRequest(endpoint: string, method: string, body?: Object) {
  console.log(
    `sending to *${endpoint}* with method ${method} : ${JSON.stringify(body)}`
  );
  return fetch(endpoint, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
