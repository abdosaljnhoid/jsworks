 
 
 
 

 
 
 
 
 
 function serviceclicked(sid,cid){

 $('#neworder_category option[value="'+cid+'"]').prop('selected', 'selected').change();
setTimeout(servd, 1000);
function servd(){
   $('#dropdown_for_search').html('');
 $('#neworder_services option[value="'+sid+'"]').prop('selected', 'selected').change();
 /* var h23 = $('#neworder_services option[value="'+sid+'"]').attr('data-content');
 h23 = h23.replace('<span class="badge badge-secondary style-text-primary badge-rounded">','');
 h23 = h23.replace('</span>','');
 h23 = h23.replace('</b>','');
 h23 = h23.replace('<b>','');*/
 
  //$('#search_services_field').val(h23);
}

 
 }
 
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(g) {
    var h = 0;
    return function() {
        return h < g.length ? {
            done: !1,
            value: g[h++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(g) {
    return {
        next: $jscomp.arrayIteratorImpl(g)
    }
};
$jscomp.makeIterator = function(g) {
    var h = "undefined" != typeof Symbol && Symbol.iterator && g[Symbol.iterator];
    if (h) return h.call(g);
    if ("number" == typeof g.length) return $jscomp.arrayIterator(g);
    throw Error(String(g) + " is not an iterable or ArrayLike");
};
$(document).ready(function() {
    function g(a, c) {
        var d = document.createElement(a);
        Object.entries(c).map(function(e) {
            var b = $jscomp.makeIterator(e);
            e = b.next().value;
            b = b.next().value;
            d.setAttribute(e, b)
        });
        document.head.appendChild(d);
        return d
    }

    function h() {
        if ("undefined" === typeof custom_options || "undefined" === typeof custom_options.disable_cat_select || !0 !== custom_options.disable_cat_select) {
            $("#neworder_category").select2({
                theme: "bootstrap",
                width: "100%",
                containerCssClass: "form-control",
                dropdownCssClass: "select2-scrollable",
                minimumResultsForSearch: Infinity,
                templateSelection: function(b, f) {
                     var icon = '';
                    if( b.element && b.element.dataset.icon && b.element.dataset.icon.length>0){
                        if(b.element.dataset.icon.indexOf('fa') > -1){
                            icon = '<i class="' + b.element.dataset.icon + '"></i>';
                        }
                        else{
                              icon = '<img height="22" style="border-radius:5px" src="/'+b.element.dataset.icon+'"/>';
                        }
                    }
                    return b.element && b.element.dataset.icon ? $('<span>'+icon + b.text + "</span>") : b.text
                },
                templateResult: function(b, f) {
                     var icon = '';
                    if( b.element && b.element.dataset.icon && b.element.dataset.icon.length>0){
                        if(b.element.dataset.icon.indexOf('fa')> -1){
                            icon = '<i class="' + b.element.dataset.icon + '"></i>';
                        }
                        else{
                              icon = '<img height="22" style="border-radius:5px" src="/'+b.element.dataset.icon+'"/>';
                        }
                    }
                    return b.element && b.element.dataset.icon ? $('<span>'+icon + b.text + "</span>") : b.text
                }
            });
            var a = $("#neworder_category"),
                c = {
                    "line-height": "28px",
                    "background-color": "#eff7f0",
                    "border-color": "#daeadc",
                    color: "#0e310f",
                    "font-size": "14px",
                    height: "40px",
                    "border-top-left-radius": "8px",
                    "border-top-right-radius": "8px",
                    "border-bottom-left-radius": "8px",
                    "border-bottom-right-radius": "8px",
                    "border-left-width": "0",
                    "border-right-width": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "2px",
                    "padding-left": "12px",
                    "padding-right": "12px",
                    "box-shadow": "none",
                    outline: "none"
                },
                d = $(".body .form-control"),
                e = $(" .select2-selection--single");
            d.length && (d = $(d).css("background-color"), c["background-color"] = d, c["border-color"] = d, $(e).css(c));
            a.on("select2:open", function() {
                setTimeout(function() {
                    m();
                    $(".select2-results__option").each(function(b, f) {
                        $(f).css("margin-top", "4px")
                    })
                }, 10)
            })
        }
    }

function n(a) {
        var c = $("link[href$='.https://cdn.mypanel.link/css/font-awesome/css/all.min.css']"),
            d = document.createElement("script");
        d.src = "https://kit.fontawesome.com/c28b5df4df.js";
        d.crossOrigin = "anonymous";
        Object.keys(c).length || (linkTagsAttr = {
            href: "https://cdn.mypanel.link/css/font-awesome/css/all.min.css",
            rel: "stylesheet",
            type: "text/css"
        }, g("link", linkTagsAttr));
        a = a.toLowerCase();
        return 0 <= a.indexOf("instagram") || 0 <= a.indexOf("إنستغرام") || 0 <= a.indexOf("إنستقرام") || 0 <= a.indexOf("إنستجرام") ?
            "fab fa-instagram" : 0 <= a.indexOf("youtube") || 0 <= a.indexOf("يوتيوب") || 0 <= a.indexOf("adwords") || 0 <= a.indexOf("adword") ? "fab fa-youtube" : 0 <= a.indexOf("facebook" ) || 0 <= a.indexOf("فيسبوك" )? "fab fa-facebook-square" : 0 <= a.indexOf("twitter") || 0 <= a.indexOf("تويتر") ? "fab fa-twitter" : 0 <= a.indexOf("التوثيق") ? "fas fa-certificate" : 0 <= a.indexOf("google") ? "fab fa-google-plus" : 0 <= a.indexOf("swarm") ? "fab fa-forumbee" : 0 <= a.indexOf("dailymotion") ? "fab fa-dailymotion" : 0 <= a.indexOf("periscope") ? "fab fa-map-marker" : 0 <= a.indexOf("soundcloud") ? "fab fa-soundcloud" : 0 <= a.indexOf("vine") ? "fab fa-vine" : 0 <= a.indexOf("spotify") ? "fab fa-spotify" :
            0 <= a.indexOf("snapchat") ? "fab fa-snapchat-square" : 0 <= a.indexOf("pinterest") ? "fab fa-pinterest-p" : 0 <= a.indexOf("itunes") ? "fab fa-apple" : 0 <= a.indexOf("m\u00fczik") ? "fab fa-music" : 0 <= a.indexOf("vimeo") ? "fab fa-vimeo" : 0 <= a.indexOf("ek\u015fi") ? "fab fa-tint" : 0 <= a.indexOf("telegram") ||  0 <= a.indexOf("تليجرام") ? "fab fa-telegram" : 0 <= a.indexOf("twitch") ? "fab fa-twitch" : 0 <= a.indexOf("zomato") ? "fab fa-cutlery" : 0 <= a.indexOf("amazon") ? "fab fa-amazon" : 0 <= a.indexOf("tumblr") ? "fab fa-tumblr-square" : 0 <= a.indexOf("yandex") ? "fab fa-yoast" : 0 <=
            a.indexOf("linkedin") ? "fab fa-linkedin" : 0 <= a.indexOf("yahoo") ? "fab fa-yahoo" : 0 <= a.indexOf("tiktok") ||  0 <= a.indexOf("تيك توك") || 0 <= a.indexOf("تيكتوك") ? "fab fa-tiktok" : 0 <= a.indexOf("reddit") ? "fab fa-reddit" : 0 <= a.indexOf("shopee") ? "fab fa-shopee" : 0 <= a.indexOf("imdb") ? "fab fa-imdb" : 0 <= a.indexOf("dribbble") ? "fab fa-dribbble" : 0 <= a.indexOf("discord") ? "fab fa-discord" : 0 <= a.indexOf("trovo") ? "fab fa-trovo" : 0 <= a.indexOf("quora") ? "fab fa-quora" : 0 <= a.indexOf("trustpilot") ? "fab fa-trustpilot" : 0 <= a.indexOf("kwai") ||  0 <= a.indexOf("كواي") ? "fab fa-kwai" : 0 <= a.indexOf("audiomack") ? "fab fa-audiomack" :
            0 <= a.indexOf("shazam") ? "fab fa-shazam" : 0 <= a.indexOf("rumble") ? "fab fa-rumble" : 0 <= a.indexOf("crypto") || 0 <= a.indexOf("bitcoin") || 0 <= a.indexOf("usdt") ? "fab fa-bitcoin" : 0 <= a.indexOf("vkontakte") ? "fab fa-vk" : 0 <= a.indexOf("mentimeter") ? "fab fa-mentimeter" : 0 <= a.indexOf("coub") ? "fab fa-coub" : 0 <= a.indexOf("kick") ? "fab fa-kickstarter" : 0 <= a.indexOf("thriller") ? "fab fa-avianex" : 0 <= a.indexOf("rumble") ? "fab fa-rumble" : 0 <= a.indexOf("datpiff") ? "fab fa-dataporten" : 0 <= a.indexOf("kwai") ? "fab fa-kwai" : 0 <= a.indexOf("seo") ?
            "fab fa-searchengin" : 0 <= a.indexOf("discord") ? "fab fa-discord" : 0 <= a.indexOf("clubhouse") ? "fab fa-earlybirds" : 0 <= a.indexOf("only fans") ? "fab fa-rocketchat" : 0 <= a.indexOf("boomplay") ? "fab fa-grav" : 0 <= a.indexOf("medium") ? "fab fa-medium" : 0 <= a.indexOf("googlebusiness") ? "fab fa-google" : 0 <= a.indexOf("tidal") ? "fab fa-tidal" : 0 <= a.indexOf("daily motion") ? "fab fa-dailymotion" : 0 <= a.indexOf("odnoklassniki") ? "fab fa-odnoklassniki" : 0 <= a.indexOf("whatsapp") ? "fab fa-whatsapp" : 0 <= a.indexOf("porn hub") ? "fab fa-pornhub" :
            0 <= a.indexOf("trovo") ? "fab fa-trovo" : 0 <= a.indexOf("line") ? "fab fa-line" : 0 <= a.indexOf("rtube") ? "fab fa-r-project" : 0 <= a.indexOf("apple music") ? "fab fa-apple" : 0 <= a.indexOf("trustpilot") ? "fab fa-trustpilot" : 0 <= a.indexOf("sitejabber") ? "fab fa-sitejabber" : 0 <= a.indexOf("mixcloud") ? "fab fa-mixcloud" : 0 <= a.indexOf("spreaker") ? "fab fa-spreaker" : 0 <= a.indexOf("deezer") ? "fab fa-deezer" : 0 <= a.indexOf("napster") ? "fab fa-napster" : 0 <= a.indexOf("ipodcast") ? "fab fa-itunes-note" : 0 <= a.indexOf("500 px") ? "fab fa-500px" : 0 <=
            a.indexOf("kick") ? "fab fa-kickstarter" : 0 <= a.indexOf("thriller") ? "fab fa-avianex" : 0 <= a.indexOf("rumble") ? "fab fa-rumble" : 0 <= a.indexOf("datpiff") ? "fab fa-dataporten" : 0 <= a.indexOf("kwai") ? "fab fa-kwai" : 0 <= a.indexOf("seo") ? "fab fa-searchengin" : 0 <= a.indexOf("discord") ? "fab fa-discord" : 0 <= a.indexOf("clubhouse") ? "fab fa-earlybirds" : 0 <= a.indexOf("only fans") ? "fab fa-rocketchat" : 0 <= a.indexOf("boomplay") ? "fab fa-grav" : 0 <= a.indexOf("medium") ? "fab fa-medium" : 0 <= a.indexOf("tidal") ? "fab fa-tidal" : 0 <= a.indexOf("daily motion") ?
            "fab fa-dailymotion" : 0 <= a.indexOf("odnoklassniki") ? "fab fa-odnoklassniki" : 0 <= a.indexOf("whatsapp") ? "fab fa-whatsapp" : 0 <= a.indexOf("porn hub") ? "fab fa-pornhub" : 0 <= a.indexOf("line") ? "fab fa-line" : 0 <= a.indexOf("rtube") ? "fab fa-r-project" : 0 <= a.indexOf("apple music") ? "fab fa-apple" : 0 <= a.indexOf("trustpilot") ? "fab fa-trustpilot" : 0 <= a.indexOf("sitejabber") ? "fab fa-sitejabber" : 0 <= a.indexOf("mixcloud") ? "fab fa-mixcloud" : 0 <= a.indexOf("spreaker") ? "fab fa-spreaker" : 0 <= a.indexOf("deezer") ? "fab fa-deezer" : 0 <= a.indexOf("napster") ?
            "fab fa-napster" : 0 <= a.indexOf("ipodcast") ? "fab fa-itunes-note" : 0 <= a.indexOf("thread") || 0 <= a.indexOf("threads") || 0 <= a.indexOf("ثريدز") ? "fa fa-solid fa-at" : "fa fa-star"
    }



    
    
    

 


    $("#neworder_category").change(function() { l(); });
    $("#neworder_services").change(function() { q(); r(); });
    function m() {
        document.getElementById($(".select2-results__options").attr("id")).scrollTop = $(".select2-results__option[aria-selected=true]").outerHeight() * $(".select2-results__option[aria-selected=true]").index() - 50
    }

    function r() {
        if ("undefined" === typeof custom_options || "undefined" === typeof custom_options.disable_select || !0 !== custom_options.disable_select) {
            $("#neworder_services").select2({
                theme: "bootstrap",
                width: "100%",
                containerCssClass: "form-control",
                dropdownCssClass: "select2-scrollable",
                minimumResultsForSearch: Infinity,
                templateSelection: function(b, f) {
                    return b.element && b.element.dataset.icon ? $('<span><b class="badge-forms" style="background: rgba(97, 118, 142, 1);color: white;border-radius: 6px;font-size: 11px;padding-left: 10px;padding-right: 10px;padding-top: 4px;padding-bottom: 4px;">'+b.element.value+'</b> ' + b.text + "</span>") : b.text
                },
                templateResult: function(b, f) {
                    return b.element && b.element.dataset.icon ? $('<span><i class="badge-forms" style="background: rgba(97, 118, 142, 1);color: white;border-radius: 6px;font-size: 11px;padding-left: 10px;padding-right: 10px;padding-top: 4px;padding-bottom: 4px;"">'+b.element.value+'</i> ' + b.text + "</span>") : b.text
                }
            });
            var a = $("#neworder_services"),
                c = {
                    "line-height": "28px",
                    "background-color": "#eff7f0",
                    "border-color": "#daeadc",
                    color: "#0e310f",
                    "font-size": "14px",
                    height: "40px",
                    "border-top-left-radius": "8px",
                    "border-top-right-radius": "8px",
                    "border-bottom-left-radius": "8px",
                    "border-bottom-right-radius": "8px",
                    "border-left-width": "0",
                    "border-right-width": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "2px",
                    "padding-left": "12px",
                    "padding-right": "12px",
                    "box-shadow": "none",
                    outline: "none"
                },
                d = $(".body .form-control"),
                e = $(".select2-container--bootstrap .select2-selection--single");
            d.length && (d = $(d).css("background-color"),
                c["background-color"] = d, c["border-color"] = d, $(e).css(c));
            a.on("select2:open", function() {
                setTimeout(function() {
                    m();
                    $(".select2-results__option").each(function(b, f) {
                        $(f).css("margin-top", "4px")
                    })
                }, 10)
            })
        }
    }

    function q() {
        var a = $("#neworder_services").val();
        0 == a ? $("#charge").val("-") : $.post("ajax_data", {
            action: "service_detail",
            service: a
        }, function(c) {
            1 == c.empty ? $("#charge_div").hide() : ($("#charge_div").show(), $("#neworder_fields").html(c.details), $("#charge").val(c.price));
            $(".datetime").datepicker({
                format: "yyyy/mm/dd",
                language: "en",
                startDate: new Date
            }).on("change", function(d) {
                $(".datetime").datepicker("hide")
            });
            $("#clearExpiry").click(function() {
                $("#expiryDate").val("")
            });
            $("#dripfeedcheckbox").prop("checked") && $("#dripfeed-options").removeClass();
            t();
            $("#dripfeedcheckbox").prop("checked") && u();
            c.sub ? $("#charge_div").hide() : $("#charge_div").show()
        }, "json")
    }

    function t() {
        var a = $("#neworder_services").val(),
            c = $("#neworder_comment").val();
        c && $.post("ajax_data", {
            action: "service_price",
            service: a,
            comments: c
        }, function(d) {
            $("#neworder_quantity").val(d.commentsCount);
            $("#charge").val(d.price)
        }, "json")
    }

    function u() {
        var a = $("#neworder_services").val(),
            c = $("#neworder_quantity").val(),
            d = $("#dripfeed-runs").val(),
            e = $("#dripfeedcheckbox").prop("checked") ? "var" : "bos";
        $.post("ajax_data", {
            action: "service_detail",
            service: a,
            quantity: c,
            dripfeed: e,
            runs: d
        }, function(b) {
            $("#charge").val(b.price)
        }, "json")
    }(function() {
        $("#neworder_category").find("option").each(function(a, c) {
            cat_name = $(c).text().toLowerCase().trim();
            cat_icon = $(c).attr('data-icon');
            $(c).attr("data-icon", cat_icon);
        });
        h()
    })();
    l();
    $("#neworder_category").change(function() {
        l()
    });
    $("#neworder_services").change(function() {
        q();
        r()
    });
    $(document).on("keyup", "#order_quantity", function() {
        var a = $("#neworder_services").val(),
            c = $("#neworder_quantity").val(),
            d = $("#dripfeed-runs").val(),
            e = $("#dripfeedcheckbox").prop("checked") ? "var" : "bos";
        $.post("ajax_data", {
            action: "service_price",
            service: a,
            quantity: c,
            dripfeed: e,
            runs: d
        }, function(b) {
            $("#charge").val(b.price);
            $("#dripfeed-totalquantity").val(b.totalQuantity)
        }, "json")
    });
    $(document).on("keyup", "#dripfeed-runs", function() {
        var a = $("#neworder_services").val(),
            c = $("#neworder_quantity").val(),
            d = $("#dripfeed-runs").val(),
            e = $("#dripfeedcheckbox").prop("checked") ? "var" : "bos";
        $.post("ajax_data", {
            action: "service_price",
            service: a,
            quantity: c,
            dripfeed: e,
            runs: d
        }, function(b) {
            $("#charge").val(b.price);
            $("#dripfeed-totalquantity").val(b.totalQuantity)
        }, "json")
    });
    $(document).on("keyup", "#neworder_comment", function() {
        t()
    });
    $(document).on("change", "#dripfeedcheckbox", function() {
        $(this).prop("checked") ? $("#dripfeed-options").removeClass() : $("#dripfeed-options").addClass("hidden");
        u()
    });
    $(".brand-category").click(function(a) {
        a.preventDefault();
        a = $(this).data("id");
        $.ajax({
            url: "ajax_data",
            data: {
                service: a,
                action: "specific_data"
            },
            type: "post",
            success: function(c) {
                c = JSON.parse(c);
                if (200 === c.status) {
                    c = c.categories;
                    var d = "";
                    void 0 === c || 0 == c.length ? (d += "<option value='3337777'>No Categories Found!</option>", $("#description").hide()) : c.map(function(e, b) {
                        d += "<option ";
                        0 === b && (d += " selected ");
                        d += " value=" + e.category_id + ">" + e.category_name + "</option>"
                    });
                    $("#neworder_category").html(d);
                    l()
                }
            }
        })
    })
    
  

 
    // Event listener for changes in the serviceSearch input
 
    $('#search_services_field').on('input', function () {
        // Get the input value
        var inputValue = $(this).val();
if(!inputValue){
   $('#dropdown_for_search').html('');
}else{
        // Making an AJAX request
        $.ajax({
            type: 'POST',
            url: '/ajax_data',  // Replace '/neworder' with the actual URL of your neworder route
            data: { 
                action: 'service_search' ,
                search_term: inputValue
            },
            beforeSend: function(){
               $('#dropdown_for_search').html('<div class="dropdown-item"  bis_skin_checked="1" style="padding: 6px 12px; cursor: pointer;"><span class="badge service_id_badge bg-primary">Searching</span> Please Wait...</div>');
            },
            success: function (response) {
                // Handle the response from the server
              
                 $('#dropdown_for_search').html(response);
              
                // You can update the DOM or perform other actions based on the response
            },
            error: function (error) {
                console.error('AJAX error:', error);
            }
        });
    }});

  
  
  
});
