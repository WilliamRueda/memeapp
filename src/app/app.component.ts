import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private nativeAudio: NativeAudio) { this.nativeAudio.preloadSimple('num1', 'assets/audio/audio.mp3');
  this.nativeAudio.preloadSimple('num2', 'assets/audio/Jsjaja le meto la monda a tus abuela.mp3');}

 ngInInit(){

  this.nativeAudio.preloadSimple('num1', 'assets/audio/audio.mp3');
  this.nativeAudio.preloadSimple('num2', 'assets/audio/Jsjaja le meto la monda a tus abuela.mp3');
 } 

ionViewWillEnter(){
  this.nativeAudio.preloadSimple('num1', 'assets/audio/audio.mp3');
  this.nativeAudio.preloadSimple('num2', 'assets/audio/Jsjaja le meto la monda a tus abuela.mp3');

}

play1(){
  this.nativeAudio.play('num1');

}
play2(){
  this.nativeAudio.play('num2');

}

}
