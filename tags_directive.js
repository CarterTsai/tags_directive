                                        var app = angular.module('app', []);

app.directive('tags', function() {return {
      restrict: 'AEC',
      transclude: true,
      scope: {tags:'=tags'},
      controller: function($scope, $element) {
        $scope.inTag = "";

        $element.find('input')[0].onkeydown = function(e){
            if(e.keyCode === 13){
              $scope.$apply(function(){
                $scope.tags.push($scope.inTag);
                $scope.inTag="";
              });
            }
        }
      },
      template:'<div class="wrapper_tag"> <input ng-model="inTag"></input>' +
          '<span class="tags_type" ng-repeat="tag in tags">{{tag}}</span></div>',
      replace: true
    };
});
