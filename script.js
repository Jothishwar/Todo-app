var task=document.getElementById("task");
var list=document.getElementById("task_list");
var l=document.querySelector('.list');
var chk=document.querySelector('#chk');
var delname='';
window.addEventListener('load',()=>{
	var data=[];
	existingData=JSON.parse(window.localStorage.getItem('tasks'));
	if(existingData!==null)
	for (var i = 0; i <existingData.length; i++) {
		// console.log(existingData[i]);
		list.innerHTML+=`
		<li>
			<input type="checkbox" id='chk'> 
			<p>${existingData[i]['task']}</p>
			<button id='del'>delete</button>
		</li>`; // value='${existingData[i]['btn']}'
		data.push(existingData[i]['task']);
	}
	var d=document.querySelectorAll('#del');
	d.forEach(function(el){
		el.addEventListener('click',()=>{
			// console.log(el.nextSibling.parentNode.innerText.split('\n')[0]);
			delname=el.nextSibling.parentNode.innerText.split('\n')[0];
			console.log(delname,data);
			for (var i = 0; i < data.length; i++) {
				if(data[i]===delname){
					console.log(i);
					existingData.splice(i,1);
					window.localStorage.setItem('tasks',JSON.stringify(existingData));
					location.reload();
				}
			}
		})//d[2].nextSibling.parentNode.innerText.split('\n')[0]
	});
})
function add() {
	list.innerHTML+=`
	<li>
		<input type="checkbox" id='chk'>
		<p>${task.value}</p>
		<button id='del'>delete</button>
	</li>`;
	var val={'btn':'off','task':`${task.value}`};
	var oldData=JSON.parse(localStorage.getItem('tasks') || '[]');
	oldData.push(val);
	window.localStorage.setItem('tasks',JSON.stringify(oldData));
	location.reload();
}



