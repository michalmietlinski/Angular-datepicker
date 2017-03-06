// Change mainApp to you app and include directive in view;
mainApp.directive('birthdaypickerDirective', function() {
    function link(scope) {
        //Init - you can add languages here
        scope.monthNames =
            ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
        scope.monthNamesShort = ["Jan.", "Feb.", "Mar", "Apr.", "May", "Jun",
            "Jul.", "Aug", "Sept.", "Oct.", "Nov.", "Dec."
        ];
        scope.dayNames = ["sunday", "monday", "tuesday", "wednsday", "thursday", "friday", "saturday"];
        scope.dayNamesShort = ["sun.", "mon.", "tue.", "wed.", "thu.", "fri.", "sat."];
        scope.dayNamesMin = ["S", "M", "T", "W", "T", "F", "S"];
        scope.availlableYears = [];

        function Calendar() {
            var date = new Date();
            scope.chosenYear = date.getFullYear();
            scope.chosenMonth = date.getMonth();
            for (var i = 0; i < 100; i++) {
                scope.availlableYears.push(date.getFullYear() - i)
            }
            scope.getDays(scope.chosenYear, scope.chosenMonth + 1)
        }

        scope.getDays = function(year, month) {
            var daysInMonth = new Date(year, month, 0).getDate();
            var day = new Date(year + "-" + month + "-01").getDay()
            scope.availlableDays = [];
            for (var i = 1; i < day; i++) {
                scope.availlableDays.push("")
            }
            for (var i = 1; i <= daysInMonth; i++) {
                scope.availlableDays.push(i)
            }
        }
        scope.prevmonth = function() {
            if (scope.chosenMonth == 0) {
                //Previous year
                scope.chosenMonth = 11;
                scope.chosenYear--;
            } else {
                scope.chosenMonth--
            }
            scope.getDays(scope.chosenYear, scope.chosenMonth + 1)
        }
        scope.nextmonth = function() {
            var date = new Date();

            if (scope.chosenYear == date.getFullYear() && scope.chosenMonth >= date.getMonth()) {
                //Do nothing
            } else {
                if (scope.chosenMonth == 11) {
                    //Next year
                    scope.chosenMonth = 0;
                    scope.chosenYear++;
                } else {
                    scope.chosenMonth++
                }
                scope.getDays(scope.chosenYear, scope.chosenMonth + 1)
            }
        }
        scope.chooseyear = function(year) {
            scope.chosenYear = year;
            scope.yearpopup = false;
            scope.getDays(scope.chosenYear, scope.chosenMonth + 1)
        }
        scope.chooseday = function(day) {
            var date = new Date();
            if (scope.chosenYear == date.getFullYear() && scope.chosenMonth >= date.getMonth() && day >= date.getUTCDate()) {
                //Do nothing
            } else {
                scope.infoPopup = false; //Hide popup
                scope.chosenDay = day;
                day = "0" + day;
                day = day.slice(-2)
                var tempmonth=scope.chosenMonth+1;
                tempmonth="0"+tempmonth;
                tempmonth=tempmonth.slice(-2)
                //The model for final result
                scope.Birthdate = tempmonth + "/" + day + "/" + scope.chosenYear; 
                alert("You have selected: "+scope.Birthdate)
                //Alternative option
                //scope.Birthdate= day+" "+$scope.monthNamesShort[$scope.chosenMonth]+" "+$scope.chosenYear;
            }
        }

        scope.openpopup = function() {
            scope.infoPopup = true;
            $("#datepicker").blur();
            setTimeout(function() {
                $("#calendar-modal").focus();
            }, 100)

        }
        //init calendar
        Calendar();


    }
    return {
        scope: false,
        restrict: "E",
        replace: true,
        link: link,
        templateUrl: 'content/Templates/directives/birthdaypicker.html',
    };


});