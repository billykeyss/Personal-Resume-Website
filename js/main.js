function showStuff(r) {
    r.style.display = "block"
}

function changeText(r) {
    document.getElementById("expertTitle").innerHTML = r
}! function (r) {
    function e() {
        r(window).innerWidth() <= 960 ? r("html").niceScroll().remove() : r("html").niceScroll({
            zindex: 999,
            cursorborder: "",
            cursorborderradius: "2px",
            cursorcolor: "#191919",
            cursoropacitymin: .5
        })
    }
    if (r(window).scroll(function () {
            r(this).scrollTop() > 100 ? r(".scrollup").fadeIn() : r(".scrollup").fadeOut()
        }), r(".scrollup").click(function () {
            return r("html, body").animate({
                scrollTop: 0
            }, 500), !1
        }), jQuery(".navbar").localScroll({
            hash: !0,
            offset: {
                top: 0
            },
            duration: 800,
            easing: "easeInOutExpo"
        }), r("#quickstart").hover(function () {
            r("#visiblepanel").toggle()
        }), r(".isotopeWrapper").length) {
        var o = r(".isotopeWrapper"),
            t = r(".isotopeWrapper").attr("id");
        o.isotope({
            itemSelector: ".isotopeItem",
            resizable: !1,
            masonry: {
                columnWidth: o.width() / t
            }
        }), r("#filter a").click(function () {
            r("#filter a").removeClass("current"), r(this).addClass("current");
            var e = r(this).attr("data-filter");
            return o.isotope({
                filter: e,
                animationOptions: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    queue: !1
                }
            }), !1
        }), r(window).smartresize(function () {
            o.isotope({
                masonry: {
                    columnWidth: o.width() / t
                }
            })
        })
    }
    if (jQuery(".fancybox").fancybox(), Modernizr.mq("screen and (max-width:1024px)")) jQuery("body").toggleClass("body");
    else {
        skrollr.init({
            mobileDeceleration: 1,
            edgeStrategy: "set",
            forceHeight: !0,
            smoothScrolling: !0,
            smoothScrollingDuration: 300,
            easing: {
                WTF: Math.random,
                inverted: function (r) {
                    return 1 - r
                }
            }
        })
    }
    jQuery(".appear").appear(), jQuery(".appear").on("appear", function (e) {
        var o = r(this).attr("id");
        jQuery(".nav li").removeClass("active"), jQuery(".nav a[href='#" + o + "']").parent().addClass("active")
    });
    var i = !1;
    Modernizr.mq("only all and (max-width: 1024px)") && (i = !0), 0 == i && (r("#parallax1").length || 0 == i && r("#parallax2").length || 0 == i && r("#testimonials").length) && r(window).stellar({
        responsive: !0,
        scrollProperty: "scroll",
        parallaxElements: !1,
        horizontalScrolling: !1,
        horizontalOffset: 0,
        verticalOffset: 0
    })
}(jQuery);


var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};
var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};
var config = {
    type: 'radar',
    data: {
        labels: ["Eating", "Sleeping", "Dreaming", "Designing", "Coding", "Soccer", "Loafing"],
        datasets: [{
            label: "In a Day",
            backgroundColor: randomColor(),
            pointBackgroundColor: "rgba(220,220,220,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }, {
            label: "In a Week",
            backgroundColor: randomColor(),
            pointBackgroundColor: "rgba(151,187,205,1)",
            hoverPointBackgroundColor: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        },]
    },
    options: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'What I Do'
        },
        scale: {
          reverse: false,
          ticks: {
            beginAtZero: true
          }
        }
    }
};

$('#randomizeData').click(function() {
    $.each(config.data.datasets, function(i, dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });
    window.myRadar.update();
});
$('#addDataset').click(function() {
    var newDataset = {
        label: 'Dataset ' + config.data.datasets.length,
        borderColor: randomColor(0.4),
        backgroundColor: randomColor(0.5),
        pointBorderColor: randomColor(0.7),
        pointBackgroundColor: randomColor(0.5),
        pointBorderWidth: 1,
        data: [],
    };
    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());
    }
    config.data.datasets.push(newDataset);
    window.myRadar.update();
});
$('#addData').click(function() {
    if (config.data.datasets.length > 0) {
        config.data.labels.push('dataset #' + config.data.labels.length);
        $.each(config.data.datasets, function (i, dataset) {
            dataset.data.push(randomScalingFactor());
        });
        window.myRadar.update();
    }
});
$('#removeDataset').click(function() {
    config.data.datasets.splice(0, 1);
    window.myRadar.update();
});
$('#removeData').click(function() {
    config.data.labels.pop(); // remove the label first
    $.each(config.data.datasets, function(i, dataset) {
        dataset.data.pop();
    });
    window.myRadar.update();
});

var configDoughnut = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                randomColor(),
                randomColor(),
                randomColor(),
                randomColor(),
                randomColor(),
                randomColor()
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Soccer",
            "Camping",
            "Gaming",
            "Music",
            "Fitness",
            "Movies and TV"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Personal Hobbies'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
window.onload = function() {
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myDoughnut = new Chart(ctx, configDoughnut);
    // window.myRadar = new Chart(document.getElementById("canvas"), config);
};
