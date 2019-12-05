export function createClient(options: CreateClientOptions): GoogleMapsClient;

export interface CreateClientOptions {
  /**
   * API key (required, unless clientID and clientSecret provided).
   */
  key: string,
  clientId?: string,
  clientSecret?: string,
  channel?: string,
  timeout?: number,
  language?: string,
  rate?: {
    limit?: number,
    period?: number,
  },
  retryOptions?: {
    interval?: number,
  },
  Promise?: PromiseConstructor,
}

export interface RequestHandle {
  asPromise: any,
}

export interface GoogleMapsClient {
  geocode: ApiMethod<{
    address?: string,
    components?: object,
    bounds?: { southwest: LatLng, northeast: LatLng },
    region?: string,
    language?: string,
  }>,
}

export type ApiMethod<Query> = (query: Query, callback?: ResponseCallback) => RequestHandle;

export interface Query {
  address: string;
}
export type ResponseCallback = (err: Error, response: ClientResponse) => void;

export interface ClientResponse {
  headers: object,
  json: object,
  status: number,
}

export type LatLng = [number, number] | string | { lat: any, lng: any } | { latitude: any, longitude: any };

export namespace cli {
  export function parseArgs(argv: string[]): { [key: string]: any }
  export function callback(error: Error, response: { json: any }): void
}
