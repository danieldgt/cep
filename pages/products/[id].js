import { useRouter } from 'next/router';

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
    console.log(params);

    return {
      props: {
        //product: await getProductFromDatabase(params.id)
      }
    }
  }

  export async function getStaticPaths() {
    // const products = await getProductsFromDatabase()
  
    // const paths = products.map((product) => ({
    //   params: { id: product.id }
    // }))
  
    const paths = [{
        params: {
            id: '1'
        },
        params: {
            id: '2'
        },
        params: {
            id: '3'
        }
    }];
    // fallback: false means pages that don’t have the
    // correct id will 404.
    return { paths, fallback: true }
  }



  export default function Product({ product }) {
    const router = useRouter()
  
    if (router.isFallback) {
      return <div>Loading...</div>
    }
  
    // Render product...
  }