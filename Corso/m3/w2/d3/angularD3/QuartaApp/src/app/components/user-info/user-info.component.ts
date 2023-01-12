import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {}

  // riceverà un oggetto!
  // input ocnsente di ricevere dati dal componenet padre! cioe app-component

  @Input() user: any;

  ngOnInit(): void {
    console.log('onInit Attivato!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonCHanges attivato!');
  }

  ngDoCheck(): void {
    console.log('docheck a ttivato');
  }

  ngAfterContentInit(): void {
    console.log('aftercontentinit attivato');
  }

  ngAfterContentChecked(): void {
    console.log('ngaftercontent checked attivato');
  }

  ngAfterViewChecked(): void {
    console.log('ng view checked attiato!');
  }

  ngOnDestroy(): void {
    console.log('ondestroy attivato!');
  }
}
