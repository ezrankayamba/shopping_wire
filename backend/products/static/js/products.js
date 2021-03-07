

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

(function () {
    docReady(function () {
        var categorySel = document.getElementById('id_category')
        var subCategorySel = document.getElementById('id_sub_category')

        if (categorySel && subCategorySel) {
            function refreshSubCategory(selVal, defaultSubCat) {
                var path = `/api/sub-categories?category_id=${selVal}`
                function updateSubCat(data) {
                    if (data.result === 0) {
                        subCategorySel.innerHTML = `<option value ${defaultSubCat ? '' : 'selected'}>---------</option>`
                        var options = data.data
                        for (var i = 0; i < options.length; i++) {
                            var opt = options[i];
                            var el = document.createElement("option");
                            el.textContent = opt.name;
                            el.value = opt.id;
                            subCategorySel.appendChild(el)
                        }
                        if (defaultSubCat) {
                            subCategorySel.value = defaultSubCat
                        }
                    }
                }
                fetch(path).then(function (res) {
                    return res.json()
                }).then(updateSubCat)
            }
            categorySel.addEventListener('change', function (e) {
                var selVal = e.target.value
                refreshSubCategory(selVal)
            })

            var category = categorySel.value
            var subCategory = subCategorySel.value
            if (category) {
                refreshSubCategory(category, subCategory)
            }
        }
    })
})()