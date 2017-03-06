# Angular-datepicker


Simple yet working solution for mobile issue with js only datepickers!


Problem:
JS datepickers use select for year field. It's styling is ignored by some mobile browsers and show as huge list with all availlable years, causing it to be unreadable. 

Solution:
Change datepicker to use another absolute div with ul-li list of years, styling is fully cross browser.



Implementation:
 1. Add directive to your App - change js file with name of your App;
 2. Include html in correct content folder;
 3. Change in JS the path to your html;
 4. Add CSS/Sass to your project;
 5. Add "<birthdaypicker-Directive></birthdaypicker-Directive>" in view;
