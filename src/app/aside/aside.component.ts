import { Component, OnInit } from '@angular/core';
declare var $:any;

var burgerMenu = function() {

  $('.js-colorlib-nav-toggle').on('click', function(event){
    event.preventDefault();
    var $this = $(this);

    if ($('body').hasClass('offcanvas')) {
      $this.removeClass('active');
      $('body').removeClass('offcanvas');
    } else {
      $this.addClass('active');
      $('body').addClass('offcanvas');
    }
  });
};

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.sass']
})
export class AsideComponent implements OnInit {

  year: Number;
  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
    burgerMenu();
  }

}
