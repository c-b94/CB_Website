import React from 'react'

export default async function SanityFetch(queryRequest) {
    const PROJECT_ID ="ipn68qv1";
    const DATASET = "production"
    const Query = encodeURIComponent(queryRequest)
    let url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${Query}`
    const response = await fetch(url)
    console.log(response)
    const content = await response.json()
    console.log(content.result)
    return content.result;
}
