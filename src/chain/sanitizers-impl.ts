import * as validator from 'validator';
import { CustomSanitizer, StandardSanitizer } from '../base';
import { Sanitization } from '../context-items/sanitization';
import { ContextBuilder } from '../context-builder';
import * as Options from '../options';
import { Sanitizers } from './sanitizers';

export class SanitizersImpl<Chain> implements Sanitizers<Chain> {
  constructor(private readonly builder: ContextBuilder, private readonly chain: Chain) {}

  customSanitizer(sanitizer: CustomSanitizer) {
    this.builder.addItem(new Sanitization(sanitizer, true));
    return this.chain;
  }

  // Standard sanitizers
  private addStandardSanitization(sanitizer: StandardSanitizer, ...options: any[]) {
    this.builder.addItem(new Sanitization(sanitizer, false, options));
    return this.chain;
  }

  blacklist(chars: string) {
    return this.addStandardSanitization(validator.blacklist, chars);
  }
  default(default_value: any) {
    return this.customSanitizer(value =>
      [undefined, null, NaN, ''].includes(value) ? default_value : value,
    );
  }
  escape() {
    return this.addStandardSanitization(validator.escape);
  }
  unescape() {
    return this.addStandardSanitization(validator.unescape);
  }
  ltrim(chars?: string) {
    return this.addStandardSanitization(validator.ltrim, chars);
  }
  normalizeEmail(options?: Options.NormalizeEmailOptions) {
    return this.addStandardSanitization(validator.normalizeEmail, options);
  }
  replace(new_value: any, values_to_replace: any[] = [null, undefined, NaN, '']) {
    return this.customSanitizer(value => (values_to_replace.includes(value) ? new_value : value));
  }
  rtrim(chars?: string) {
    return this.addStandardSanitization(validator.rtrim, chars);
  }
  stripLow(keep_new_lines?: boolean) {
    return this.addStandardSanitization(validator.stripLow, keep_new_lines);
  }
  toArray() {
    return this.customSanitizer(
      value => (value !== undefined && ((Array.isArray(value) && value) || [value])) || [],
    );
  }
  toBoolean(strict?: boolean) {
    return this.addStandardSanitization(validator.toBoolean, strict);
  }
  toDate() {
    return this.addStandardSanitization(validator.toDate);
  }
  toFloat() {
    return this.addStandardSanitization(validator.toFloat);
  }
  toInt(radix?: number) {
    return this.addStandardSanitization(validator.toInt, radix);
  }
  toLowerCase() {
    return this.customSanitizer(value => (typeof value === 'string' ? value.toLowerCase() : value));
  }
  toUpperCase() {
    return this.customSanitizer(value => (typeof value === 'string' ? value.toUpperCase() : value));
  }
  trim(chars?: string) {
    return this.addStandardSanitization(validator.trim, chars);
  }
  whitelist(chars: string) {
    return this.addStandardSanitization(validator.whitelist, chars);
  }
}
