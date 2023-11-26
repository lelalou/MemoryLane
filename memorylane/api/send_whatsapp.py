"""
 * Send an SMS message using the Infobip API.
 *
 * This example is already pre-populated with your account data:
 * 1. Your account Base URL
 * 2. Your account API key
 * 3. Your recipient phone number
 *
 * THIS CODE EXAMPLE IS READY BY DEFAULT. HIT RUN TO SEND THE MESSAGE!
 *
 * Send sms API reference: https://www.infobip.com/docs/api#channels/sms/send-sms-message
 * See Readme file for details.
"""

from infobip_channels.whatsapp.channel import WhatsAppChannel

BASE_URL = "https://9lvx1d.api.infobip.com"
API_KEY = "f082540b13e915d8e6f66283c14c9104-5dce4e4f-513f-4e40-88b6-5ea310beb675"
RECIPIENT = "15198520628"
SENDER: "447860099299"


def main():
    # Initialize the SMS channel with your credentials.
    channel = WhatsAppChannel.from_auth_params(
        {
            "base_url": BASE_URL,
            "api_key": API_KEY,
        }
    )

    # Send a message with the desired fields.
    response = channel.send_text_message(
        {
                "from" : "447860099299",
                "to" : RECIPIENT,
                "content":{
                "text": "You have a reminder scheduled for now!"
                }
        }
    )

    # Get delivery reports for the message. It may take a few seconds show the just-sent message.
    query_parameters = {"limit": 10}
    # delivery_reports = channel.get_outbound_delivery_reports(query_parameters)

    # See the delivery reports.
    # print(delivery_reports)


if __name__ == "__main__":
    main()
