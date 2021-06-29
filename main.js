canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car2_width = 120;
car2_height = 70;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9InEFjs7BW2xA1lcyEWFU5Hup3dm6JsI-NhIyCumIB97gMvtGNfsm2Vv8-483hif8fo&usqp=CAU">
car2_image = "https://www.pngkit.com/png/detail/276-2769831_how-to-set-use-green-car-race-car.png">

car1_x = 10;
car1_y = 10;
car2_x = 10;
car3_y = 100;

function add(){
    background_img_tag = new Image();
    background_img_tag.onload = upload_background;
    background_img_tag.src = background_image;

    car1_img_tag = new Image();
    car1_img_tag.onload = upload_car1;
    car1_img_tag.src = car1_image;

    car2_img_tag = new Image();
    car2_img_tag.onload = upload_car2;
    car2_img_tag.src = car2_image;
}
function upload_background(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(+){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        car1_up();
        console.log("Car1 up");
    }
    if(keypressed == '40'){
        car1_down();
        console.log("Car1 down");
    }
    if(keypressed == '37'){
        car1_left();
        console.log("Car1 left");
    }
    if(keypressed == '39'){
        car1_right();
        console.log("Car1 right");
    }
    if(keypressed == '87'){
        car2_up();
        console.log("Car2 up w");
    }
    if(keypressed == '88'){
        car2_down();
        console.log("Car2 down x");
    }
    if(keypressed == '89'){
        car2_left();
        console.log("Car2 left y");
    }
    if(keypressed == '90'){
        car2_right();
        console.log("Car2 right z");
    }
}