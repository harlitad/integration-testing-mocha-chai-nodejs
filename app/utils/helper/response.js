exports.baseResponsePagination = ({data=[], message="success", limit=3, page=1} = {}) => {
    limit = Number(limit)
    page = Number(page)
    const skip = (page - 1) * limit
    const skipData = data.slice(skip, (skip+limit))
    return {
        message: message,
        data: skipData,
        pages: {
            current_page: page,
            total_page: Math.ceil(data.length/limit),
            limit_per_page: limit
        } || undefined
    }
}

exports.baseResponse = ({data=[], message="success"} = {}) => {
    return {
        message: message,
        data: data,
    }
}