import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link';

interface NftDetailProps {
  nftId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { nftId } = context.query

  return {
    props: { nftId },
  }
}

const NftDetail: NextPage<NftDetailProps> = ({ nftId }) => {

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
      </main>
    </div>
  )
}

export default NftDetail
