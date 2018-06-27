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

type subscribeType = (
  ...stores: string[]
) => (Component: React.ComponentType<any>) => SubscriberType;

type QafContainer = {
  Provider: ProviderType;
  Subscriber: SubscriberType;
  subscribe: subscribeType;
};

export function createStore(): QafStore;
export function createContainer(): QafContainer;

export const Provider: ProviderType;
export const Subscriber: SubscriberType;
export const subscribe: subscribeType;
