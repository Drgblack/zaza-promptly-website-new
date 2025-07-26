// global.d.ts
interface Window {
  gtag?: (...args: any[]) => void;
  fbq?: (...args: any[]) => void;
  Sentry?: {
    captureException: (error: unknown, context?: unknown) => void;
  };
  [key: string]: any; // 👈 allows dynamic properties like window["dataLayer"]
}
