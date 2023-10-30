// device.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  constructor(private http: HttpClient) {}

  // Fetch the list of devices
  getDeviceOptions(): Observable<string[]> {
    const url = 'https://melink-api-gw.azure-api.net/api/devices?key=5accea5204b64d95b43c0d085e6e13f5';
    return this.http.get<string[]>(url);
  }

  // Fetch site data for a specific device
  getSiteData(deviceId: string): Observable<any> {
    // Use the provided device ID to fetch the site data
    const url = `https://melink-api-gw.azure-api.net/api/positiv/device/site?key=5accea5204b64d95b43c0d085e6e13f5&id=${deviceId}`;
    return this.http.get(url);
  }

    // Fetch Device data for a specific device
  getDeviceData(deviceId: string): Observable<any> {
    // Use the provided device ID to fetch the Device data
    const url = `https://melink-api-gw.azure-api.net/api/positiv/device/detail?key=5accea5204b64d95b43c0d085e6e13f5&id=${deviceId}`;
    return this.http.get(url);
  }
}
