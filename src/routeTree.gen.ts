/* eslint-disable */

// @ts-nocheck

// This file is generated from the public website routes.
// TanStack Router may overwrite it during dev/build.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about/route'
import { Route as ContactRouteImport } from './routes/contact/route'
import { Route as PortfolioRouteImport } from './routes/portfolio/route'
import { Route as ServicesRouteImport } from './routes/services/route'
import { Route as TeamIndexRouteImport } from './routes/team/index'
import { Route as TeamSlugRouteImport } from './routes/team/$slug'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
} as any)
const PortfolioRoute = PortfolioRouteImport.update({
  id: '/portfolio',
  path: '/portfolio',
  getParentRoute: () => rootRouteImport,
} as any)
const ServicesRoute = ServicesRouteImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRouteImport,
} as any)
const TeamIndexRoute = TeamIndexRouteImport.update({
  id: '/team/',
  path: '/team/',
  getParentRoute: () => rootRouteImport,
} as any)
const TeamSlugRoute = TeamSlugRouteImport.update({
  id: '/team/$slug',
  path: '/team/$slug',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/portfolio': typeof PortfolioRoute
  '/services': typeof ServicesRoute
  '/team/$slug': typeof TeamSlugRoute
  '/team/': typeof TeamIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/portfolio': typeof PortfolioRoute
  '/services': typeof ServicesRoute
  '/team/$slug': typeof TeamSlugRoute
  '/team': typeof TeamIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/contact': typeof ContactRoute
  '/portfolio': typeof PortfolioRoute
  '/services': typeof ServicesRoute
  '/team/$slug': typeof TeamSlugRoute
  '/team/': typeof TeamIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/contact'
    | '/portfolio'
    | '/services'
    | '/team/$slug'
    | '/team/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/contact'
    | '/portfolio'
    | '/services'
    | '/team/$slug'
    | '/team'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/contact'
    | '/portfolio'
    | '/services'
    | '/team/$slug'
    | '/team/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ContactRoute: typeof ContactRoute
  PortfolioRoute: typeof PortfolioRoute
  ServicesRoute: typeof ServicesRoute
  TeamSlugRoute: typeof TeamSlugRoute
  TeamIndexRoute: typeof TeamIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/portfolio': {
      id: '/portfolio'
      path: '/portfolio'
      fullPath: '/portfolio'
      preLoaderRoute: typeof PortfolioRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/services': {
      id: '/services'
      path: '/services'
      fullPath: '/services'
      preLoaderRoute: typeof ServicesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/team/': {
      id: '/team/'
      path: '/team'
      fullPath: '/team/'
      preLoaderRoute: typeof TeamIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/team/$slug': {
      id: '/team/$slug'
      path: '/team/$slug'
      fullPath: '/team/$slug'
      preLoaderRoute: typeof TeamSlugRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute,
  TeamSlugRoute,
  TeamIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}
