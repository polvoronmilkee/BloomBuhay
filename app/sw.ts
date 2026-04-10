import { defaultCache } from "@serwist/next/worker";
import { type PrecacheEntry, Serwist } from "serwist";

// 1. Define the interface
interface ServiceWorkerGlobalScope {
  __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
}

// 2. Cast 'self' to the worker scope
const swSelf = (self as unknown) as ServiceWorkerGlobalScope;

const serwist = new Serwist({
  // 3. Use the casted variable here
  precacheEntries: swSelf.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

serwist.addEventListeners();
