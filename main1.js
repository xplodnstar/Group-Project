

$(document).ready(function () {
    // var trgt = $(this)
    // trgt.on('click', 'h2', function () {
    //   var text = $(this).siblings('.hidden')
    //   trgt.find('.hidden').removeClass('open')
    //   if (text.hasClass('open')) {
    //     text.removeClass('open')
    //   } else {
    //     text.addClass('open')
    //   }


    // var itemList = document.querySelector('.menu')

    // var effThis = items.results.map(item => {
    //   return {
    //     title: item.title,
    //     images: item.Images[0].url_fullxfull,
    //     shop: item.Shop.shop_name,
    //     shopURL: item.Shop.url,
    //     price: item.price,
    //     rank: item.featured_rank,
    //     variations: item.has_variations,
    //     views: item.views,
    //     url: item.url
    //   }
    // })

    // console.log(effThis)

    //   var itemGrid = effThis.map(item => {
    //     var title;
    //     if (item.title.length > 30) {
    //       title = item.title.substring(0, 30) + '...'
    //     } else {
    //       title = item.title
    //     }

    //     return `
    //   <div class="itemList">
    //       <a href="${item.url}" target="_blank"> 
    //           <img src="${item.images}" class="pic" /><br>
    //           <span class="title"><abbr title="${item.title}">${title}</abbr></span>
    //           </a><br>
    //       <a href="${item.shopURL}" target="_blank" class="store">${item.shop}</a><br>
    //       <a href="${item.url}" class="review" target="_blank">
    //           <img src="./assets/fiveStars.png"><span >(${item.views})</span>
    //       </a><br>
    //       <a href="${item.url}" target="_blank">
    //           <span class="price">$${item.price}</span>
    //       </a>
    //   </div>
    //   `
    //   }).join('')

    //   itemList.innerHTML = itemGrid



    // })

    function initMap() {
        var location = { lat: 36.2227646, lng: -115.1225453 };
        // The map, centered at Mars Ave LV
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 14, center: location });

        var marker = new google.maps.Marker({ position: location, map: map });
    }



    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";

        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 1000); // Change image every 1 second
    }


    function rudrSwitchTab(rudr_tab_id, rudr_tab_content) {
        // first of all we get all tab content blocks (I think the best way to get them by class names)
        var x = document.getElementsByClassName("tabcontent");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none'; // hide all tab content
        }
        document.getElementById(rudr_tab_content).style.display = 'block'; // display the content of the tab we need

        // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
        var x = document.getElementsByClassName("tabmenu");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].className = 'tabmenu';
        }
        document.getElementById(rudr_tab_id).className = 'tabmenu active';
    }

    $("#accordion").on("click", "h4", function () {
        $(".content").removeClass('show')
        var content = $(this).siblings(".content")
        if (!content.hasClass('show')) {
            content.addClass('show')
        } else {
            content.removeClass('show')
        }
    })

    $("#accordion").on("click", "#menu", function () {

        $(".content1").addClass("show")
        var items = $.ajax({
            method: "get",
            url: "https://obscure-tundra-54269.herokuapp.com/bar-food"
        }).done(function (data) {
            console.log(data)
            var htmlStr = data.appetizers.map(function (item) {
                return `
                <p class="name">${item.name}</p>
                <p class="price">$${item.price}</p>
                <p class="desc">${item.description}</p>
            `
            }).join('')
            $("#menu-container .content1").html(htmlStr)
        })
    })

    $("#accordion").on("click", "#menu", function () {

        $(".content2").addClass("show")
        var items = $.ajax({
            method: "get",
            url: "https://obscure-tundra-54269.herokuapp.com/bar-food"
        }).done(function (data) {
            console.log(data)
            var htmlStr = data.entrees.map(function (item) {
                return `
                <p class="name">${item.name}</p>
                <p class="price">$${item.price}</p>
                <p class="desc">${item.description}</p>
            `
            }).join('')
            $("#menu-container .content2").html(htmlStr)
        })
    })

<<<<<<< HEAD
    $("#accordion").on("click", "#menu", function () {

        $(".content3").addClass("show")
        var items = $.ajax({
            method: "get",
            url: "https://obscure-tundra-54269.herokuapp.com/bar-food"
        }).done(function (data) {
            console.log(data)
            var htmlStr = data.desserts.map(function (item) {
                return `
                <p class="name">${item.name}</p>
                <p class="price">$${item.price}</p>
                <p class="desc">${item.description}</p>
            `
            }).join('')
            $("#menu-container .content3").html(htmlStr)
        })
    })


=======
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
>>>>>>> dd35732735308d09dc03071194087ada55c1835e




