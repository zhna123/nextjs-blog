import usePagination from "hooks/usePagination"
import Link from "next/link"

export type PaginationProps = {
  totalItems: number
  currentPage: number
  renderPageLink: (page: number) => string
  itemsPerPage?: number
}

const Pagination = (
  {
    totalItems,
    currentPage,
    itemsPerPage = 10,
    renderPageLink,
  }: PaginationProps
) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = usePagination(totalPages, currentPage)

  return (
    <div className="flex items-center justify-center my-8">
      {pages.map((pageNumber, i) =>
        pageNumber === '...' ? (
          <span
            key={i}
            className="px-4 py-2 rounded-full text-sm font-semibold text-black"
          >
            {pageNumber}
          </span>
        ) : (
          <Link
            key={i}
            href={renderPageLink(pageNumber as number)}
            className={`${
              pageNumber === currentPage ? 'font-extrabold' : ''
            } text-blog_green px-4 py-2 mx-1 text-sm`}
          >
            {pageNumber}
          </Link>
        )
      )}
    </div>
  )
}

export default Pagination;