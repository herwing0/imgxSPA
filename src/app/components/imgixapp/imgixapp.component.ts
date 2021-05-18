import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ISamples } from 'src/app/interfaces/ISamples';
import { SharedService } from 'src/app/services/shared-services';

@Component({
  selector: 'app-imgixapp',
  templateUrl: './imgixapp.component.html',
  styleUrls: ['./imgixapp.component.css']
})
export class ImgixappComponent implements OnInit {

  public images: Array<ISamples> = new Array<ISamples>();
  public urls : Array<string> = new Array<string>();
  public imgServ: FormGroup;
  public loading = false;

  //options
  public optionSelected: string = 'Select an option';
  public imgSelected: string = '0'; // Iniciamos
  public verImg: any
  public urlImg: SafeUrl = null;

  // Adjustments
  public brigthness = '';
  public newUrlBrigthness = '';

  public exposure = '';
  public newUrlexposure = '';

  public rotation = '';
  public newUrlRotation = '';

  public gamma = '';
  public newUrlGamma = '';

  //refresh
  public timeStamp = (new Date()).getTime();
  public newImgUrl = '';

  // history feature
  refreshed: boolean = false;
  newSelectRefresh: boolean = false;

  constructor(private http: HttpClient,
              public formBuilder:FormBuilder,
              private sharedServ: SharedService
              ){
                this.imgServ = new FormGroup({
                url: new FormControl(''),
                name: new FormControl(''),
                option: new FormControl(''),
                brigthness : new FormControl('0') ,
                exposure : new FormControl('0'),
                rotation: new FormControl('0'),
                gamma: new FormControl('0')
                                             });
  }

  ngOnInit(): void {
    this.httpCall();
  }


  public httpCall(){
    this.http.get('https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json')
    .subscribe( (nanLabsImg : any) => {
      this.images = nanLabsImg;
      this.urls = this.images.map(urls => urls.url)
      console.log(nanLabsImg);
      console.log(this.urls);
      this.sharedServ.spinnerHide();

    })
  }

  public selectAction() {
    this.verImg = this.urls
      .filter((urls: any) => {
        return urls.url;
      })
      .map((urls: any) => {
        return urls.url;
      });
  }

  public shoot() {
  let imgRequest: ISamples = {
    name : '',
    url: ''
  };
  this.refreshed = false;
  if(this.urls){
    let fullList: Array<string> = new Array<string>();
    this.urls.forEach((url: string) => {
      fullList.push(url);
    });
    imgRequest.url = this.imgServ.get('url').value;
    console.log(imgRequest.url)
    this.verImg = imgRequest.url
  }

  if(this.newImgUrl){
    this.newImgUrl = this.verImg

  }

  }

//About Brigthness

public goToUrlBrigthness(url: string): string{
  window.open(url + '?bri=' + this.brigthness )
  return url + '?bri=' + this.brigthness
}

public getNewUrlBrigthness(url: string){
  if(this.newUrlBrigthness) {
    this.newUrlBrigthness = ''
  }

  this.newUrlBrigthness = url + '?bri=' + this.brigthness
  this.getNewPreview()

}

public brigthnessValue(){
    if(this.brigthness) {
      this.brigthness = '';
    }
    if(this.refreshed){
      this.refreshed = false;
    }
    this.brigthness = this.imgServ.get('brigthness').value
    this.getNewUrlBrigthness(this.verImg);
  }

  //Exposure

public goToUrlexposure(url: string): string{
    window.open(url + '?exp=' + this.exposure )
    return url + '?exp=' + this.exposure
  }

public getNewUrlexposure(url: string){

    if(this.newUrlexposure) {
      this.newUrlexposure = ''
    }

    this.newUrlexposure = url + '?exp=' + this.exposure
  this.getNewPreview()
    console.log(this.newUrlexposure);
  }

public exposureValue(){
      if(this.exposure) {
        this.exposure = '';
      }
      if(this.refreshed){
        this.refreshed = false;
      }
      this.exposure = this.imgServ.get('exposure').value
      this.getNewUrlexposure(this.verImg);
    }

    //About Rotation  rotationValue


public goToUrlRotation(url: string): string{
      window.open(url + '?rot=' + this.rotation )
      return url + '?rot=' + this.rotation
    }

    getNewUrlRotation(url: string){
      if(this.newUrlRotation) {
        this.newUrlRotation = ''
      }

      this.newUrlRotation = url + '?rot=' + this.rotation
      this.getNewPreview()

    }

public rotationValue(){
        if(this.rotation) {
          this.rotation = '';
        }
        if(this.refreshed){
          this.refreshed = false;
        }
        this.rotation = this.imgServ.get('rotation').value
        this.getNewUrlRotation(this.verImg);
      }

      //About Gamma  rotationValue

public goToUrlGamma(url: string): string{
      window.open(url + '?gam=' + this.gamma)
      return url + '?gam=' + this.gamma
    }

public getNewUrlGamma(url: string){
      if(this.newUrlGamma) {
        this.newUrlGamma = ''
      }

      this.newUrlGamma = url + '?gam=' + this.gamma
      this.getNewPreview()

    }

public gammaValue(){
        if(this.gamma) {
          this.gamma = '';
        }
        if(this.refreshed){
          this.refreshed = false;
        }
        this.gamma = this.imgServ.get('gamma').value
        this.getNewUrlGamma(this.verImg);
      }

    //Update image real time

public getNewPreview() {
      if(this.newUrlBrigthness  ){
        this.newImgUrl = this.newUrlBrigthness
      }
      if(this.newUrlexposure){
        this.newImgUrl = this.newUrlexposure
      }
      if(this.newUrlRotation){
        this.newImgUrl = this.newUrlRotation
      }
      if(this.newUrlGamma){
        this.newImgUrl = this.newUrlGamma
      }
 }


 refresh(){
  this.imgServ.patchValue({
    url : this.verImg,
    brigthness : '0' ,
    exposure : '0',
    rotation: '0',
    gamma: '0'
  });
  this.refreshed = true;
}

}
