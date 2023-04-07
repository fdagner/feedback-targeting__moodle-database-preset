# Feedback Targeting

Feedback Targeting is a preset for the Moodle activity database.

## Description

The feedback from up to four questions can be displayed on a target.

## Getting started

Download the [release file](https://github.com/fdagner/feedback-targeting__moodle-database-preset/releases). Create a "Database" activity in Moodle and then upload the ZIP file in the "Presets" tab under "Import".

Customize the feedback questions in the list view and in the template for new entries. Do not forget to switch off the editor before!

## Formulate questions and adjust number

1. Open the template user-defined JavaScript.

2. Enter the desired number of questions, e.g. 4.
```
let questionnumber = 4;
```

2. Fill in the questions, mind the inverted commas! 
```
let question1 = "Die Teamarbeit war erfolgreich";
let question2 = "Ich habe etwas gelernt";
let question3 = "Die Inhalte waren verständlich";
let question4 = "Ich kann das Thema in der Praxis einsetzen";
```
3. Save and **delete the browser cache,** e.g. in Windows: strg+F5.

## Language Support

The preset is available in German, but there is not so much to translate. The template can easily be adapted.

## Screenshots

<img width="400" alt="list view" src="/screenshots/listenansicht.png">
<img width="400" alt="list view" src="/screenshots/listenansicht2.png">
