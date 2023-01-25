import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  //constructor for injected the service
  constructor(private faceSnapsService : FaceSnapsService,
              private route: ActivatedRoute) {};

 //implementation of OnInit method
  ngOnInit() {
    this.buttonText = 'Oh Snap!';

    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  // event when user click on the button snap
  onClickSnap() {
    if(this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap' )
      this.buttonText = "Oops, unSnap!";
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap' )
      this.buttonText = 'Oh Snap!';
    }
  }
}
