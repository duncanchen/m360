import * as cookie from "cookie"
import qs from "qs"
import { URL } from "url"

export const getDomainFromRequest = (request: Request) => {
  const url = new URL(request.url)
  return url.hostname
}

export function getFullQueryString(request: Request) {
  const url = request.url
  const queryStringIndex = url.indexOf("?")
  if (queryStringIndex !== -1) {
    return url.substring(queryStringIndex + 1)
  }
  return ""
}

export interface Payload {
  _tag: `payload`
  action?: string
  env?: string
}


export const searchAsPayload = (request: Request) => {
  const queryString = getFullQueryString(request)
  return { ...qs.parse(queryString), _tag: `payload` } as Payload
}


export const bodyAsPayload = async (request: Request) => {
  return { ...qs.parse(await request.text()), _tag: `payload` } as Payload
}


export const getFormData = async (request: Request, names: string[]) => {
  const formData = await request.formData()
  return names.map(name => formData.get(name) as string)
}

export const getQueryString = (request: Request, names: string[]) => {
  return parseParametersFromURL(request, names)
}


export function getRequestParams(request: Request) {
  const params: Record<string, string> = {}
  const url = request.url
  // Check if the URL contains a query string
  const queryStringIndex = url.indexOf("?")
  if (queryStringIndex !== -1) {
    const queryString = url.substring(queryStringIndex + 1)
    parseQueryString(params, queryString)
  }

  // Check if the URL contains a fragment
  const fragmentIndex = url.indexOf("#")
  if (fragmentIndex !== -1) {
    const fragmentString = url.substring(fragmentIndex + 1)
    parseQueryString(params, fragmentString)
  }
  return params
}

function parseParametersFromURL(request: Request, names: string[]) {
  const params = getRequestParams(request)
  return names.map(name => params[name])
}

function parseQueryString(params: Record<string, string>, queryString: string) {
  const pairs = queryString.split("&")
  for (const pair of pairs) {
    const keyValue = pair.split("=")
    if (keyValue.length === 2) {
      const key = decodeURIComponent(keyValue[0])
      const value = decodeURIComponent(keyValue[1].replace(/\+/g, " "))
      params[key] = value
    }
  }
}

export function getCookies(request: Request, names: string[]) {
  const cookieHeader = request.headers.get("cookie")
  const parsed = cookieHeader ? cookie.parse(cookieHeader) : {}
  return names.map(name => parsed[name])
}