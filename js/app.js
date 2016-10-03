(function(){
  angular.module('myapp',[])
.controller('mycontroller',mycontroller);
mycontroller.$inject=['$scope','$filter'];
function mycontroller($scope,$filter)
                       {

                           $scope.name="";
                        $scope.checkText=function()
                           {
                                                          var count=0;

                               if($scope.name=='' ||$scope.name==' ')
                                   {
                                   $scope.result='Enter Text first';
                                       $scope.hasError=true;
                                       return;
                                   }
                               var a=$scope.name.split(",");
                               for(var i=0;i<a.length;++i)
                                   {

                                       if(a[i]!='' && a[i]!=' ')
                                           count++;
                                   }
                                                        // alert("count="+count);

                               if(count<=3)
                                   $scope.result="Enjoy";
                               else if(count>3)
                                   $scope.result="Too much";
                           }

            }
})();
