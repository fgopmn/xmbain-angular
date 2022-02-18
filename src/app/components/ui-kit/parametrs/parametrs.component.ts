import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-parametrs',
  templateUrl: './parametrs.component.html',
  styleUrls: ['./parametrs.component.scss']
})
export class ParametrsComponent implements OnInit {

  @ViewChild('div') div: any;
  @ViewChild('wrapper') wrapper: any;
  @ViewChild('modalListWrapper') modalListWrapper: any;
  @ViewChild('series') series: any;
  @ViewChild('filterPunt1') filterPunt1: any;
  @ViewChild('filterPunt2') filterPunt2: any;
  @ViewChild('filterPunt3') filterPunt3: any;
  @ViewChild('filterPunt4') filterPunt4: any;
  @ViewChild('filterPunt5') filterPunt5: any;
  @ViewChild('filterPunt6') filterPunt6: any;
  @ViewChild('img1') img1: any;
  @ViewChild('img2') img2: any;
  @ViewChild('img3') img3: any;
  @ViewChild('img4') img4: any;
  @ViewChild('img5') img5: any;
  @ViewChild('img6') img6: any;
  @ViewChild('img7') img7: any;
  @ViewChild('img8') img8: any;
  @ViewChild('img9') img9: any;
  @ViewChild('img10') img10: any;
  @ViewChild('img11') img11: any;
  @ViewChild('img12') img12: any;


  constructor() { }

  ngOnInit(): void {
    this.showParametrs()
    this.hideparametrs()
    this.showSeries()
    this.showPunk1()
    this.showPunk2()
    this.showPunk3()
    this.showPunk4()
    this.showPunk5()
    this.showPunk6()
    this.closePunk1()
    this.closePunk2()
    this.closePunk3()
    this.closePunk4()
    this.closePunk5()
    this.closePunk6()
  }
  public showParametrs(){
    this.div.nativeElement.style.display = `none`
    this.wrapper.nativeElement.style.display = `block`
  }
  public hideparametrs(){
    this.div.nativeElement.style.display = `flex`
    this.wrapper.nativeElement.style.display = `none`
    this.modalListWrapper.nativeElement.style.display = `none`
    this.modalListWrapper.nativeElement.style.display = `none`
  }
  public select(val:string){

  }
  public showSeries(){
    this.modalListWrapper.nativeElement.style.display = `block`
    this.div.nativeElement.style.display = `none`
    this.series.nativeElement.style.display = `flex`
  }
  public showPunk1(){
    this.filterPunt1.nativeElement.style.display = `flex`
    this.img1.nativeElement.style.display = `none`
    this.img2.nativeElement.style.display = `block`
  }
  public showPunk2(){
    this.filterPunt2.nativeElement.style.display = `flex`
    this.img3.nativeElement.style.display = `none`
    this.img4.nativeElement.style.display = `block`
  }
  public showPunk3(){
    this.filterPunt3.nativeElement.style.display = `flex`
    this.img5.nativeElement.style.display = `none`
    this.img6.nativeElement.style.display = `block`
  }
  public showPunk4(){
    this.filterPunt4.nativeElement.style.display = `flex`
    this.img7.nativeElement.style.display = `none`
    this.img8.nativeElement.style.display = `block`
  }
  public showPunk5(){
    this.filterPunt5.nativeElement.style.display = `flex`
    this.img9.nativeElement.style.display = `none`
    this.img10.nativeElement.style.display = `block`
  }
  public showPunk6(){
    this.filterPunt6.nativeElement.style.display = `flex`
    this.img11.nativeElement.style.display = `none`
    this.img12.nativeElement.style.display = `block`
  }

  public closePunk1(){
    this.filterPunt1.nativeElement.style.display = `none`
    this.img2.nativeElement.style.display = `none`
    this.img1.nativeElement.style.display = `block`
  }
    public closePunk2(){
      this.filterPunt2.nativeElement.style.display = `none`
      this.img4.nativeElement.style.display = `none`
      this.img3.nativeElement.style.display = `block`
    }
    public closePunk3(){
      this.filterPunt3.nativeElement.style.display = `none`
      this.img6.nativeElement.style.display = `none`
      this.img5.nativeElement.style.display = `block`
    }
    public closePunk4(){
      this.filterPunt4.nativeElement.style.display = `none`
      this.img8.nativeElement.style.display = `none`
      this.img7.nativeElement.style.display = `block`
    }
    public closePunk5(){
      this.filterPunt5.nativeElement.style.display = `none`
      this.img10.nativeElement.style.display = `none`
      this.img9.nativeElement.style.display = `block`
    }
    public closePunk6(){
      this.filterPunt6.nativeElement.style.display = `none`
      this.img12.nativeElement.style.display = `none`
      this.img11.nativeElement.style.display = `block`
    }
}
