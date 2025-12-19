import { Catalog, DEFAULT_CATALOG } from '@a2ui/angular';

export const MATERIAL3_CATALOG = {
  ...DEFAULT_CATALOG,
  Hello: () => import('./hello').then((c) => c.Hello),
} as Catalog;
