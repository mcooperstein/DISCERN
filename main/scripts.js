var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/about", {
            templateUrl: "about.html",
            controller: "about_controller"
        })
        .when("/partners", {
            templateUrl: "partners.html"
        })
        .when("/linkedin", {
            templateUrl: "linkedin.html"
        })
        .when("/customers", {
            templateUrl: "customers.html"
        })
        .when("/overview", {
            templateUrl: "overview.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/news", {
            templateUrl: "news.html",
            controller: "news"
        })
        .otherwise({
            templateUrl: "home.html"
        });

});
app.controller('news', function ($scope, $sce, $http) {
    $scope.index = 0;
    $scope.posts = [

        {
            title: "DISCERN chosen as default search platform by Alpha Theory",
            date: "09/26/17",
            post_id: 0,
            link: "./alpha_theory.pdf"
      },
        {
            title: "DISCERN chosen as finalist for company of the year by Outsell",
            date: "09/12/17",
            post_id: 1,
            link: "https://outsellinc.com/signature-event-2017/#!/emergingcompanygrowthtank"
      },

        /*{
            title: "DISCERN to present at Battlefin West Coast on October 26 in Palo Alto",
            date: "08/01/17",
            post_id: 2,
            link: "https://www.google.com/"

      },*/
        {
            title: "DISCERN chosen as default search platform for Battlefin",
            date: "06/14/17",
            post_id: 2,
            link: "http://www.battlefin.com/press-release-discern"
      },
        {
            title: "Is Your Data Ready?",
            date: "05/25/17",
            post_id: 3,
            link: "./linkedin.html"
      }
    ]

    $scope.events = [
        {
            title: "DISCERN to present at Outsell’s Emerging Company Growth Tank Conference",
            date: "10/4/17",
            post_id: 0,
            //link: "https://blog.outsellinc.com/eight-nominees-for-outsells-growth-tank-c252182628af"
            link: "https://outsellinc.com/signature-event-2017/#!/emergingcompanygrowthtank"
        },
        {
            title: "DISCERN to present at Battlefin West Coast",
            date: "10/26/17",
            post_id: 1,
            link: "http://www.battlefin.com/press-release-discern"
      }
        ]
    $scope.current_tab = $scope.posts;
    $scope.change_post = function (index) {
        $scope.index = index
        if ($scope.current_tab == $scope.posts) {
            $scope.current_story = $scope.posts[$scope.index]
            $scope.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(src);
            }
        } else {
            $scope.current_story = $scope.events[$scope.index]
            $scope.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(src);
            }
        }

        console.log($scope.current_story);
    };
    /*$scope.current_story = $scope.posts[$scope.index]
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }*/
    $scope.show_news = function () {
        $scope.current_tab = $scope.posts;
        $scope.index = 0;
        $scope.current_story = $scope.posts[$scope.index];
        console.log($scope.current_story);
        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src);
        }
    }
    $scope.show_events = function () {
        $scope.current_tab = $scope.events;
        $scope.index = 0;
        $scope.current_story = $scope.events[$scope.index];
        console.log($scope.current_story);
        $scope.trustSrc = function (src) {
                return $sce.trustAsResourceUrl(src);
            }
            /*$('#events_btn').css({
                'background-color': '#ececec',
                'color': 'black',
            });

            $('#news_btn').css({
                'background-color': '#474747',
                'color': 'white',
            });*/
    }

    $("#newsTab").click(function () {
        $("#eventsTab").removeClass("active");
        $("#newsTab").addClass("active");
        $("#eventsA").addClass("blue");
    });
    $("#eventsTab").click(function () {
        $("#eventsTab").addClass("active");
        $("#newsTab").removeClass("active");
        $("#newsA").addClass("blue");
    });
});

