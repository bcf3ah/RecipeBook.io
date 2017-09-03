import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor() { }
	@HostBinding('class.open') flag: boolean = false;

	@HostListener('click') toggleDropdown(){
		this.flag = !this.flag;
	}
}
