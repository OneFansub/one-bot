let channelInput: HTMLInputElement;
let messageInput: HTMLInputElement;
let embedInput: HTMLInputElement;

window.onload = () => {
  channelInput = document.getElementById("channel") as HTMLInputElement;
  messageInput = document.getElementById("message") as HTMLInputElement;
  embedInput = document.getElementById("embed") as HTMLInputElement;
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
