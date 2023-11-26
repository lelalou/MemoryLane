from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import threading
from infobip_channels.whatsapp.channel import WhatsAppChannel
import time
import send_whatsapp

app = Flask(__name__)
CORS(app)

BASE_URL = "https://9lvx1d.api.infobip.com"
API_KEY = "App f082540b13e915d8e6f66283c14c9104-5dce4e4f-513f-4e40-88b6-5ea310beb675"
SENDER = "447860099299"
RECIPIENT = "15198520628"

scheduled_time = datetime.max  # Scheduled time to send the message


def send_scheduled_alert():
    global scheduled_time

    while True:
        now = datetime.now()

        # Check if it's time to send the message
        if now >= scheduled_time:
            print("sent")
            send_whatsapp.main()
            scheduled_time = datetime.max

        time.sleep(10)

@app.route('/api/scheduleAlert', methods=['POST'])
def schedule_alert():
    global scheduled_time

    data = request.get_json()

    if 'scheduledTime' not in data:
        return jsonify({'error': 'Scheduled time is required'}), 400

    scheduled_time_str = data['scheduledTime']

    try:
        scheduled_time = datetime.strptime(scheduled_time_str, '%H:%M').replace(year=2023, month=1, day=1)
    except ValueError:
        return jsonify({'error': 'Invalid scheduled time format'}), 400

    return jsonify({'status': 'success', 'scheduledTime': scheduled_time_str}), 200

if __name__ == '__main__':
    # Start the thread for sending scheduled alerts
    threading.Thread(target=send_scheduled_alert, daemon=True).start()
    
    app.run(debug=True)
