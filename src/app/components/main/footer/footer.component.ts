import { Component, OnInit } from '@angular/core';
import {FooterEnum} from "../../constants/footer-enum";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public typeFooterImage = FooterEnum
  constructor() { }

  ngOnInit(): void {
  }

}
