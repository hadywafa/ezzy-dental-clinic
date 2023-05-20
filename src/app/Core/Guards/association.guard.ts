// import { SessionStorageService } from "src/app/common/services/session-storage.service";
// import { Injectable } from "@angular/core";
// import { CanActivate, UrlTree, Router } from "@angular/router";
// import { catchError, map, Observable, of } from "rxjs";
// import { AuthService } from "../services/auth.service";
// import { GlobalsService } from "../services/globals.service";

// @Injectable({
//   providedIn: "root",
// })
// export class AssociationGuard implements CanActivate {
//   constructor(
//     private sessionService: SessionStorageService,
//     private router: Router,
//     private auth: AuthService,
//     private global: GlobalsService
//   ) {}

//   canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this.auth.validAssociation().pipe(
//       map((result) => {
//         if (!result) {
//           this.router
//             .navigate([
//               `../${this.global.client}/${this.global.event}/${this.global.associationCode}/${this.global.lang}/page-not-found`,
//             ])
//             .catch((e) => console.log(e));
//           return false;
//         }
//         return true;
//       }),
//       catchError((e) => {
//         console.log(e);
//         return of(false);
//       })
//     );
//   }
// }
