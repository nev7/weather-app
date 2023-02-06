export interface FetchApiOptions {
  [key: string]: string;
}

export interface FetchOptionsGet {
  method: string; // *GET, POST, PUT, DELETE, etc.
  mode: string; // no-cors, *cors, same-origin
  cache: string; // *default, no-cache, reload, force-cache, only-if-cached
  credentials: string; // include, *same-origin, omit
  headers: FetchApiOptions;
  redirect: string; // manual, *follow, error
  referrerPolicy: string; // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

export interface FetchOptionsPost extends FetchOptionsGet {
  body: string; // body data type must match "Content-Type" header
}
