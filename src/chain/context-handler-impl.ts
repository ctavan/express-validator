import { Context } from '../context';
import { ContextHandler, OptionalOptions } from './context-handler';

export class ContextHandlerImpl<Chain> implements ContextHandler<Chain> {
  constructor(private readonly context: Context, private readonly chain: Chain) {}

  not() {
    this.context.negate();
    return this.chain;
  }

  withMessage(message: any) {
    const { stack } = this.context;
    const lastItem = stack[stack.length - 1];
    if (lastItem && lastItem.kind === 'validation') {
      lastItem.message = message;
    }

    return this.chain;
  }

  optional(options: OptionalOptions = true) {
    this.context.setOptional(options);
    return this.chain;
  }
}
