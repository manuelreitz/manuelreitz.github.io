window.onload = init;

setTimeout(function() {
    $("#intro_content").animate({
        opacity: 1
    }, 500);
}, 1000);

//-------------------------------------START----------------------------------------
//----------------------------------------------------------------------------------

function init() {

    setTimeout(function() {
        hideElement(".loadingContainer");
        setTimeout(function() {
            showElement("#button_start", 700);
        }, 300);
    }, 7000);

    var animationTime0 = 0,
        animationTimeFade = 600,
        animationTimeZoom = 1000;
    var cC = 1, //currentChapter
        cP = 1, //currentPart
        cZ = 1; //currentZoomLevel   
    var currentLoop = getCurrentLoop();
    var currentZoom, currentScroll;
    var zoomDuration;
    var menuClick = false;
    var menuActive = false;

    $("#button_start").click(function() {
        showVideo(currentLoop, animationTime0, true);
        hideElement("#intro_content", 600);

        setTimeout(function() {
            hideElement("#intro_background", 600);
        }, 1000);

        setTimeout(function() {
            hideElement("#intro");

            $("#logo").animate({
                width: "39px",
                height: "55px"
            }, 300);

            showElement("#pmenu", 300);
            showElement("#vNav1", 300);
            showElement("#hNav1C3", 300);
            showElement(".menu_title", 300);

            $.scrollify({
                section: ".scrollifySections",
                sectionName: false,
                scrollSpeed: 3000,
                easing: "linear",
                scrollbars: false,
                before: function(index) { startScrollManager(index - 1); },
                after: function(index) { stopScrollManager(index - 1); },
            });
            setTimeout(function() {
                enableScrolling();
            }, 800);

            setTimeout(function() {
                textAnimation("right", true, cZ);
                showElement("#button_forward", animationTimeFade);
            }, 600);
        }, 2000);
    });

    //-------------------------------------BUTTONS--------------------------------------
    //----------------------------------------------------------------------------------

    $("#pmenu").click(function() {
        showMenu();
    });

    $("#pclose").click(function() {
        hideMenu();
    });

    $("#button_vNav").click(function() {
        showMenu();
    });

    $("#button_c1p1z1").click(function() {
        clickMenuLink(this, 1, 1, 0);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";
        }, 500);
        setTimeout(function() {
            hideElement("#button_backward", 0);
        }, 1310);
    });

    $("#button_c1p1z2").click(function() {
        clickMenuLink(this, 1, 2, 0);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";
        }, 500);
    });

    $("#button_c1p1z3").click(function() {
        clickMenuLink(this, 1, 3, 0);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";

        }, 500);
    });

    $("#button_c2p1z0").click(function() {
        clickMenuLink(this, 2, 0, 1);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";
        }, 500);
    });

    $("#button_c2p1z1").click(function() {
        clickMenuLink(this, 2, 1, 2);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";
        }, 500);
    });

    $("#button_c2p1z2").click(function() {
        clickMenuLink(this, 2, 2, 3);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";
        }, 500);
    });

    $("#button_c2p1z3").click(function() {
        clickMenuLink(this, 2, 3, 4);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";
        }, 500);
    });

    $("#button_c2p1z4").click(function() {
        clickMenuLink(this, 2, 4, 5);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";
        }, 500);
    });

    $("#button_c3p1z0").click(function() {
        clickMenuLink(this, 3, 0, 6);
        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";
        }, 500);

        setTimeout(function() {
            hideElement("#button_backward", 0);
            showElement(".buttonsC3", 500);
        }, 1310);
    });

    $("#button_c3p1z1").click(function() {
        clickMenuLink(this, 3, 1, 6);

        setTimeout(function() {
            disableScrolling();
        }, 550);

        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";
        }, 500);
        setTimeout(function() {
            showElement("#c3_button_close", 500);
        }, 1300);
    });

    $("#button_c3p1z2").click(function() {
        clickMenuLink(this, 3, 2, 6);

        setTimeout(function() {
            disableScrolling();
        }, 550);

        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";
        }, 500);
        setTimeout(function() {
            showElement("#c3_button_close", 500);
        }, 1300);
    });

    $("#button_c3p1z3").click(function() {
        clickMenuLink(this, 3, 3, 6);

        setTimeout(function() {
            disableScrolling();
        }, 550);

        setTimeout(function() {
            $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";
        }, 500);
        setTimeout(function() {
            showElement("#c3_button_close", 500);
        }, 1300);
    });

    $("#button_c3p1z4").click(function() {
        clickMenuLink(this, 3, 4, 6);

        setTimeout(function() {
            disableScrolling();
        }, 550);

        setTimeout(function() {
            hideElement("#button_forward");
        }, 500);
        setTimeout(function() {
            showElement("#c3_button_close", 500);
            showPartner(500);
        }, 1300);
    });

    $("#button_credits").click(function() {
        if ($("#intro").css("opacity") == 1) {
            hideElement("#intro", 600);
            //enableScrolling();

            $("#logo").animate({
                width: "55px",
                height: "55px"
            }, 300);

            showElement("#pmenu", 300);
            showElement("#vNav1", 300);
            showElement("#hNav1", 300);
            showElement(".menu_title", 300);

            $.scrollify({
                section: ".scrollifySections",
                sectionName: false,
                scrollSpeed: 3000,
                easing: "linear",
                scrollbars: false,
                before: function(index) { startScrollManager(index - 1); },
                after: function(index) { stopScrollManager(index - 1); },
            });
        };

        setTimeout(function() {
            clickMenuLink(this, 3, 4, 6);
        }, 300);

        setTimeout(function() {
            hideElement("#button_forward");
        }, 500);
        setTimeout(function() {
            disableScrolling();
        }, 1000);
        setTimeout(function() {
            showElement("#c3_button_close", 500);
            showPartner(500);

        }, 1300);
    });

    $("#button_menuIntro").click(function() {
        location.href = location.href;
        // window.location.reload();
    });

    $("#button_forward").click(function() {
        if (menuActive == true) {
            hideMenu();
        };

        if (cC == 1) {

            if (cZ == 3) {
                $.scrollify.next();
            } else {
                currentLoop = getCurrentLoop();
                nextLoop = "#c" + cC + "p" + cP + "loop" + (cZ + 1);
                currentZoom = "#c" + cC + "p" + cP + "zoom" + cZ + "f";
                zoomDuration = $(currentZoom).get(0).duration * 1000;

                setTimeout(function() {
                    changeZoom(true);
                }, 500);

                textAnimation("left", false);
                changeHorizontalNavigation(2, 1)
                if (cZ == 2) {
                    setTimeout(function() {
                        $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";
                        changeHorizontalNavigation(3, 1)
                    }, 1500);
                };

                setTimeout(function() {
                    cZ += 1;
                }, 1);

                setTimeout(function() {
                    showElement("#button_backward", 0);
                    textAnimation("right", true, cZ);
                }, zoomDuration + 2000);

            }
        } else if (cC == 2) {
            $.scrollify.next();
        } else if (cC == 3) {
            if (cZ == 0) {
                playZoom(1, cZ);
            } else if (cZ == 1) {
                playZoom(2, cZ);
            } else if (cZ == 2) {
                playZoom(3, cZ);
            } else if (cZ == 3) {
                playZoom(4, cZ);
                setTimeout(function() {
                    hideElement("#button_forward");
                }, 500);
            };
        };
    });

    $("#button_backward").click(function() {
        if (menuActive == true) {
            hideMenu();
        };

        if (cC == 1) {

            currentLoop = getCurrentLoop();
            nextLoop = "#c" + cC + "p" + cP + "loop" + (cZ - 1);
            currentZoom = "#c" + cC + "p" + cP + "zoom" + (cZ - 1) + "b";
            zoomDuration = $(currentZoom).get(0).duration * 1000;

            setTimeout(function() {
                changeZoom(false);
            }, 500);

            textAnimation("right", false);

            if (cZ == 2) {
                hideElement("#button_backward", animationTimeFade);
                changeHorizontalNavigation(1, 1);
            }

            if (cZ == 3) {
                setTimeout(function() {
                    changeHorizontalNavigation(2, 1);
                    $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";
                    showElement("#button_forward", animationTimeFade)
                }, zoomDuration + 1500);
            };

            setTimeout(function() {
                cZ -= 1;
            }, 1);

            setTimeout(function() {
                textAnimation("left", true, cZ);
            }, zoomDuration + 2000);
        } else if (cC == 2) {
            $.scrollify.previous();
        } else if (cC == 3) {
            if (cZ == 1) {
                backToOverview();
            } else if (cZ == 2) {
                playZoom(1, cZ);
            } else if (cZ == 3) {
                playZoom(2, cZ);
            } else if (cZ == 4) {
                playZoom(3, cZ);
                hidePartner(animationTimeFade);
                setTimeout(function() {
                    showElement("#button_forward");
                }, 500);
            };
        };
    });

    $("#c3_button_part1").click(function() {
        playZoom(1, 0);
        disableScrolling();
    });

    $("#c3_button_part2").click(function() {
        playZoom(2, 0);
        disableScrolling();
    });

    $("#c3_button_part3").click(function() {
        playZoom(3, 0);
        disableScrolling();
    });

    $("#c3_button_close").click(function() {
        if (menuActive == true) {
            hideMenu();
        };

        backToOverview();
    });

    //-------------------------------------SCROLLING------------------------------------
    //----------------------------------------------------------------------------------

    var wH = $(window).height();
    var wHFactor = wH / 3;
    var scrollPos = window.pageYOffset / wHFactor;
    var targetScrollPos = 0;
    var accel = 0;
    var accelamount = 1; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.
    var currentScrollTop = 0;
    var currentThreshold = 0;
    var scrollInterval0, scrollInterval1, scrollInterval2, scrollInterval3, scrollInterval4, scrollInterval5;
    var c1Scroll;
    var c1cZ = 1
    var lastIndex = -1;
    var lastScroll, lastLoop;


    $(window).scroll(function() {
        currentScrollTop = $(window).scrollTop();
        targetScrollPos = (window.pageYOffset - currentThreshold) / wHFactor;
    });

    function startScrollManager(index) {
        if (menuActive == true) {
            hideMenu();
        };

        if (menuClick == false) {


            if (index >= lastIndex) {
                // console.log("start: " + index);
                // console.log("down!!")

                if (index > 0) {
                    cZ = index;
                };

                var functionName = "startScrolling" + index;
                currentThreshold = index * wH;
                textAnimation("down", false);

                switch (index) {
                    case 0:
                        c1cZ = cZ;
                        hideVideo("#c1p1loop" + c1cZ);
                        setTimeout(function() {
                            cZ = 0;
                        }, 50);
                        break;
                    case 1:
                        hideVideo("#c2p1loop0", 500);
                        break;
                    case 2:
                        hideVideo("#c2p1loop1", 500);
                        break;
                    case 3:
                        hideVideo("#c2p1loop2", 500);
                        break;
                    case 4:
                        hideVideo("#c2p1loop3", 500);
                        break;
                    case 5:
                        hideVideo("#c2p1loop4", 500);
                        break;
                }
            } else if (index < lastIndex) {
                index += 1;
                // console.log("start: " + index);
                // console.log("up!!")

                var functionName = "startScrolling" + (index);
                currentThreshold = (index) * wH;
                textAnimation("up", false);
                switch (index) {
                    case 0:
                        cC = 1;
                        cZ = c1cZ;
                        // console.log("chapter1");
                        hideVideo("#c2p1loop0");
                        break;
                    case 1:
                        cZ = index;
                        hideVideo("#c2p1loop1");
                        break;
                    case 2:
                        cZ = index;
                        hideVideo("#c2p1loop2");
                        break;
                    case 3:
                        cZ = index;
                        hideVideo("#c2p1loop3");
                        break;
                    case 4:
                        cZ = index;
                        hideVideo("#c2p1loop4");
                        break;
                    case 5:
                        cZ = index;
                        hideVideo("#c3p1loop0", 50);
                        hideElement(".buttonsC3", 150);
                        break;
                }
            };
            callbacks[functionName](getCurrentScroll());

            lastScroll = getCurrentScroll();
            lastIndex = index;
        };
    };

    function stopScrollManager(index) {
        if (menuClick == false) {

            if (index == lastIndex) {
                // console.log("end: " + index);
                // console.log("down!!")

                switch (index) {
                    case 0:
                        cC = 2;
                        // console.log("CHAPTER2");
                        showVideo("#c2p1loop0", 0, true);
                        clearInterval(scrollInterval0);
                        hideVideoNoReset(lastScroll, 0);
                        $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";
                        showElement("#button_backward");
                        changeHorizontalNavigation(1, 2);
                        textAnimation("up", true, 1);

                        changeVerticalNavigation(2);
                        break;
                    case 1:
                        showVideo(getCurrentLoop(), 0, true);
                        clearInterval(scrollInterval1);
                        hideVideoNoReset(lastScroll, 0);

                        changeHorizontalNavigation(2, 2);
                        textAnimation("up", true, 2);
                        break;
                    case 2:
                        showVideo(getCurrentLoop(), 0, true);
                        clearInterval(scrollInterval2);
                        hideVideoNoReset(lastScroll, 0);
                        changeHorizontalNavigation(3, 2);
                        textAnimation("up", true, 3);

                        break;
                    case 3:
                        showVideo(getCurrentLoop(), 0, true);
                        clearInterval(scrollInterval3);
                        hideVideoNoReset(lastScroll, 0);
                        changeHorizontalNavigation(4, 2);
                        textAnimation("up", true, 4);

                        break;
                    case 4:
                        showVideo(getCurrentLoop(), 0, true);
                        clearInterval(scrollInterval4);
                        hideVideoNoReset(lastScroll, 0);
                        changeHorizontalNavigation(5, 2);
                        textAnimation("up", true, 5);
                        break;
                    case 5:

                        setTimeout(function() {
                            clearInterval(scrollInterval5);
                            hideVideoNoReset(lastScroll);
                        }, 1000);

                        showVideo("#c3p1loop0", 700, true);
                        setTimeout(function() {
                            showElement(".buttonsC3", 500);

                            // hideElement(".horizontalNavigation");
                            hideElement("#button_backward");
                            $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";

                            changeVerticalNavigation(3);
                            changeHorizontalNavigation(1, 3);
                            // textAnimation("up", true, 6);
                            setTimeout(function() {
                                cC = 3;
                                cZ = 0;
                                textAnimation("up", true, cZ);
                            }, 50);
                        }, 1500);
                        break;
                };

            } else if (index < lastIndex) {
                index += 1;
                // console.log("end: " + index);
                // console.log("up!!")
                switch (index) {
                    case 0:
                        clearInterval(scrollInterval0);
                        hideVideoNoReset(lastScroll, 0);
                        changeVerticalNavigation(1);
                        if (c1cZ < 3) {
                            $("#button_forward").find("span")[0].innerHTML = "continue&emsp;&#10230;";
                        };
                        showVideo("#c1p1loop" + c1cZ, 0, true);
                        changeHorizontalNavigation(c1cZ, 1);
                        break;
                    case 1:
                        clearInterval(scrollInterval1);
                        hideVideoNoReset(lastScroll, 0);
                        showVideo("#c2p1loop0", 0, true);
                        changeHorizontalNavigation(1, 2);

                        break;
                    case 2:
                        clearInterval(scrollInterval2);
                        hideVideoNoReset(lastScroll, 0);
                        showVideo("#c2p1loop1", 0, true);
                        changeHorizontalNavigation(2, 2);
                        break;
                    case 3:
                        clearInterval(scrollInterval3);
                        hideVideoNoReset(lastScroll, 0);
                        showVideo("#c2p1loop2", 0, true);
                        changeHorizontalNavigation(3, 2);
                        break;
                    case 4:
                        clearInterval(scrollInterval4);
                        hideVideoNoReset(lastScroll, 0);
                        showVideo("#c2p1loop3", 0, true);
                        changeHorizontalNavigation(4, 2);

                        break;
                    case 5:
                        clearInterval(scrollInterval5);
                        hideVideoNoReset("#c2p1scroll5", 500);
                        showVideo("#c2p1loop4", 0, true);
                        cC = 2;
                        hideElement(".buttonsC3", 300);
                        $("#button_forward").find("span")[0].innerHTML = "scroll down<br>&#x2193;";
                        showElement(".nav_main_text");
                        showElement("#button_backward");
                        changeVerticalNavigation(2);
                        changeHorizontalNavigation(5, 2);
                        break;
                };
                textAnimation("down", true, cZ);
            };

            lastLoop = getCurrentLoop();
        } else {
            menuClick = false;
        }
    };

    var callbacks = {
        startScrolling0: function(video) {
            if (video != undefined) {
                // $(video).get(0).pause();
                targetScrollPos = (window.pageYOffset - currentThreshold) / wHFactor;
                // console.log(targetScrollPos);
                scrollPos += (targetScrollPos - scrollPos) * accelamount;
                $(video).get(0).currentTime = scrollPos;
                showVideo(video, 0);
                scrollInterval0 = setInterval(function() {
                    // console.log("interval0 running")
                    scrollPos += (targetScrollPos - scrollPos) * accelamount;
                    $(video).get(0).currentTime = scrollPos;
                    $(video).get(0).pause();
                }, 40);

            };
        },
        startScrolling1: function(video) {
            if (video != undefined) {
                video = "#c2p1scroll1";
                // $(video).get(0).pause();
                targetScrollPos = (window.pageYOffset - currentThreshold) / wHFactor;
                // console.log(targetScrollPos);
                scrollPos += (targetScrollPos - scrollPos) * accelamount;
                $(video).get(0).currentTime = scrollPos;
                showVideo(video, 0);
                scrollInterval1 = setInterval(function() {
                    // console.log("interval1 running")
                    scrollPos += (targetScrollPos - scrollPos) * accelamount;
                    $(video).get(0).currentTime = scrollPos;
                    $(video).get(0).pause();
                }, 40);
            };
        },
        startScrolling2: function(video) {
            if (video != undefined) {
                video = "#c2p1scroll2"
                // $(video).get(0).pause();
                targetScrollPos = (window.pageYOffset - currentThreshold) / wHFactor;
                // console.log(targetScrollPos);
                scrollPos += (targetScrollPos - scrollPos) * accelamount;
                $(video).get(0).currentTime = scrollPos;
                showVideo(video, 0);
                scrollInterval2 = setInterval(function() {
                    // console.log("interval2 running")
                    scrollPos += (targetScrollPos - scrollPos) * accelamount;
                    $(video).get(0).currentTime = scrollPos;
                    $(video).get(0).pause();
                }, 40);
            };
        },
        startScrolling3: function(video) {
            if (video != undefined) {
                video = "#c2p1scroll3"
                // $(video).get(0).pause();
                targetScrollPos = (window.pageYOffset - currentThreshold) / wHFactor;
                // console.log(targetScrollPos);
                scrollPos += (targetScrollPos - scrollPos) * accelamount;
                $(video).get(0).currentTime = scrollPos;
                showVideo(video, 0);
                scrollInterval3 = setInterval(function() {
                    // console.log("interval3 running")
                    scrollPos += (targetScrollPos - scrollPos) * accelamount;
                    $(video).get(0).currentTime = scrollPos;
                    $(video).get(0).pause();
                }, 40);
            };
        },
        startScrolling4: function(video) {
            if (video != undefined) {
                video = "#c2p1scroll4"
                // $(video).get(0).pause();
                targetScrollPos = (window.pageYOffset - currentThreshold) / wHFactor;
                // console.log(targetScrollPos);
                scrollPos += (targetScrollPos - scrollPos) * accelamount;
                $(video).get(0).currentTime = scrollPos;
                showVideo(video, 0);
                scrollInterval4 = setInterval(function() {
                    // console.log("interval4 running")
                    scrollPos += (targetScrollPos - scrollPos) * accelamount;
                    $(video).get(0).currentTime = scrollPos;
                    $(video).get(0).pause();
                }, 40);
            };
        },
        startScrolling5: function(video) {
            if (video != undefined) {
                video = "#c2p1scroll5"
                // $(video).get(0).pause();
                targetScrollPos = (window.pageYOffset - currentThreshold) / wHFactor;
                // console.log(targetScrollPos);
                scrollPos += (targetScrollPos - scrollPos) * accelamount;
                $(video).get(0).currentTime = scrollPos;
                showVideo(video, 0);
                scrollInterval5 = setInterval(function() {
                    // console.log("interval5 running")
                    scrollPos += (targetScrollPos - scrollPos) * accelamount;
                    $(video).get(0).currentTime = scrollPos;
                    $(video).get(0).pause();
                }, 40);
            };
        },
    };

    //-------------------------------------FUNCTIONS------------------------------------
    //----------------------------------------------------------------------------------


    function changeZoom(reset) {
        if (reset == true) {
            showVideo(currentZoom, animationTime0, true);
        } else if (reset == false) {
            showVideo(currentZoom, animationTime0);
        };
        $(currentZoom).get(0).pause();

        hideVideo(currentLoop, animationTimeFade);

        setTimeout(function() {
            $(currentZoom).get(0).play(); //Übergang abspielen
        }, animationTimeFade + 100);

        zoomDuration = $(currentZoom).get(0).duration * 1000;

        setTimeout(function() {
            $(nextLoop).get(0).play(); //neues Video abspielen
            showVideo(nextLoop, animationTimeFade, true); //neues Video einblenden

            setTimeout(function() {
                hideVideo(currentZoom); //Übergang zurücksetzen und ausblenden
            }, animationTimeFade);
        }, zoomDuration + 600);
    };

    function showVideo(video, time, reset) {
        $(video).show();
        if (reset == true) {
            $(video).get(0).currentTime = 0;
        }
        $(video).animate({
            opacity: 1
        }, time);
    };

    function hideVideo(video, time) {
        $(video).animate({
            opacity: 0
        }, time, function() {
            $(video).get(0).currentTime = 0;
            $(video).hide();
        });
    };

    function hideVideoNoReset(video, time) {
        $(video).animate({
            opacity: 0
        }, time, function() {
            $(video).hide();
        });
    };

    function showElement(element, time) {
        $(element).show();
        $(element).animate({
            opacity: 1
        }, time);
    };

    function hideElement(element, time) {
        $(element).animate({
            opacity: 0
        }, time, function() {
            $(element).hide();
        });
    };

    function showPartner(time) {
        showElement("#partner", time);
        $("#fadeToBlack2").show();
        $("#fadeToBlack2").animate({
            opacity: 0.5
        }, time);
    };

    function hidePartner(time) {
        hideElement("#partner", time);
        hideElement("#fadeToBlack2", time);
    }

    function getCurrentScroll() {
        currentScroll = "#c" + cC + "p" + cP + "scroll" + cZ;
        return currentScroll;
    };

    function getCurrentLoop() {
        currentLoop = "#c" + cC + "p" + cP + "loop" + cZ;
        return currentLoop;
    };

    function playZoom(zoom, loop) {
        if (menuActive == true) {
            hideMenu();
        };

        cZ = zoom;

        currentLoop = "#c3p1loop" + loop;
        nextLoop = "#c3p1loop" + cZ;

        if ((zoom == 1) && (loop == 2)) {
            currentZoom = "#c3p1zoom0b";
        } else if ((zoom == 4) && (loop == 3)) {
            currentZoom = "#c3p1zoom0b";
        } else {
            currentZoom = "#c3p1zoom" + cZ + "f";
        };

        zoomDuration = $(currentZoom).get(0).duration * 1000;

        changeZoom(true);

        setTimeout(function() {
            hideElement(".buttonsC3", animationTimeFade);
            textAnimation("down", false);
        }, 100);

        setTimeout(function() {
            changeHorizontalNavigation(zoom + 1, 5);
            showElement("#button_backward");
            textAnimation("down", true, cZ);
            showElement("#c3_button_close", 300);
            if (cZ == 4) {
                showPartner(500);
            }
        }, zoomDuration + 1000);
    };

    function backToOverview() {

        currentLoop = getCurrentLoop();
        nextLoop = "#c3p1loop0";
        currentZoom = "#c3p1zoom0b";

        setTimeout(function() {
            hideElement("#c3_button_close", animationTimeFade);
            textAnimation("down", false);
            hideElement("#button_backward");
            hidePartner(animationTimeFade)
        }, 100);

        changeZoom(true);

        setTimeout(function() {
            changeHorizontalNavigation(1, 5);
            showElement(".buttonsC3", animationTimeFade);
            showElement("#button_forward");
            textAnimation("down", true, 0)
            cZ = 0;
            enableScrolling();

        }, 1500)
    };

    function changeMainText(textZoom) {

        // console.log("Chapter: " + cC);
        // console.log("Part: " + cP);
        // console.log("Zoom: " + cZ);
        // console.log("TextZoom: " + textZoom);

        var node = texts.Chapter[cC].Part[cP].Zoom[textZoom];
        $("#h_main_text").html(node.headline);
        $("#p_main_text").html(node.text);
    };

    function changeVerticalNavigation(show) {
        var showID = "#vNav" + show;

        hideElement(".verticalNavigation:not(" + showID + ")", 300);
        showElement(showID, 300);
    };

    function changeHorizontalNavigation(show, chapter) {
        if (chapter == 1) {
            var count = 3;
        } else {
            var count = 5;
        };

        var showID = "#hNav" + show + "C" + count;

        hideElement(".horizontalNavigation:not(" + showID + ")");
        showElement(showID);
    };

    function textAnimation(scrollDirection, fadeIn, textZoom) {

        var textOffsetX, textOffsetY;

        switch (scrollDirection) {
            case "down":
                textOffsetX = 0;
                textOffsetY = "-30px";
                break;
            case "up":
                textOffsetX = 0;
                textOffsetY = "30px";
                break;
            case "right":
                textOffsetX = "30px";
                textOffsetY = 0;
                break;
            case "left":
                textOffsetX = "-30px";
                textOffsetY = 0;
                break;
        };

        if (fadeIn == true) {
            changeMainText(textZoom);
            $(".main_text").show();
            $(".main_text").transition({ x: textOffsetX, y: textOffsetY, duration: 1 })
                .transition({ x: 0, y: 0, opacity: 1, duration: 500 });
        } else if (fadeIn == false) {
            $(".main_text").transition({ x: textOffsetX, y: textOffsetY, opacity: 0, duration: 300 })
                .transition({ x: 0, y: 0, duration: 1 });
        };
    };

    function disableScrolling() {
        // $('body').addClass('noScroll');
        $("body").css("overflow", "hidden");
        $.scrollify.disable();
        // console.log("disable scrolling!");
    };

    function enableScrolling() {
        // $('body').addClass('noScroll');
        $("body").css("overflow-y", "visible");
        $.scrollify.enable()
        $.scrollify({
            scrollbars: false,
        });
        // console.log("enable scrolling!");
    };

    function showMenu() {
        menuActive = true;
        $("#menu").animate({
            left: "0px"
        }, 300);

        hideElement("#pmenu", 200);
        showElement("#pclose", 300);


        setActiveLinkClass();

        if ($(".buttonsC3").css('opacity') == 1) {
            hideElement(".buttonsC3", 200);
        };

        if ($("#partner").css('opacity') == 1) {
            hidePartner(200);
        };

        console.log("Chapter: " + cC);
        console.log("Part: " + cP);
        console.log("Zoom: " + cZ);
    };

    function hideMenu() {
        menuActive = false;
        $("#menu").animate({
            left: "-420px"
        }, 200);

        hideElement("#pclose", 200);
        showElement("#pmenu", 300);

        $(".menu_link").removeClass("link_active");

        if ((cC == 3) && (cZ == 0)) {
            setTimeout(function() {
                showElement(".buttonsC3", 300);
            }, 500);
        };

        if ((cC == 3) && (cZ == 4)) {
            setTimeout(function() {
                showPartner(300);
            }, 500);
        };
    };

    function getActiveLink() {
        console.log("active: " + cZ);
        var zoom = cZ;
        var scrollIndex = $.scrollify.currentIndex();
        if ((scrollIndex <= 4) && (scrollIndex >= 2)) {
            zoom = scrollIndex - 1;
        } else if (scrollIndex == 1) {
            zoom = 0;
        }
        var buttonName = "button_c" + cC + "p" + cP + "z" + zoom;
        return buttonName;
    };

    function setActiveLinkClass() {
        var buttonName = "#" + getActiveLink();
        $(buttonName).addClass("link_active");
    };

    function clickMenuLink(button, c, z, i) {
        if ($(button).hasClass("link_active") == false) {
            if ($.scrollify.isDisabled() == true) {
                enableScrolling();
            };

            menuClick = true;
            showElement("#fadeToBlack", 500)
            textAnimation("left", false);

            setTimeout(function() {
                hideMenu();
            }, 100);

            setTimeout(function() {
                hideVideo(getCurrentLoop());
                hideElement(".buttonsC3");
                hideElement("#c3_button_close");
                $.scrollify.instantMove(i);
            }, 500);

            setTimeout(function() {
                cC = c;
                cZ = z;
                lastIndex = i;

                if (cC == 1) {
                    changeHorizontalNavigation(cZ, cC);
                } else {
                    changeHorizontalNavigation(cZ + 1, cC);
                };
                changeVerticalNavigation(cC);

                showVideo(getCurrentLoop(), 0, true);


                setTimeout(function() {
                    hideElement("#fadeToBlack", 500);
                    showElement("#button_backward");
                    if (cC == 2) {
                        textAnimation("left", true, cZ + 1);
                    } else {
                        textAnimation("left", true, cZ);
                    };
                }, 300);
            }, 1000);
        };
    };

    var texts = {
        "Chapter": [{
                "Chapter_": 0,
                "Part": [{
                    "Part_": 0,
                    "Zoom": [
                        { "headline": " ", "text": " ", },
                    ]
                }]
            },
            {
                "Chapter_": 1,
                "Part": [{
                        "Part_": 0,
                    },
                    {
                        "Part_": 1,
                        "Zoom": [
                            { "headline": " ", "text": " ", },
                            { "headline": "<span class='headlineNumber'>1.</span>  ", "text": "Some four billion years ago, an active galaxy in the constellation of Orion sent a ghostly subatomic particle, called a neutrino, speeding towards Earth. Active galaxies are large, elliptical galaxies with an extremely bright core at its centre, powered by a supermassive black hole.<br><span class='spacer'></span>They are an interesting target for multimessenger astronomy as they are expected to produce various cosmic messengers: light of all wavelength, charged and uncharged particles and even gravitational waves.", },
                            { "headline": "<span class='headlineNumber'>2.</span>  ", "text": "At the core of an active galaxy, a supermassive black hole is devouring large amounts of matter from its surroundings. Before falling into the black hole, gas and dust are thought to accumulate in a giant, donut-shaped torus, surrounding the central black hole.<br><span class='spacer'></span>As the material falls further in, angular momentum will cause it to spiral in and form into a disc. This accretion disc, nestled inside the donut and not visible here, heats up due to friction and shines extremely bright.", },
                            { "headline": "<span class='headlineNumber'>3.</span>  ", "text": "At the center of the accretion disc lies the supermassive black hole. Despite its small size, it typically has the mass of millions to billions of stars. The central black hole is surrounded by the hot, fast-spinning accretion disc.<br><span class='spacer'></span>About one in ten active galaxies develops narrow jets of ultrafast, “relativistic” particles perpendicular to the accretion disc. These jets are expected to be powerful particle accelerators and can extend thousands of light years into the cosmos, in opposite directions.<br><span class='spacer'></span>The phenomena in active galaxies, including the formation of jets, are not fully understood, and multimessenger observations can provide new insights on the physics at work in these objects.", },
                        ]
                    },
                ]
            },
            {
                "Chapter_": 2,
                "Part": [{
                        "Part_": 0,
                    },
                    {
                        "Part_": 1,
                        "Zoom": [
                            { "headline": " ", "text": " ", },
                            { "headline": "<span class='headlineNumber'>1.</span> The jet", "text": "If the jet of an active galaxy happens to point directly at Earth, the galaxy is classified as a blazar. Blazars are especially bright, but also highly variable celestial objects, changing their brightness dramatically, sometimes in hours to weeks.<br><span class='spacer'></span>The jet is thought to contain charged subatomic particles (cosmic rays), gamma rays (extremely energetic light), and neutrinos. All of them experience different phenomena on their way through the cosmos.<br><span class='spacer'></span>Of all the myriads of neutrinos in the jet from this blazar, just one (depicted in the centre) finally showed up in a detector on Earth, triggering an observation campaign that became a milestone for multimessenger astronomy.", },
                            { "headline": "<span class='headlineNumber'>2.</span> Charged particles", "text": "The charged particles, or cosmic rays, in the jet are quickly deflected from their initial path by intergalactic magnetic fields and send spiraling through the universe. That is why cosmic rays cannot easily be traced back to their origin when they are detected on Earth.<br><span class='spacer'></span>Since the discovery of cosmic rays more than a century ago in 1912, their sources have posed a major mystery in astrophysics that still hasn't been fully solved today.", },
                            { "headline": "<span class='headlineNumber'>3.</span> Gamma rays", "text": "Cosmic gamma rays can interact with light from stars or the cosmic microwave background (sometimes dubbed the “echo of the Big Bang”), spontaneously creating pairs of electrons and positrons.<br><span class='spacer'></span>These electrically charged particles are then again deflected by magnetic fields. The initial gamma rays are lost, and so the gamma-ray signal dims over large distances.", },
                            { "headline": "<span class='headlineNumber'>4.</span> Neutrinos", "text": "Neutrinos are the lightest and least interacting of all known particles. They easily fly through planets, stars and whole galaxies, completely unaffected. Because of this, neutrinos can reach us from extreme environments in the cosmos, inaccessible by other messengers.<br><span class='spacer'></span>Neutrinos exhibit a peculiar feature, called oscillation: There are three types, electron neutrino, muon neutrino and tau neutrino. It turns out that each is in fact a superposition of three mass states. This superposition changes with distance, meaning that neutrinos change their type, or flavour, over distance. For instance, a muon neutrino can oscillate into a tau neutrino or into an electron neutrino and back.", },
                            { "headline": "<span class='headlineNumber'>5.</span> Earthbound", "text": "After more than four billion years in space, the blazar neutrino – along with countless other neutrinos and gamma rays from the distant active galaxy – entered our cosmic home, the Milky Way, on a straight path towards Earth.", },
                        ]
                    },
                ]
            },
            {
                "Chapter_": 3,
                "Part": [{
                        "Part_": 0,
                    },
                    {
                        "Part_": 1,
                        "Zoom": [
                            { "headline": "<span class='headlineNumber'>1.</span> Watching the sky", "text": "A wide variety of instruments is observing the cosmos from Earth, covering all parts of the electromagnetic spectrum (light), counting cosmic rays, listening to gravitational waves and looking out for elusive neutrinos. A combination of signals from different messengers led to the first compelling detection of an extragalactic particle accelerator for extremely high energies.<br><span class='spacer'></span>The coordinated observation campaign was triggered by the neutrino that got caught by the IceCube neutrino telescope in Antarctica on 22 September 2017.", },
                            { "headline": "<span class='headlineNumber'>2.</span> Neutrinos", "text": "Neutrinos nearly never interact with anything. To spot the rare interactions of neutrinos, detectors need to be really big. The neutrino telescope IceCube in Antarctica monitors a cubic kilometre of underground ice. Its spies for flashes of light generated when a cosmic neutrino hits an atom of the ice, sparking a cascade of secondary particles that leave their trace in the detector.<br><span class='spacer'></span>Whenever IceCube detects a cosmic neutrino, it issues an automatic alert to observatories around the world. This also happened on 22 September 2017, when the high-energy neutrino from the direction of the distant blazar was detected by IceCube.", },
                            { "headline": "<span class='headlineNumber'>3.</span> Gamma rays", "text": "To detect gamma rays from cosmic sources directly, the detector has to be above Earth's atmosphere that absorbs the energetic light. NASA's Large Area Telescope (LAT) onboard of the Fermi Gamma-ray Space Telescope regularly monitors the full sky from Earth's orbit. Fermi-LAT detects numerous variable gamma-ray sources, both, galactic and intergalactic.<br><span class='spacer'></span>In September 2017, the satellite recorded more gamma rays than usual from the blazar designated TXS 0506+056, located more than four billion lightyears away in the constellation of Orion and matching the direction of origin for the IceCube neutrino detected on 22 September 2017.", },
                            { "headline": "<span class='headlineNumber'>4.</span> Gamma rays", "text": "Very high-energy gamma rays are too rare to be measured directly by the small detectors of satellites. Earthbound Cherenkov telescopes monitor the sky for avalanches of fast particles that are created when a very high-energy cosmic gamma ray hits a molecule in the air.<br><span class='spacer'></span>This way, the Major Atmospheric Gamma-Ray Imaging Cherenkov Telescopes (MAGIC) on the Canary island of La Palma detected the active galaxy TXS 0506+056 for the first time in very high-energy gamma rays in September 2017, when the Antarctic neutrino telescope IceCube had sent an alert after recording a high-energy neutrino from the constellation of Orion.", },
                            { "headline": "<span class='headlineNumber'>5.</span> A milestone", "text": "A multitude of observatories, from radio telescopes and optical telescopes on the ground to X-ray and gamma-ray satellites in Earth's orbit followed the IceCube alert and detected the flaring blazar, painting a complex picture of the cosmic accelerator.<br><span class='spacer'></span>Taken together, the observations provided compelling evidence that the active galaxy TXS 0506+056 is the first identified source of intergalactic high-energy neutrinos. Since neutrinos are a by-product of the acceleration of cosmic rays, the data also help to resolve the century-old riddle about the origins of these energetic particles.<br><span class='spacer'></span>All in all, 18 observatories were involved in achieving this milestone in multimessenger astronomy.", },
                        ]
                    },
                ]
            }
        ],
    };

};

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});