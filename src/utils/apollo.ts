import { useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined'
  })
}

export function initializeApollo(initialState = {}) {
  const apolloClientGlobal = apolloClient ?? createApolloClient()
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal
  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
