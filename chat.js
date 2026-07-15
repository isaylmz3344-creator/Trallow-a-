const messages = document.getElementById("messages");
const input = document.getElementById("prompt");
const send = document.getElementById("send");

function addMessage(text, type) {
    const div = document.createElement("div");
        div.className = type === "user" ? "user-message" : "ai-message";
            div.innerHTML = text;
                messages.appendChild(div);
                    messages.scrollTop = messages.scrollHeight;
                    }

                    async function sendMessage() {
                        const text = input.value.trim();

                            if (!text) return;

                                addMessage(text, "user");
                                    input.value = "";

                                        addMessage("⏳ TRALLOW AI düşünüyor...", "ai");

                                            try {
                                                    const reply = await API.send(text);

                                                            messages.removeChild(messages.lastChild);

                                                                    addMessage(reply, "ai");

                                                                        } catch (e) {

                                                                                messages.removeChild(messages.lastChild);

                                                                                        addMessage("⚠️ Bir hata oluştu.", "ai");
                                                                                            }
                                                                                            }

                                                                                            send.onclick = sendMessage;

                                                                                            input.addEventListener("keydown", e => {
                                                                                                if (e.key === "Enter") {
                                                                                                        sendMessage();
                                                                                                            }
                                                                                                            });