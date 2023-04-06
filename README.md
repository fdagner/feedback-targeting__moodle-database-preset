# Feedback Targeting

Feedback Targeting is a preset for the Moodle activity database.

## Description

The feedback from up to four questions can be displayed on a target.

## Getting started

Download the [release file](https://github.com/fdagner/feedback-targeting__moodle-database-preset/releases). Create a "Database" activity in Moodle and then upload the ZIP file in the "Presets" tab under "Import".

Customize the feedback questions in the list view and in the template for new entries. Do not forget to switch off the editor before!

## Adjust the number of questions

1. To switch to two questions, add the class "hidden" to questions 3 (red) and 4 (blue) in the list view header:

```
<div class="divlabel red hidden">lorem ipsum 3 ⌀ <span class="red-mittelwert"></span></div>
<div class="divlabel blue hidden">lorem ipsum 4 ⌀ <span class="blue-mittelwert"></span></div>
```

2. Change the line 
```
var angle = Math.random() * 90 + 90 * (quarterIndex - 1);
```
to
```
var angle = Math.random() * -180 + 180 * (quarterIndex - 1);
```

3. Adapt the template for new entries.

## Language Support

The preset is available in German, but there is not so much to translate. The template can easily be adapted.

## Screenshots

<img width="400" alt="list view" src="/screenshots/listenansicht.png">
<img width="400" alt="list view" src="/screenshots/listenansicht2.png">
