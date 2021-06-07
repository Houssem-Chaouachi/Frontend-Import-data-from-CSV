import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {
  validationForm;
  ListSelect = [];
  ListClient = []
  filename;
  constructor(public fileService: FileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filename = this.route.snapshot.paramMap.get('filename')
    this.validationForm = new FormGroup({
      validation: new FormArray([])

    })
    this.fileService.matching(this.filename).subscribe((res: any) => {
      // console.log(res);

      //  this.ListSelect = res

      this.ListClient = res[res.length - 1]

      res.splice(res.length - 1, 1)
      this.ListSelect = res
      console.log(this.ListSelect);
      console.log(this.ListClient);




    },
      (erreur: any) => { });

  }

}
