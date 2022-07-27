import { ILink } from "../../strict-typing";

/**
 * Links
 * Describes Link added to HTML File header
 * Contains stylesheets, fonts and icons
 */

export const Links: ILink[] = [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    type: 'font',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    type: 'icons',
  },
]

const addLinksToHead = () => {
  const head = document.getElementsByTagName('head')[0]
  Links.forEach(({ rel, href }) => {
    const linkElement = document.createElement('link')
    linkElement.rel = rel
    linkElement.href = href
    head.appendChild(linkElement)
  })
}

export default addLinksToHead
