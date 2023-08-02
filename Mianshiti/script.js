// // 获取表格对象
// var table = document.querySelector('table');

// // 获取表格的tbody对象
// var tbody = table.querySelector('tbody');

// // 获取添加按钮
// var addButton = document.querySelector('#add');

// // 获取删除按钮
// var deleteButton = document.querySelector('#delete');

// // 添加一行
// addButton.addEventListener('click', function() {
// 	// 创建一个新的table row
// 	var row = document.createElement('tr');
	
// 	// 添加3个td元素
// 	for (var i = 0; i < 3; i++) {
// 		var cell = document.createElement('td');
// 		cell.textContent = '新内容';
// 		row.appendChild(cell);
// 	}
	
// 	// 添加新行到表格中
// 	tbody.appendChild(row);
// });

// // 删除最后一行
// deleteButton.addEventListener('click', function() {
// 	// 获取最后一行
// 	var rows = tbody.querySelectorAll('tr');
// 	var lastRow = rows[rows.length - 1];
	
// 	// 从表格中删除最后一行
// 	tbody.removeChild(lastRow);
// });

// 获取打开选择框的按钮
var openModalButton = document.querySelector("#open-modal");

// 获取关闭选择框的按钮
var closeModalButton = document.querySelector("#close-modal");

// 获取选择框元素
var modal = document.querySelector(".modal");

// 获取年份、月份和日期选择器元素
var yearSelector = document.querySelector("#year-selector");
var monthSelector = document.querySelector("#month-selector");
var daySelector = document.querySelector("#day-selector");

// 初始化年份、月份和日期选择器选项
for (var i = 2000; i <= 2023; i++) {
  var option = document.createElement("li");
  option.value = i;
  option.textContent = i;
  yearSelector.appendChild(option);
}

for (var i = 1; i <= 12; i++) {
  var option = document.createElement("li");
  option.value = i;
  option.textContent = i;
  monthSelector.appendChild(option);
}

for (var i = 1; i <= 31; i++) {
  var option = document.createElement("li");
  option.value = i;
  option.textContent = i;
  daySelector.appendChild(option);
}

// 获取当前日期
var currentDate = new Date();

// 设置日期选择器的默认值为当前日期
yearSelector.value = currentDate.getFullYear();
monthSelector.value = currentDate.getMonth() + 1;
daySelector.value = currentDate.getDate();

// 更新日期选择器选项
function updateSelectors() {
  // 获取选中的年份、月份和日期
  var selectedYear = parseInt(yearSelector.value);
  var selectedMonth = parseInt(monthSelector.value);
  var selectedDay = parseInt(daySelector.value);

  // 获取选中月份的天数
  var daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  // 更新日期选择器选项
  daySelector.innerHTML = "";
  for (var i = 1; i <= daysInMonth; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelector.appendChild(option);
  }

  // 确保日期选择器选项与选中的日期匹配
  if (selectedDay > daysInMonth) {
    daySelector.value = daysInMonth;
  } else {
    daySelector.value = selectedDay;
  }
}

// 监听年份和月份选择器的变化，并更新日期选择器的选项
yearSelector.addEventListener("change", updateSelectors);
monthSelector.addEventListener("change", updateSelectors);
// 打开选择框
openModalButton.addEventListener("click", function () {
  modal.classList.add("active");
  setTimeout(function () {
    modal.querySelector(".modal-dialog").classList.add("active");
  }, 200);
});

// 关闭选择框
closeModalButton.addEventListener("click", function () {
  modal.querySelector(".modal-dialog").classList.remove("active");
  setTimeout(function () {
    modal.classList.remove("active");
  }, 200);
});

const confirmButton = document.querySelector("#confirm-modal");
function getCenterDate(elemnt) {
    
}
confirmButton.addEventListener("click", function () {
    
    console.log("confirm");
})
 