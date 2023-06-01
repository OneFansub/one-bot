let channelInput: HTMLInputElement;

window.onload = () => {
  channelInput = document.getElementById("channel") as HTMLInputElement;
};

function fillChannel(channelId: string) {
  channelInput.value = channelId;
}
