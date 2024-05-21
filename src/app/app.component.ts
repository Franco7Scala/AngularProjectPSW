import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Product } from './model/objects/Product';
import { ModelService } from './model/shared-model.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'FakeTutto';
  mode: ProgressSpinnerMode = 'determinate';
  model: ModelService;
  searchController = new FormControl("", []);
  searchResult: Product[] = [];
  searchStatus = true;


  constructor(private _snackBar: MatSnackBar, model: ModelService ) {
    this.model = model;
  }

  showProgress(){
    this.mode = 'indeterminate'
    this._snackBar.openFromComponent(SnackComponent, {duration: 5000});
  }

  hideProgress(){
    this.mode = 'determinate'
  }

  search(){
    this.model.searchProduct(this.searchController.value, this.showResultProduct.bind(this))
  }

  showResultProduct(status: boolean, response: any){
    this.searchStatus = status;
    if ( status ) {
      this.searchResult = response as Product[];
    }
  }


}


@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: './snack-bar-component-example-snack.html',
  styles: [
    `
    .example-snack-party {
      color: hotpink;
    }
  `,
  ],
})
export class SnackComponent {}
