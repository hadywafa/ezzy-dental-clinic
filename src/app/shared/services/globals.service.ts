import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalsService {
  // clientConfigurations!: ClientConfigurationsDto;
  // client!: string;
  // event!: string;
  lang!: string;
  // associationCode!: string;
  // isTeamHubDataLoaded!: boolean;
  // isTeamHubDataLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  // constructor() {
  //   this.clientConfig = config;
  // }
  Initialize(lang: string): void {
    this.lang = lang;
  }
  // setTeamHubDataLoadingState(isLoaded: boolean): void {
  //   this.isTeamHubDataLoaded = isLoaded;
  //   this.isTeamHubDataLoaded$.next(this.isTeamHubDataLoaded);
  // }
  // setClientConfigurations(setting: ClientConfigurationsDto) {
  //   this.clientConfigurations = setting;
  // }
}
