import { LinkType } from './links.type'

export interface Link {
  rel: string
  href: string
  type: LinkType
}
