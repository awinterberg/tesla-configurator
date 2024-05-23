import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tesla-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() id: string = 'checkbox';
  @Input() label: string = 'Checkbox Label';
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }
}
