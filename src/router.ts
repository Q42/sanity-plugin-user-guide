import {route} from 'sanity/router'

export type UserGuideState = {
  page?: string
  subPage?: string
}

export const router = route.create('/', [
  route.create({
    path: '/:page',
  }),
  route.create({
    path: '/:page/:subPage',
  }),
])
