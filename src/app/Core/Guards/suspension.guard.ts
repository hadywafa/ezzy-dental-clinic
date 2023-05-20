// import { SessionStorageService } from 'src/app/common/services/session-storage.service';
// import { Injectable } from "@angular/core";
// import { CanActivate, UrlTree, Router } from "@angular/router";
// import { catchError, map, Observable, of } from "rxjs";
// import { PermissionLevel } from "../Models/enums/PermissionLevel";
// import { AuthService } from "../services/auth.service";
// import { GlobalsService } from "../services/globals.service";

// @Injectable({
//   providedIn: "root",
// })
// export class SuspensionGuard implements CanActivate {
//   constructor(
//     private sessionService: SessionStorageService,
//     private router: Router,
//     private auth: AuthService,
//     private global: GlobalsService
//   ) {}

//   canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.auth.getClientPermission().pipe(
//       map((result) => {
//         if (result === PermissionLevel.NoAccess) {
//           this.router
//             .navigate([`../${this.global.client}/${this.global.event}/${this.global.lang}/suspended`])
//             .catch((e) => console.log(e));
//           return false;
//         }
//         this.sessionService.setPermissionLevel(result);
//         return true;
//       }),
//       catchError((e) => {
//         console.log(e);
//         return of(false);
//       })
//     );
//   }
// }
