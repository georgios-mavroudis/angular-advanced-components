import {
  Component,
  ContentChild,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  @ContentChild('first') templ = TemplateRef;
  @ContentChild('second') tmpl = TemplateRef;

  constructor() { }
}
