import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link';

interface PageDetailProps {
  slug: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query

  return {
    props: { slug },
  }
}

const PageDetail: NextPage<PageDetailProps> = ({ slug }) => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primaryLigthen">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Id: {' '}
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

export default PageDetail
