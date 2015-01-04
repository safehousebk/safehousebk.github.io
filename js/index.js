$(function() {

  /* NAV */

  // When 'Episodes' tab selected, expand 'Episodes' and highlight Episode 3
  $('#nav-eps').on('click', function() {
    $('#nav-eps + .submenu').addClass('expand');  // Keep 'Episodes' expanded
    $('.submenu').find('li.active').removeClass('active'); // Deselect current ep
    $('#nav-ep3').parent().addClass('active'); // Select Episode 3
  });

  // When specific episode selected, keep 'Episodes' tab selected and expanded
  $('.submenu a').on('click', function() {
    $('.menu').find('li.active').removeClass('active'); // Deselect current ep
    $('#nav-eps').parent().addClass('active');  // Select 'Episodes'
    $('#nav-eps + .submenu').addClass('expand'); // Keep 'Episodes' expanded
  });

  // When new tab selected, deselect current episode and close 'Episodes'
   $('.menu > li > a:not("#nav-eps")').on('click', function() {
    $('.submenu').find('li.active').removeClass('active'); // Deselect current ep
    ($('#nav-eps + .submenu').removeClass('expand')); // Close 'Episodes' 
  });
  

});

