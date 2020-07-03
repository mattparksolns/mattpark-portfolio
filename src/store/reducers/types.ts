export type IPv4 = {
    ip: string
}

export type IPv6 = {
    ip: string
}

export type GeoData = {
    IPv4: string
    city: string
    country_code: string
    latitude: number
    longitude: number
    postal: string
    state: string
}

export type UserData = {
    ipv4: IPv4
    ipv6: IPv6
    geoData: GeoData
}
