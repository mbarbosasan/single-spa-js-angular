import {Component, OnInit} from '@angular/core';
import {singleSpaPropsSubject} from "../single-spa/single-spa-props";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-project';

  ngOnInit(): void {
    singleSpaPropsSubject.subscribe((value) => {
      console.log(value)
    })
  }

}
