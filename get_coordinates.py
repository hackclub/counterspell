import requests
import json
import dotenv
import os

dotenv.load_dotenv()

# Google Maps Geocoding API key
API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')

def get_coordinates(address):

    url = f"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={API_KEY}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        print(data)
        location = data['results'][0]['geometry']['location']
        return location['lat'], location['lng']
    
def process_cities(events_file):

    with open(events_file, 'r') as file:
        events = json.load(file)

    results = []
    for event in events:
        if ('latitude' in event) and ('longitude' in event):
            results.append(event)
            continue
        name = event['name']
        lat, lng = get_coordinates(name)
        event['latitude'] = lat
        event['longitude'] = lng
        results.append(event)

    with open(events_file, 'w') as file:
        json.dump(results, file, indent=4)


events_file = './src/events.json'
process_cities(events_file)
