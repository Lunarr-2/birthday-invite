# Premium Birthday Go-Kart Invite Tracker

A modern RSVP and time-preference tracker for a birthday go-kart event. The page is designed as a premium event invite and collects responses through Formspree, while also showing a simple local tracker preview.

## Features

* Premium modern invite-style landing section
* Clean RSVP form
* Time-slot selection with polished button-style UI
* Simple attendance preference capture
* Local response preview for testing
* Most preferred time calculation
* Formspree-ready submission flow
* Mobile-friendly layout

## Event Details

* **Venue:** ArboRing Gokart
* **Activity:** Go-kart racing
* **Day:** Saturday
* **Time Window:** 12:00 - 16:00
* **Contact:** +36 30 439 ****

## Project Structure

* `index.html` — main invite and tracker page
* `styles.css` - styling for the page 
* `script.js`  - handles funcionality

## How It Works

Users open the page, enter their name, choose their attendance likelihood, and select their preferred time slot.

When the form is submitted:

* the response is sent to Formspree
* the response is also stored locally in the browser for preview/testing
* the tracker updates the response count and most preferred time

## Formspree Setup

1. Create an account at Formspree.
2. Create a new form.
3. Copy your Formspree endpoint.
4. Open the HTML file and replace this line:

```javascript
const endpoint = "https://formspree.io/f/YOUR_ID";
```

with your actual endpoint, for example:

```javascript
const endpoint = "https://formspree.io/f/abcdwxyz";
```

## Running Locally

You can open the HTML file directly in a browser for design/testing.

Note:

* local preview tracking uses `localStorage`
* real shared collection works only after adding a valid Formspree endpoint and hosting the file online

## Deployment

### Option 1: Netlify

1. Go to Netlify Drop.
2. Drag and drop the HTML file.
3. Copy the generated public link.
4. Share it with friends.

### Option 2: GitHub Pages

1. Create a new GitHub repository.
2. Upload the HTML file.
3. Go to **Settings > Pages**.
4. Deploy from the main branch.
5. Share the generated GitHub Pages link.

## Local Tracker Logic

The tracker currently shows:

* **People Responded** — total number of submissions saved locally
* **Most Preferred Time** — the time slot with the highest number of votes

## Customization

You can easily update:

* event title
* venue name
* contact number
* time slots
* colors and typography
* hero message

## Future Improvements

* WhatsApp share button
* duplicate submission prevention
* final confirmed time banner
* countdown to event day

## Author Notes

This project was built as a lightweight birthday coordination page with a premium visual style and minimal friction for guests responding.
