import { Sanitizers } from './sanitizers';
import { Request } from '../base';
import { ReadonlyContext } from '../context';

export interface SanitizationChain extends Sanitizers<SanitizationChain> {
  (req: Request, res: any, next: () => void): void;
  context: ReadonlyContext;
}