import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service'


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  //constructor for injected the service
  constructor(private faceSnapsService : FaceSnapsService,
              private router: Router) {};

 //implementation of OnInit method
  ngOnInit() {
    this.buttonText = 'Oh Snap!'
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
  onViewFaceSnap() {
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
