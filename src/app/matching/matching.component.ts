import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {
  validationForm;
  ListSelect;
  filename;
  constructor(public fileService: FileService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.filename = this.route.snapshot.paramMap.get('filename')
    this.validationForm = new FormGroup({})
    this.fileService.matching(this.filename).subscribe((res: any) => {
      console.log(res);
      
       this.ListSelect = res 
      },
      (erreur: any) => { });

  }

}
