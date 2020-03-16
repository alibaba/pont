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

  /* ObjectMap is defined by pont internal datatype just like object  */
  object: 'ObjectMap',
  Object: 'ObjectMap',
  Map: 'ObjectMap',
  map: 'ObjectMap',

  /* Array */
  List: 'Array',
  Collection: 'Array'
};
