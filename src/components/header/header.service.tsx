import { BehaviorSubject } from "rxjs";

export class HeaderService {
  static toggleMenu$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  static toggleCart$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}