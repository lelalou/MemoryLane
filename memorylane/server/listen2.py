import io
from google.cloud import speech
from google.oauth2 import service_account

client_file="mymemorylaneKEY.json"


credentialss = service_account.Credentials.from_service_account_file(client_file)
client = speech.SpeechClient(credentials=credentialss)


#loading the audio fild
audio_file = 'Recording (3).wav'
with io.open(audio_file,'rb') as f:
    content = f.read()
    audio = speech.RecognitionAudio(content=content)

config = speech.RecognitionConfig(
    encoding = speech.RecognitionConfig.AudioEncoding.LINEAR16,
    sample_rate_hertz = 48000,
    language_code = 'en-US'
)

response = client.recognize(config=config, audio=audio)
print(response)
for result in response.results:
        print(f"Transcript: {result.alternatives[0].transcript}")

