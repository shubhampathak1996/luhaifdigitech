;(function ($) {
  $(function () {
    //  open and close nav
    $('#navbar-toggle').click(function () {
      $('nav ul').slideToggle()
    })

    // Hamburger toggle
    $('#navbar-toggle').on('click', function () {
      this.classList.toggle('active')
    })

    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.navbar-dropdown').slideToggle('slow')

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide('slow')
      e.stopPropagation()
    })

    // Click outside the dropdown will remove the dropdown class
    $('html').click(function () {
      $('.navbar-dropdown').hide()
    })
  })
})(jQuery)
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.top-bar ').addClass('sticky')
    } else {
      $('.top-bar ').removeClass('sticky')
    }
  })
})
let sortBtn = document.querySelector('.filter-menu').children
let sortItem = document.querySelector('.filter-item').children

for (let i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener('click', function () {
    for (let j = 0; j < sortBtn.length; j++) {
      sortBtn[j].classList.remove('current')
    }

    this.classList.add('current')

    let targetData = this.getAttribute('data-target')

    for (let k = 0; k < sortItem.length; k++) {
      sortItem[k].classList.remove('active')
      sortItem[k].classList.add('delete')

      if (
        sortItem[k].getAttribute('data-item') == targetData ||
        targetData == 'all'
      ) {
        sortItem[k].classList.remove('delete')
        sortItem[k].classList.add('active')
      }
    }
  })
}