app.controller('about_controller', function ($scope) {
    $scope.current_name = "";
    $scope.bio = "";
    $scope.index = 0;
    $scope.bios = [
        {
            bio_id: 0,
            bullets: [
                "20+ yrs Wall St", "Wall St Journal All Star", "$25 Billion in IPOs", "National Academy of Sciences..."
            ]
        }
    ];
    $scope.loadbio = function (index, section, bio_input) {
        var bio_page = null;
        $scope.bio = bio_input;
        if ($(document).width() >= 1200) {
            bio_page = 4;
        }
        /*
        else if($(document).width() >= 993)
        {
            bio_page = 3;
        }
        else if($(document).width() >= 769)
        {
            bio_page = 2;
        }
        else
        {
            bio_page = 1;
            $("#" + (bio_page-1)).after("<style>.col-sm-6 { position: static; } </style>");
        }
        */
        else if ($(document).width() > 767) {
            bio_page = 2;
        } else {
            bio_page = 1;
            $("#" + (bio_page - 1)).after("<style>.col-sm-6 { position: static; } </style>");
        }
        /*
        if ( $("#" + (bio_page-1) ).length > 0 ) {

            $("#bioShown").remove();
            if(bio_page == 4 && index < 4)
            {
                $("#3").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 4 && index < 9)
            {
                 $("#7").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");

            }
            else if(bio_page == 4 && index < 13)
            {
               $("#9").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }


            if(bio_page == 3 && index < 3)
            {
               $("#2").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 3 && index < 6)
            {
                $("#5").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 3 && index < 9)
            {
               $("#8").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 3 && index < 12)
            {
               $("#9").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }

            if(bio_page == 2 && index < 2)
            {
               $("#1").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 2 && index < 4)
            {
               $("#3").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 2 && index < 6)
            {
               $("#5").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 2 && index < 8)
            {
               $("#7").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 2 && index < 10)
            {
               $("#9").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }

            if(bio_page == 1 && index < 1)
            {
               $("#0").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }

            else if(bio_page == 1 && index < 2)
            {
               $("#1").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }

            else if(bio_page == 1 && index < 3)
            {
               $("#2").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }

            else if(bio_page == 1 && index < 4)
            {
               $("#3").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }

            else if(bio_page == 1 && index < 5)
            {
               $("#4").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }

            else if(bio_page == 1 && index < 6)
            {
               $("#5").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 1 && index < 7)
            {
               $("#6").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 1 && index < 8)
            {
               $("#7").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 1 && index < 9)
            {
               $("#8").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            else if(bio_page == 1 && index < 10)
            {
               $("#9").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
        }
        else
        {
            console.log(bio_input);
            $("#" + (bio_page-1)).after("<div class='col-xs-12' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
        }
        */
        if ($("#" + (bio_page - 1)).length > 0) {

            $("#bioShown").remove();
            console.log(bio_page, index, section);
            if (bio_page == 4 && index < 4 && section == "leader") {
                $("#9").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 4 && index < 2 && section == "leader") {
                $("#3").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 2 && index < 2 && section == "leader") {
                $("#3").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 1 && section == "leader") {
                $("#0").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 2 && section == "leader") {
                $("#3").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 3 && section == "leader") {
                $("#4").after("<div class='col-xs-12 bioinfo' s id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 4 && section == "leader") {
                $("#9").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 2 && index < 4 && section == "leader") {
                $("#9").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");

            }

            /*
            else
            {
                console.log("--");
                $("#9").after("<div class='col-xs-12 bioinfo' style='background-color: blue; color: white;' id='bioShown'>" + bio_input + "</div>");
            }
            */

            if (bio_page >= 2 && index < 6 && section == "sales") {
                $("#5").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 5 && section == "sales") {
                $("#1").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 6 && section == "sales") {
                $("#5").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            }

            if (bio_page == 4 && index < 10 && section == "product") {
                $("#8").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 2 && index < 8 && section == "product") {
                $("#6").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 2 && index < 10 && section == "product") {
                $("#8").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 7 && section == "product") {
                $("#3").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 8 && section == "product") {
                $("#6").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 9 && section == "product") {
                $("#7").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            } else if (bio_page == 1 && index < 10 && section == "product") {
                $("#9").after("<div class='col-xs-12 bioinfo'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
            }

        } else {
            $("#" + (bio_page - 1)).after("<div class='col-xs-12'  id='bioShown'><div class='biotext'>" + bio_input + "</div></div>");
        }
    };

    $scope.image = "";
    $scope.bio_page = 0;
    $scope.hidden = "";
    /*
    $scope.showbio = function (b)
    {
        if ($(document).width() >= 1200)
        {
            bio_page = 4;
        }
        else if($(document).width() >= 993)
        {
            bio_page = 3;
        }
        else if($(document).width() >= 769)
        {
            bio_page = 2;
        }
        else
        {
            bio_page = 1;
        }
        $scope.hidden = b;
        $("#" + (bio_page-1)).append("<div style='width: 100%;height: 200px;background-color: black; margin-top: 400px;'></div> ");
        console.log($(document).width());
    }
    */
    $scope.changeName = function (name) {
        $scope.current_name = name;
        console.log(name);
    };
    $scope.changebio = function (bio_info) {
        $scope.bio = bio_info;
    }
    $scope.changeImg = function (img) {
        $scope.image = img;
    }
    $scope.changeBullets = function (index) {
        $scope.index = index
        $scope.current_bio = $scope.bios[$scope.index]
    }
    var modal = document.getElementById('myModal');
    //var span = document.getElementsByTagName("span");
    $(".bios").click(function () {
        modal.style.display = "block";
    });
    $("span").click(function () {
        modal.style.display = "none";
    })
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});


app.controller('services_controller', function ($scope) {
    $scope.current_pic = "";
    $scope.changephoto = function (img_url) {
        $scope.current_pic = img_url;
    }
    var modal = document.getElementById('myModal');
    //var span = document.getElementsByTagName("span");
    $(".list-group").click(function () {
        modal.style.display = "block";
    });
    $("span").click(function () {
        modal.style.display = "none";
    })
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
app.controller('UI', function ($scope, $window) {
    $scope.$on('$viewContentLoaded', function () {
        $window.scrollTo(0, 0);
    });
});
