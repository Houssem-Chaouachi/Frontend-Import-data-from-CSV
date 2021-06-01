import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-model-file',
  templateUrl: './model-file.component.html',
  styleUrls: ['./model-file.component.css']
})
export class ModelFileComponent implements OnInit {
  files: any[] = [];

  constructor(public fileService: FileService , public router:Router) { }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  ajouter() {
    const formData = new FormData();
console.log(this.files[0]);
this.files.forEach(file=>{
  formData.append('file', file);
 })

    this.fileService.upload(formData).subscribe((res:any) => {
console.log(res.filename);
this.router.navigate(['matching/',res.filename])

    })
  }
}
