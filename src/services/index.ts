import { defs as ideDefs, ide } from './ide';

(window as any).defs = {
  ide: ideDefs
};
(window as any).API = {
  ide
};
