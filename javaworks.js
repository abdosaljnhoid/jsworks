

function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

  function updateCategories(callback) {
        $.post("ajax_data", { action: "get_categories" }, function(response) {
            var categories = response.categories;
            var hasFavorites = response.has_favorites;
            var f = hasFavorites ? '<option data-icon="fa fa-star" value="-1">Favorites</option>' : '';
            categories.forEach(function(cat) {
                f += '<option data-icon="' + cat.category_icon + '" value="' + cat.category_id + '">' + cat.category_name + '</option>';
            });
            $("#neworder_category").html(f);
            h(); // Re-initialize Select2
            if (typeof callback === 'function') callback(hasFavorites);
        }, "json");
    }

  function l() {
        var a = $("#neworder_category").val();
        $.post("ajax_data", {
            action: "services_list",
            category: a
        }, function(c) {
            var d = c.result.services,
                e = c.result.service_ids,
                isFav = c.result.is_favorite;
            if (0 < d.length) {
                var b = c.result.selected,
                    f = "";
                Object.keys(d).forEach(function(k, p) {
                    k = e[k];
                    var isFavorite = isFav[p] ? 'favorited' : '';
                    f += '<option value="' + k + '" ';
                    k == b && (f += ' selected="selected" ');
                    var v = n(d[p]);
                    f += ' data-icon="' + v + '" ';
                    f += ">" + d[p] + "</option>";
                    f += '<button class="favorite-btn ' + isFavorite + '" data-service-id="' + k + '"><i class="fa fa-star"></i></button>';
                });
            } else {
                f += '<option selected value="0">No Services Found!</option>';
                $("#neworder_fields").html("");
            }
            $("#neworder_services").html(f);
            q();
            r();

            // Pre-select service from URL
            var serviceId = getUrlParameter('select_service_id');
            if (serviceId && $('#neworder_services option[value="' + serviceId + '"]').length) {
                $('#neworder_services').val(serviceId).trigger('change');
            }

            // Attach favorite button handlers
            $('.favorite-btn').off('click').on('click', function() {
                var serviceId = $(this).data('service-id');
                toggleFavorite(serviceId, $(this));
            });
        }, "json");
    }
function toggleFavorite(serviceId, button) {
        $.post("ajax_data", {
            action: "toggle_favorite",
            service_id: serviceId
        }, function(response) {
            if (response.status === 'added') {
                button.addClass('favorited');
            } else if (response.status === 'removed') {
                button.removeClass('favorited');
            }
            updateCategories(function(hasFavorites) {
                if (hasFavorites && !getUrlParameter('category_id')) {
                    $('#neworder_category').val('-1').trigger('change');
                }
            });
            l();
        }, "json");
    }

var categoryId = getUrlParameter('category_id');
    updateCategories(function(hasFavorites) {
        if (categoryId) {
            // URL specifies a category, use it
            $('#neworder_category').val(categoryId).trigger('change');
        } else if (hasFavorites) {
            // No URL category, but favorites exist, default to Favorites
            $('#neworder_category').val('-1').trigger('change');
        } else {
            // No URL category, no favorites, load default
            l();
        }
    });


