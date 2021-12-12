import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link';

interface PageNftProps {
  slug: string
  nftId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, nftId } = context.query
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const errorCode = res.ok ? false : res.statusCode
  // const json = await res.json()

  return {
    props: { slug, nftId },
  }
}

const PageNftDetail: NextPage<PageNftProps> = ({ slug, nftId }) => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Id: {' '}
          <Link href="/" passHref>
            <a className="text-blue-600" >
              {nftId}
            </a>
          </Link>
        </h1>
        <h1 className="text-6xl font-bold">
          Collection: {' '}
          <Link href="/" passHref>
            <a className="text-blue-600" >
              {slug}
            </a>
          </Link>
        </h1>
      </main>
    </div>
  )
}

export default PageNftDetail
