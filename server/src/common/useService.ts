import { serviceInstances } from '..';

type Newable<T> = new (...args: any[]) => T;

export function useService<T>(serviceClazz: Newable<T>): T {
  const service = serviceInstances.find((s) => s instanceof serviceClazz);
  if (!service) {
    throw new Error(`Service of type ${serviceClazz.name} not found`);
  }
  return (service as any) as T;
}
