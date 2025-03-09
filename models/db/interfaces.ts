export interface I_ApiUserData {
    id: string,
    name: string,
    login: string,
    password: string
}

export interface I_ApiServiceData {
    type: string
    category: string,
    image: string,
    name: string,
    description: string,
    price: string,
    discount: string,
    id: string
}

export interface I_ApiCategoryData {
    image: string,
    type: string,
    name: string,
    description: string,
    id: string
}

export interface I_ApiTypeData {
    image: string,
    name: string,
    description: string,
    id: string
}

export interface I_ApiAboutPageData {
    title: string,
    description: string,
    coverImage: string,
    firstText: string,
    firstImage: string,
    secondText: string,
    secondImage: string
}

export interface I_ApiContactPageData {
    title: string,
    description: string,
    coverImage: string
}

export interface I_ApiNewsPageData {
    title: string,
    description: string,
    coverImage: string
}

export interface I_ApiShopPageData {
    title: string,
    description: string,
    coverImage: string
}

export interface I_ApiAllPagesData {
    aboutUs: I_ApiAboutPageData,
    contact: I_ApiContactPageData,
    news: I_ApiContactPageData,
    shop: I_ApiShopPageData
}

export interface I_ApiNewsData {
    title: string,
    description: string,
    image: string,
    date: string,
    time: string,
    id: string
}

export interface I_ApiProductData {
    id: string,
    title: string,
    description: string,
    image: string,
    price: string
}