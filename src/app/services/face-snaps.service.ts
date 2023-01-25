import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

// decorator for injected this service
@Injectable({
  providedIn:'root'
})

export class FaceSnapsService {

faceSnaps: FaceSnap[] = [
  {
    id: 1,
    title: 'Newton',
    description:'My lovely dog',
    imageUrl: 'https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=5vfB1p-E',
    createdDate: new Date(),
    snaps: 150,
    location: 'Paris'
  },
  {
    id: 2,
    title: 'Henry',
    description:'We have been married for 5 years',
    imageUrl:'https://static.independent.co.uk/2022/02/02/16/iStock-1186306039%20%281%29.jpg?quality=75&width=982&height=726&auto=webp',
    createdDate: new Date(),
    snaps: 0
  },
  {
    id: 3,
    title: 'My Childreen',
    description:'Elisa, 6 years old and Maeva, 4 years old',
    imageUrl:'https://www.francebleu.fr/s3/cruiser-production/2021/07/53483385-b060-4233-809d-9cd75eeec3fd/1200x680_gettyimages-957387180.jpg',
    createdDate: new Date(),
    snaps: 0,
    location: 'in the wood'
  },
  {
    id: 4,
    title: 'Newton',
    description:'My lovely dog',
    imageUrl: 'https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=5vfB1p-E',
    createdDate: new Date(),
    snaps: 0,
    location: 'Paris'
  },
  {
    id: 5,
    title: 'Henry',
    description:'We have been married for 5 years',
    imageUrl:'https://static.independent.co.uk/2022/02/02/16/iStock-1186306039%20%281%29.jpg?quality=75&width=982&height=726&auto=webp',
    createdDate: new Date(),
    snaps: 0
  },
  {
    id: 6,
    title: 'My Childreen',
    description:'Elisa, 6 years old and Maeva, 4 years old',
    imageUrl:'https://www.francebleu.fr/s3/cruiser-production/2021/07/53483385-b060-4233-809d-9cd75eeec3fd/1200x680_gettyimages-957387180.jpg',
    createdDate: new Date(),
    snaps: 0,
    location: 'in the wood'
  }
  ]
  // array of all facesnaps
  getAllFaceSnaps() : FaceSnap[] {
    return this.faceSnaps;
  }
  // return a facesnap by id
  getFaceSnapById(faceSnapId: number) : FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if(!faceSnap){
        throw new Error ('facesnap not found');
      } else {
        return faceSnap;
      }
  }
  // method to increment & decrement snaps
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
   snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
