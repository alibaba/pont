/**
 * 怪异类型兼容
 */
export const PrimitiveTypeMap = {
  /* number */
  integer: 'number',
  int: 'number',
  long: 'number',
  longlong: 'number',
  double: 'number',
  float: 'number',

  /* void */
  Void: 'void',
  void: 'void',

  /* objectMap is defined by pont internal datatype just like object  */
  object: 'objectMap',
  Object: 'objectMap',
  Map: 'objectMap',
  map: 'objectMap',

  /* Array */
  List: 'Array',
  Collection: 'Array'
};
