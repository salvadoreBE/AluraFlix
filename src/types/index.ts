export type VideoRes = {
    title: string,
    category: string,
    video: string,
    description: string,
    isDefault: boolean,
    id: string
}

export type VideoPut = {
    title: string,
    category: "frontend" | "backend" | "innovation",
    video: string,
    description: string,
    isDefault: boolean
}