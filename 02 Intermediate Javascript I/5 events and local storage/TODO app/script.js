/* jshint esversion: 6 */

window.onload = function () {
    var taskList = document.querySelector('#taskList');
    var form = document.querySelector('form');
    let count = 1;
    form.addEventListener("submit", function(event){
        var task = document.querySelector('input').value;
        let li = document.createElement('li');
        li.append(count + '  ' + task);
        taskList.append(li);
        event.preventDefault();
        count++;
    });
   
};
