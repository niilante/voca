import Const from 'helper/format/const';
import isNil from 'helper/object/is_nil';
import padLeft from 'manipulate/pad_left';
import padRight from 'manipulate/pad_right';

/**
 * Aligns and pads `subject` string.
 *
 * @ignore
 * @param {string} subject The subject string.
 * @param {ConversionSpecification} conversion The conversion specification object.
 * @return {string} Returns the aligned and padded string.
 */
export default function alignAndPad(subject, conversion) {
  const width = conversion.width;
  if (isNil(width) || subject.length >= width) {
    return subject;
  }
  const padType = conversion.alignmentSpecifier === Const.LITERAL_MINUS ? padRight : padLeft;
  return padType(subject, width, conversion.getPaddingCharacter());
}