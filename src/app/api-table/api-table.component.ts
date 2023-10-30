// api-table.component.ts
import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  //styleUrls: ['./api-table.component.css'],
})
export class ApiTableComponent implements OnInit {
  form: FormGroup; //Form group
  siteData: any; //Data Store for Site
  deviceData: any; // Data Store for Device
  deviceOptions: string[] = []; //List of available device options


  constructor(private deviceService: DeviceService, private fb: FormBuilder) {
    // Initialize the form with a selectedOption field
    this.form = this.fb.group({
      selectedOption: ['']
    });
  }

  ngOnInit(): void {
    // Fetch the list of devices when the component is initialized
    this.deviceService.getDeviceOptions().subscribe((options: string[]) => {
      this.deviceOptions = options;
    });
  }

  // Fetch site data based on the selected device
  fetchSiteData(): void {
    const deviceId = this.form.get('selectedOption')?.value;
    if (deviceId) {
      this.deviceService.getSiteData(deviceId).subscribe((data: any) => {
        this.siteData = data;
      });
    } else {
      this.siteData = null;
    }
  }

  // Fetch device data based on the selected device
  fetchDeviceData(): void {
    const deviceId = this.form.get('selectedOption')?.value;
    if (deviceId) {
      this.deviceService.getDeviceData(deviceId).subscribe((data: any) => {
        this.deviceData = data;
        console.log(this.deviceData);
      });
    } else {
      this.deviceData = null;
    }
  }

  // Fetch both site and device data for the selected device
  fetchBothData(): void {
    const deviceId = this.form.get('selectedOption')?.value;
    if (deviceId) {
      this.fetchDeviceData();
      this.fetchSiteData();
    } else {
      this.siteData = null;
      this.deviceData = null;
    }
  }
}
