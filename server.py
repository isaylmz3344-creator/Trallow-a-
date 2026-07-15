from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise Exception("GEMINI_API_KEY bulunamadı!")

    genai.configure(api_key=API_KEY)

    model = genai.GenerativeModel("gemini-2.5-flash")

    @app.route("/api/chat", methods=["POST"])
    def chat():
        try:
                data = request.get_json()

                        message = data.get("message", "").strip()

                                if not message:
                                            return jsonify({
                                                            "reply": "Lütfen bir mesaj yaz."
                                                                        })

                                                                                response = model.generate_content(message)

                                                                                        return jsonify({
                                                                                                    "reply": response.text
                                                                                                            })

                                                                                                                except Exception as e:
                                                                                                                        return jsonify({
                                                                                                                                    "reply": f"Hata oluştu: {str(e)}"
                                                                                                                                            }), 500

                                                                                                                                            @app.route("/")
                                                                                                                                            def home():
                                                                                                                                                return "TRALLOW AI Sunucusu Çalışıyor!"

                                                                                                                                                if __name__ == "__main__":
                                                                                                                                                    app.run(host="0.0.0.0", port=5000, debug=True)