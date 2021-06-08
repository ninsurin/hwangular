import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'Navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class Navbar {
    listbar = ["การแจ้งเตือน","การช่วยเหลือ","สมัครใหม่","เข้าสู่ระบบ"]

    constructor() {}
}