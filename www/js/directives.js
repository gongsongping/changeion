// angular.module('starter.directives', [])
// angular.module('starter.directives')
app.directive('bodywidth', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, element, attrs) {
      if (document.body.clientWidth >= 768){
         $rootScope.containerwidth = 768
       } else {
         $rootScope.containerwidth = document.body.clientWidth
       }
      // console.log(window.innerWidth)
      // console.log(document.body.clientWidth)
      // console.log($rootScope.containerwidth)
    }
  }
})
app.directive('parentwidth', function ($rootScope) {
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, element, attrs) {
       scope.getWidth = function () {
         console.log(element[0].clientWidth + 'd'+ element.find('div')[0].clientWidth)
         return element[0].clientWidth
       }
       scope.$watch(scope.getWidth,function(width) {
        //  console.log(width +'d'+ element.find('div')[0].clientWidth);
          $rootScope.pwidth = width
       })
      // console.log(element[0].clientWidth + 'ddd')
    }
  }
})

app.directive('imgsquare', function () {
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, elem, attrs) {
      var width = elem.css('width'); console.log(width)
      if (elem.css('width') > elem.css('height')){
        // elem.css('height','auto')
        elem.css('height', "100%")
      } else {
        elem.css('width', "100%")
        // elem.css('width', 'auto')
      }
    }
  }
})
app.directive('croppedImage', function () {
  return {
    restrict: "E",
    replace: true,
    template: "<div class='center-cropped'></div>",
    link: function(scope, element, attrs) {
      var width = attrs.width;
      var height = attrs.height;
      element.css('width', width + "px");
      element.css('height', height + "px");
      element.css('backgroundPosition', 'center center');
      element.css('backgroundRepeat', 'no-repeat');
      element.css('backgroundImage', "url('" + attrs.src + "')");
    }
  }
})
// app.directive('chsquare', function () {
//   return {
//     restrict: 'A',
//     scope: {},
//     link: function(scope, elem, attrs) {
//       var width = elem.css('width')
//       scope.getWidth = function () {
//         return document.getElementById('chcontainer').clientWidth
//       }
//       scope.$watch(scope.getWidth, function (width) {
//         console.log((1/3)*width + 'px')
//         elem.css("float", "left")
//         elem.css('height', (1/3)*width + 'px')
//         elem.css('width', (1/3)*width + 'px')
//       })
//       // var width = document.getElementById('container').clientWidth
//       // console.log(width)
//       // elem.on('load', function(){console.log(elem.width())})
//       // elem.css('height', '160px')
//     }
//   }
// })
// app.directive('fsquare', function () {
//   return {
//     restrict: 'A',
//     scope: {},
//     link: function(scope, elem, attrs) {
//       var width = elem.css('width')
//       scope.getWidth = function () {
//         return document.getElementById('fcontainer').clientWidth
//       }
//       scope.$watch(scope.getWidth, function (width) {
//         console.log((1/3)*width + 'px')
//         elem.css("float", "left")
//         elem.css('height', (1/3)*width + 'px')
//         elem.css('width', (1/3)*width + 'px')
//       })
//     }
//   }
// })
