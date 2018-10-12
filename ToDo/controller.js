"use strict";
{
    angular.module("app",[])
        .controller('toDoController', function(){ 
            const $ctrl = this;
            
            $ctrl.tasks = [
                {toDo:'Pickup Kids', complete:true},
                {toDo:'Go to the store', complete:false},
                {toDo:'Get Gas', complete:true},
                {toDo:'Wash the car', complete:false},
            ];
            
            $ctrl.addTask= function(){
                $ctrl.tasks.push({toDo:$ctrl.newTask, complete:false});
                $ctrl.newTask = '';
            }
            
            $ctrl.removeTask = function(index) {
            $ctrl.tasks.splice(index,1);
            };

            $ctrl.completedTask = function(toDo) {
                toDo.complete = true;
                    }
        })
}

