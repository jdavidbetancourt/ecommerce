

const OrderCard = props => {
    const { id, title, imageURL, price, handleDelete } = props
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <button className='cursor-pointer' onClick={() => handleDelete(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>

    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-5">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light line-clamp-1'>{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className='text-lg font-medium pl-8'>{price}</p>
                {renderXMarkIcon}
            </div>
            
        </div>
    )
}

export default OrderCard