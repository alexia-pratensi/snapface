export class FaceSnap {
  // //première synthaxe
  id!: number;
  title!: string;
  description!:string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string;

  // // association des arguments du constructor aux propriétés de la classe/ de l'objet
  // constructor(title: string, description:string, imageUrl:string, createdDate: Date, snaps: number) {
  //   this.title = title;
  //   this.description = description;
  //   this.imageUrl = imageUrl;
  //   this.createdDate = createdDate; ou autre possibilité = à new Date();
  //   this.snaps = snaps; ou autre possibilité = à 0;
  // }




  //raccourci de la première synthaxe
  //public indique que la class facesnap aura de propriété avec ces noms et on pourra les passer en argument au constructeur
  // constructor(public title: string,
  //             public description:string,
  //             public imageUrl:string,
  //             public createdDate: Date,
  //             public snaps: number,
  //             public location?: string){
  //   }

}
