angular.module('ngcomponents', []).directive('ngAlert', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        stoptions: '='
      },
      controller: function($scope,$timeout){
        $scope.closeAlert=function(){
          $scope.mostrarAlerta=false;
          $scope.stoptions.show=false;
          $scope.stoptions.hide.auto=false;
          $scope.stoptions.hide.time=0;
        }
        $scope.timeAlert=function(object){
          var auto=object.hide.auto;
          var time=object.hide.time;
          if(time==undefined){
            time=5000;
          }
          if(auto==true){
            $timeout($scope.closeAlert, time);
          }
        }
        $scope.closeButton=function(click){
          if(click==true){
            $scope.mostrarClose=true;
          }else{
            $scope.mostrarClose=false;
          }
        }
        $scope.showAlert=function(value){
          $scope.mostrarAlerta=value;
          if($scope.stoptions.show){
            $scope.stoptions.show=value;
          }
        }
        $scope.typeAlert=function(type){
          switch(type){
            case 'success':
              return 'alert-success';
            break;
            case 'info':
              return 'alert-info';
            break;
            case 'warning':
              return 'alert-warning';
            break;
            case 'error':
              return 'alert-error';
            break;
          }
        }
      },
      link: function($scope, element, attrs, tabsCtrl) { 
        if($scope.stoptions){
          $scope.message=$scope.stoptions.message;
          $scope.$watch('stoptions.type',function() {
            $scope.type=$scope.stoptions.type;
          })
          $scope.$watch('stoptions.message',function() {
            $scope.newmessage=$scope.stoptions.message;
          });
          $scope.mostrarAlerta=true;
          $scope.mostrarClose=true;
          
          if($scope.stoptions.hide){
           
            $scope.timeAlert($scope.stoptions);
            
            $scope.$watch('stoptions.hide.auto',function() {
              $scope.timeAlert($scope.stoptions);
            });
            
            $scope.$watch('stoptions.hide.time',function() {
              $scope.timeAlert($scope.stoptions);
            });
          
            $scope.$watch('stoptions.hide.click',function() {
              $scope.closeButton($scope.stoptions.hide.click);
            })
            
          }
          
          $scope.$watch('stoptions.show',function() {
            switch($scope.stoptions.show){
              case true:
                $scope.showAlert(true);
              break;
              case false:
                $scope.showAlert(false);
              break;
            }
          });
        } 
      },
      template: '<div class="alert" data-ng-class="typeAlert(type)" data-ng-show="mostrarAlerta">'+
                '  <i></i>'+
                '  <p class="cell">{{newmessage}}</p>'+
                '  <button class="close" type="button" data-ng-show="mostrarClose" data-ng-click="showAlert(false)">Cerrar</button>'+
                '</div>'
    };
}).directive('ngTabs', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {showpanel:'&',showAll:'='},
      controller: function($scope){
        var panes = $scope.panes = [];
        $scope.select = function(pane){
          angular.forEach(panes, function(pane){
            pane.selected = false;
          });
          pane.selected = true;
        };
        this.addPane = function(pane){
          pane.show=true;
          if(panes.length==0) {
            $scope.select(pane);
          }
          if(panes.length>0){
            if($scope.showAll==true){
              pane.show = true;
            }else{
              pane.show = false;
            }
          }
          panes.push(pane);
        };
        this.mt =function(index){
          num=0;
          angular.forEach(panes, function(pane){
            num++;
            if(num==index){
                pane.show = true;
                $scope.select(pane);
            }           
          });
        }
        this.ot =function(index){
          num=0;
          angular.forEach(panes, function(pane){
            num++;
            if(num==index){
                pane.show = false;
                pane.selected=false;
            }
            if(pane.show==true){
              $scope.select(pane);
            }
          });
        }
        
      },
      template: '<div class="tabbable">'+
                '<ul class="nav nav-tabs">'+
                    '<li data-ng-repeat="pane in panes" data-ng-show="pane.show" data-ng-class="{active:pane.selected}">'+
                      '<a href="" data-ng-click="select(pane)">{{pane.title}}</a>'+
                    '</li>'+
                '</ul>'+
                '<div class="tab-content" data-ng-transclude></div>'+
                '</div>'
    };
}).directive('ngPane', function(){
    return {
      require: '^ngTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl){
        tabsCtrl.addPane(scope);
      },
      template: '<div class="tab-pane" data-ng-show="selected" data-ng-transclude></div>'
    };
}).directive('actionTab', function(){
    return {
      require: '^?ngTabs',
      restrict: 'E',
      transclude: true,
      scope: {
        icon: '@',
        title: '@',
        type: '@',
        action: '@',
        numtab: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        scope.mostrarTab = function(index){
           tabsCtrl.mt(index);
        }
        scope.ocultarTab = function(index){
           tabsCtrl.ot(index);
        }
        scope.actionTab=function(num,value){
            if(value=="show"){
              scope.mostrarTab(num);
            }else{
              scope.ocultarTab(num);
            }
        }
        scope.showButton=function(type){
          if(type=="button"){
            return true;
          }
          return false;
        }
        scope.showLink=function(type){
          if(type=="link"){
            return true;
          }
          return false;
        }
      },
      template: '<a data-ng-click="actionTab(numtab,action)" data-ng-show="showLink(type)" href="">'+
                '  <i class="{{icon}}">{{title}}</i>'+
                '</a>'+
                '<button data-ng-show="showButton(type)" data-ng-click="actionTab(numtab,action)" class="btn btn-blue" type="button">'+
                '  {{title}}'+
                '</button>'
    
    };
}).directive('ngAccordeon', function(){
  return {
    restrict: 'E',
    transclude: true,
    replace:true,
    scope: {
      title: '@'
    },
    controller:function($scope){

      var panes = $scope.panes = [];
      $scope.select = function(pane){
        angular.forEach(panes, function(pane){
          pane.selected = false;
        });
        pane.selected = true;
      };
      this.addPane = function(pane){
        panes.push(pane);
      };

      

    },
    link:function($scope, element, attrs, Ctrl){



    },
    template:'<div class="accordion" id="accordion3" data-ng-transclude>'
           
          +'</div>'

  }
}).directive('ngResort', function(){
    return {
      require: '^ngAccordeon',
      restrict: 'E',
      replace:true,
      transclude: true,
      scope: {
        title: '@',
        badge:'=',
        label:'@',
        badgeClass:'@',
        labelClass:'@'
      },
      link: function(scope, element, attrs, accCtrl){
        accCtrl.addPane(scope);
      },
      template:'<div class="accordion-group" >'              
                    +'<div class="accordion-heading">'
                      +'<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse{{$id}}" style="text-decoration:none">'
                        +'<span data-ng-show="badge" class="badge {{badgeClass}}">{{badge}}</span><span data-ng-show="label" class="label {{labelClass}}">{{label}}</span>&nbsp&nbsp {{title}} &nbsp<i class="icon-caret-down pull-leftt"></i>'
                      +'</a>'
                    +'</div>'
                    +'<div id="collapse{{$id}}" class="accordion-body collapse">'                      
                      +'<div class="accordion-inner well well-small" data-ng-transclude>'
                      +'</div>'
                    +'</div>'
                  +'</div>'

                
    };
});
