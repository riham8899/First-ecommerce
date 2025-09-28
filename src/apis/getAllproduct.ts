export default async function getAllProduct() {



    const response = await fetch("https://ecommerce.routemisr.com/api/v1/products")
    const { data } = await response.json()
    // if (!response.ok) {

    //     throw new Error("Failed to fetch products")
    // }

    console.log(data)
    return data 
}

// : Product[]