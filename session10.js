console.log("Hello world");
//

// List
// - Danh sách sinh viên trong 1 lớp học (Student list)
// - Danh sách món ăn trong 1 cửa hàng (Menu)
// - Danh sách công việc cần làm trong 1 ngày (Todo list)
// ...

// ??? Làm thế nào để có thể biểu diễn được 1 danh sách
// món ăn trong Javascript

// Solution 1: KHÔNG TỐI ƯU
// let restaurantMenu = "Bia Hơi, Giả Cầy, Đậu Lướt Ván, Nem Nắm, Lạc Luộc";

// Solution 2: KHÔNG TỐI ƯU
// let food1 = "Bia Hơi";
// let food5 = "Lạc Luộc";
// let food2 = "Giả Cầy";
// let food3 = "Đậu Lướt Ván";
// let food4 = "Nem Nắm";
// // ...
// let food100 = "Thịt Chó";

// SOLUTION 3: Array/List

// let foodMenu = ["Bia Hơi", "Thịt Chó", "Đậu Lướt", "Lạc Luộc", "Nem Nắm"];
// Element:        el          el          el          el          el
// Index:          0           1           2           3           4
// Length:                                                         5
// let length = foodMenu.length;
// console.log(length);

// let students = ["Peter", "Tony", "Robert"];
// console.log(students.length);

// let todoList = ["Wake up at 6am", "Sleep at 11pm"];
// console.log(todoList.length);
// let randomNumberList = [1, 3, 10, -2, 10];

// 1. Read - Đọc

// - Read One (Lấy ra 1 phần tử bất kỳ)

// foodMenu[0]; // Bia Hơi
// foodMenu[1]; // Thịt Chó

// Last Element
// foodMenu[4]; // Nem Nắm
// foodMenu[foodMenu.length - 1]; // Nem Nắm

// console.log("Lực uống 10 cốc " + foodMenu[0]);
// console.log(foodMenu[0]);
// console.log("Hồng là vua " + foodMenu[1]);

// - Read ALL (Lấy ra toàn bộ phần tử có trong mảng)
// - DUYỆT QUA MẢNG (Loop through Array)
// foodMenu[0]; // Bia Hơi
// foodMenu[1]; // Thịt Chó
// foodMenu[2]; // Đậu lướt
// foodMenu[3]; // Lạc luộc
// foodMenu[4]; // Nem nắm

// for (let i = 0; i <= foodMenu.length - 1; i = i + 1) {
//   console.log("Mih Cường vừa order", foodMenu[i]);
// }

// Create
// console.log("Danh sách món ăn hiện tại");
// console.log(foodMenu);

// Thêm vào đầu
// Bò xào măng trúc
// foodMenu.unshift("Bò Xào Măng Trúc");
// console.log("Danh sách món ăn sau khi được thêm vào đầu");
// console.log(foodMenu);

// Thêm vào cuối
// Rau muống xào tóp mỡ
// foodMenu.push("Rau muống + Tóp mỡ");
// console.log("Danh sách món ăn sau khi được thêm vào cuối");
// console.log(foodMenu);

// Thêm vào vị trí bất kỳ
// Vịt quay LÁ MÓC MẬT
// .splice(index, 0, newEl);
// foodMenu.splice(1, 0, "vịt quay LÁ MÓC MẬT");
// console.log("Danh sách món ăn sau khi được thêm vào vị trí index");
// console.log(foodMenu);

// 3. Update
// foodMenu[7] = "Rồng xanh vượt đại dương";
// console.log("Danh sách món ăn sau khi được cập nhật");
// console.log(foodMenu);

// 4. Delete

// Xoá phần tử cuối cùng
// foodMenu.pop();
// console.log("Danh sách món ăn sau khi được xoá phần tử cuối cùng");
// console.log(foodMenu);

// Xoá phần tử đầu tiên trong mảng
// foodMenu.shift();
// console.log("Danh sách món ăn sau khi được xoá phần tử đầu tiên");
// console.log(foodMenu);

// Xoá phần tử tại vị trí bất kỳ trong mảng
// .splice(index, amount);
// foodMenu.splice(2, 1);
// console.log("Danh sách món ăn sau khi được xoá phần thịt chó");
// console.log(foodMenu);

// Exercise

// Cho 1 danh sách todoList như sau

const todoList = ["Sleep at 12pm", "Workout 2hours per day", "Do homework"];

// Viết 1 ứng dụng quản lý các todoList
// Cho phép người dùng nhập vào 4 chữ cái C/R/U/D thông qua
// câu lệnh prompt

// - C: Khi người dùng nhập vào chữ C
// - Hiển thị lên 1 ô prompt cho phép người dùng thêm mới 1
//   todo item vào trong danh sách todoList
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - R: Khi người dùng nhập vào chữ R
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - U: Khi người dùng nhập vào chữ U
// - Hiển thị lên 1 ô prompt hỏi người dùng vị trí của todo item
//   muốn cập nhật
// - Kiểm tra xem vị trí người dùng nhập vào có hợp lệ hay không
// - Nếu hợp lệ -> Tiếp tục hiển thị ô prompt để nhập vào nội dung mới
//   cập nhật cho todo item
// - Nếu không hợp lệ -> Tiến hành quay lại bước nhập vào 4 chữ cái C/R/U/D
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - D: Khi người dùng nhập vào chữ D
// - Hiển thị lên 1 ô prompt hỏi người dùng vị trí của todo item
//   muốn xoá
// - Kiểm tra xem vị trí người dùng nhập vào có hợp lệ hay không
// - Nếu hợp lệ -> Tiến hành xoá todo item đó ra khỏi todoList
// - Nếu không hợp lệ -> Tiến hành quay lại bước nhập vào 4 chữ cái C/R/U/D
// - Duyệt qua toàn bộ danh sách todoList và in ra toàn bộ
//   todo item theo dạng:
// - 1. Sleep at 12pm
// - 2. Workout 2hours per day
// - 3. ...

// - Chương trình lặp đi lại lại vô hạn
// cho đến khi người dùng nhập vào chữ "E"

let userInput = prompt("Mời bạn nhập vào 4 chữ cái C/R/U/D");

if (userInput === "C") {
  // Thực hiện các tác vụ của chữ C
  let todoItem = prompt("Mời bạn thêm mới todo Item");
  todoList.push(todoItem);

  // In ra theo dạng
} else if (userInput === "R") {
  // Thực hiện các tác vụ của chữ R
} else if (userInput === "U") {
  // Thực hiện các tác vụ của chữ U
} else if (userInput === "D") {
  // Thực các tác vụ của chữ cái D
} else {
  // Thực hiện gì đó
}
