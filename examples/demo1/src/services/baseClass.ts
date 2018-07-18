export class ApiResponse {
  /** code */
  code = undefined;

  /** message */
  message = '';

  /** type */
  type = '';
}

export class Category {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class Order {
  /** complete */
  complete = false;

  /** id */
  id = undefined;

  /** petId */
  petId = undefined;

  /** quantity */
  quantity = undefined;

  /** shipDate */
  shipDate = '';

  /** Order Status */
  status = 'placed';
}

export class Pet {
  /** category */
  category = new Category();

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** photoUrls */
  photoUrls = [];

  /** pet status in the store */
  status = 'available';

  /** tags */
  tags = [];
}

export class Tag {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class User {
  /** email */
  email = '';

  /** firstName */
  firstName = '';

  /** id */
  id = undefined;

  /** lastName */
  lastName = '';

  /** password */
  password = '';

  /** phone */
  phone = '';

  /** User Status */
  userStatus = undefined;

  /** username */
  username = '';
}
