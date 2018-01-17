import { check } from './validation-chain-builders';

check('foo', 'with error message')
  .custom((value, { req, location, path }) => {
    throw new Error([value, req.body.foo, location, path].join(' '));
  })
  .isAfter().isAfter(new Date().toString())
  .isAlpha().isAlpha('ar-DZ')
  .isAlphanumeric().isAlphanumeric('ar-DZ')
  .isAscii()
  .isBase64()
  .isBefore().isBefore(new Date().toString())
  .isBoolean()
  .isByteLength({ min: 0, max: 0 })
  .isCreditCard()
  .isCurrency({
    symbol: '',
    require_symbol: true,
    allow_space_after_symbol: true,
    symbol_after_digits: true,
    allow_negatives: true,
    parens_for_negatives: true,
    negative_sign_before_digits: true,
    negative_sign_after_digits: true,
    allow_negative_sign_placeholder: true,
    thousands_separator: '',
    decimal_separator: '',
    allow_space_after_digits: true
  })
  .isDataURI()
  .isDecimal()
  .isDivisibleBy(0)
  .isEmail()
  .isEmail({ allow_display_name: true, allow_utf8_local_part: true, require_tld: true })
  .isEmpty()
  .isFloat().isFloat({ min: 0, max: 0, lt: 0, gt: 0 })
  .isFQDN()
  .isFQDN({ require_tld: true, allow_underscores: true, allow_trailing_dot: true })
  .isFullWidth()
  .isHalfWidth()
  .isHash('md5')
  .isHexadecimal()
  .isHexColor()
  .isIn([''])
  .isInt().isInt({ min: 0, max: 0, lt: 0, gt: 0, allow_leading_zeroes: true })
  .isIP().isIP(4).isIP(6)
  .isISIN()
  .isISO8601()
  .isISBN().isISBN(0)
  .isISSN({ case_sensitive: true, require_hyphen: true })
  .isISRC()
  .isJSON()
  .isLatLong()
  .isLength({ min: 0, max: 0 })
  .isMACAddress()
  .isLowercase()
  .isMD5()
  .isMobilePhone('en-US')
  .isMongoId()
  .isMultibyte()
  .isNumeric()
  .isSurrogatePair()
  .isPostalCode('US')
  .isUppercase()
  .isURL({
    protocols: ['http', 'https', 'ftp'],
    require_tld: true,
    require_protocol: true,
    require_host: true,
    require_valid_protocol: true,
    allow_underscores: true,
    host_whitelist: ['', / /i],
    host_blacklist: ['', / /i],
    allow_trailing_dot: true,
    allow_protocol_relative_urls: true,
  })
  .isUUID().isUUID('all').isUUID(3).isUUID(4).isUUID(5)
  .isVariableWidth()
  .isWhitelisted('')
  .isWhitelisted([''])
  .not()
  .exists()
  .equals(true).equals(0).equals('').equals({}).contains('')
  .matches('').matches('', '').matches(/ /, '')
  .optional().optional({ checkFalsy: true }).optional({ nullable: true })
  .trim()
  .trim('abc')
  .ltrim()
  .ltrim('abc')
  .rtrim()
  .rtrim('abc')
  .blacklist('a')
  .whitelist('z')
  .escape()
  .unescape()
  .toInt()
  .toInt(10)
  .toFloat()
  .toDate()
  .stripLow()
  .stripLow(true)
  .normalizeEmail()
  .normalizeEmail({
    all_lowercase: true,
    gmail_lowercase: true,
    gmail_remove_dots: true,
    gmail_remove_subaddress: true,
    gmail_convert_googlemaildotcom: true,
    outlookdotcom_lowercase: true,
    outlookdotcom_remove_subaddress: true,
    yahoo_lowercase: true,
    yahoo_remove_subaddress: true,
    icloud_lowercase: true,
    icloud_remove_subaddress: true
  })
  .withMessage(new Error('message'))
  .withMessage(2)
  .withMessage('message');