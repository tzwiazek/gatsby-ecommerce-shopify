import { BehaviorSubject } from 'rxjs';

export class MobileMenuService {
  static toggleMenu$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
