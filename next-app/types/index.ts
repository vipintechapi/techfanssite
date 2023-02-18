export interface Posts {
    title: string
    html: string
    shortdec: string
    createdAt: string
    categoryId: Categories
}

export interface Categories {
    _id: string
    name: string
}

export interface Pagination {
    currentPage: number
    totalPage: number
}