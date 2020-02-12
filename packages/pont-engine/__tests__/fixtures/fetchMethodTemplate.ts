
import fetch from 'node-fetch';

export default function (url: string): string {
  return fetch(url).then(res => res.text())
}
