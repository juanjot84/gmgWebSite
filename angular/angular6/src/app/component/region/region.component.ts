import { Component, OnInit } from '@angular/core';

import { RegionService } from '../../services/region.service';
import { NgForm } from '@angular/forms';
import { Region } from '../../models/region';

declare var M: any;

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [RegionService]
})
export class RegionComponent implements OnInit {

  constructor(private regionService: RegionService) { }

  ngOnInit() {
    this.getRegiones();
  }

  addRegion(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.regionService.putRegion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getRegiones();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.regionService.postRegion(form.value)
      .subscribe(res => {
        this.getRegiones();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getRegiones() {
    this.regionService.getRegiones()
      .subscribe(res => {
        this.regionService.regiones = res as Region[];
      });
  }

  editRegion(region: Region) {
    this.regionService.selectedRegion = region;
  }
  
  deleteRegion(_id: string, form: NgForm) {
    if(confirm('Esta seguro que desea eliminarla?')) {
      this.regionService.deleteRegion(_id)
        .subscribe(res => {
          this.getRegiones();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }
 
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.regionService.selectedRegion = new Region();
    }
  }

}
