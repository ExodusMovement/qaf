import React from 'react';

type QafStore = React.PureComponent<void>;
type QafStoreInstance = {};

type ProviderType = React.SFC<
  {
    children: React.ReactNode;
  } & {
    [storeKey: string]: QafStore;
  }
>;

type SubscriberType = React.SFC<
  {
    children(...stores: QafStoreInstance[]): React.ReactNode;
    render(...stores: QafStoreInstance[]): React.ReactNode;
  } & {
    [storeKey: string]: boolean;
  }
>;

type SubscribeType = (
  ...stores: string[]
) => (Component: React.ComponentType<any>) => SubscriberType;

type QafContainer = {
  Provider: ProviderType;
  Subscriber: SubscriberType;
  subscribe: SubscribeType;
};

type QafSingularStore = React.PureComponent<{
  children: React.ReactNode;
}>;

type SingularSubscriber = React.SFC<{
  children(store: QafStoreInstance): React.ReactNode;
  render(store: QafStoreInstance): React.ReactNode;
}>;

type SingularSubscribe = (
  Component: React.ComponentType<any>
) => SingularSubscriber;

type QafSingularContainer = {
  QafStore: QafSingularStore;
  Subscriber: SingularSubscriber;
  subscribe: SingularSubscribe;
};

type ContainerConfig = {
  singular: boolean;
};

export function createStore(): QafStore;

export function createContainer(
  config: ContainerConfig
): QafContainer | QafSingularContainer;

export const Provider: ProviderType;
export const Subscriber: SubscriberType;
export const subscribe: SubscribeType;
