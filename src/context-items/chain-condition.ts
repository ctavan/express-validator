import { ValidationChain } from '../chain';
import { Meta, ValidationHalt } from '../base';
import { Context } from '../context';
import { UnknownContextItem } from './context-item';

export class ChainCondition implements UnknownContextItem {
  readonly kind = 'unknown';

  constructor(private readonly chain: ValidationChain) {}

  async run(_context: Context, _value: any, meta: Meta) {
    const otherContext = await this.chain.run(meta.req);
    if (otherContext.errors.length) {
      throw new ValidationHalt();
    }
  }
}
