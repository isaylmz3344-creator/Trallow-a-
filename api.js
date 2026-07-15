const API = {
        url: "/api/chat",

            async send(message) {
                    try {
                                const response = await fetch(this.url, {
                                                method: "POST",
                                                                headers: {
                                                                                    "Content-Type": "application/json"
                                                                                                    },
                                                                                                                    body: JSON.stringify({
                                                                                                                                        message: message
                                                                                                                                                        })
                                                                                                                                                                    });

                                                                                                                                                                                if (!response.ok) {
                                                                                                                                                                                                throw new Error("Sunucu hatası");
                                                                                                                                                                                                            }

                                                                                                                                                                                                                        const data = await response.json();

                                                                                                                                                                                                                                    return data.reply;

                                                                                                                                                                                                                                            } catch (error) {
                                                                                                                                                                                                                                                        console.error(error);
                                                                                                                                                                                                                                                                    return "⚠️ TRALLOW AI'ye şu anda ulaşılamıyor.";
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                };
