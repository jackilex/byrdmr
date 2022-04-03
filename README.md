
# About - Byrdmr

This project was build using bare React, it compose of a 
single page for a landing site

For this project I was given only the design. In a typical project I would have
communicate the design intent with the designers. In this scenario I had 
to make my own assumptions on how the design should look.

## assumptions
based on the folder provided there was a design called new that had 
one single page with multiple sections. the assumption base on the designed
is that each section should take 100vh of user
s screen

[site url](https://jackilex.github.io/byrdmr/)

## Features

- Zoom feature when clicked on specific section of image
- A form to submit any questions
- navbar changes based on user scroll location
- modal for table and mobile


## Documentation
main packages used:
- React
- React Hook Form - for form control
- react-reveal for animation
- gh-page to push to github pages

### Strategy

#### design
- using Figma I open the sketch files to gather all information required
such as colors, typhogray, text sizes etc.

### Setup
- after settying up a simple create react app, I first started settying
up my css.
    - normalize css
    - typhogray and google Fonts
    - the color variables
    - assets folder
    - for css naming I used the BEM model, and DRY. with that been said each component had their own files and all global css that does not belong
in typhogray was place inside the App.css file.

- Javascript/react: This site didn't not require a lot of state management, but in the case of the modal and the zoom feature when the user clicked on the plus sign.
These wer managed using react hooks. The navbar which changed base on the user location was managed with a cutom hook. Through ou this project, I used functional programming.

### git workflow
during this project I followed an easy git workflow to managed this project.
- never pushed directly to main or master
- create branch for each feature and constant commits
## Authors

- [Alex Saint Victor](https://github.com/jackilex)


## Installation

Simply clone this repo and run "nom start" or access site directly [site url](https://jackilex.github.io/byrdmr/)
