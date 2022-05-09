export async function getStaticProps({params}) {

  console.log(params);
  return {
    props: {

    }
  }
}

export async function getStaticPaths() {

  return {
    paths:[
      {
        params:{
          cep: '1'
        }
      },
      {
        params:{
          cep: '2'
        }
      },
      {
        params:{
          cep: '3'
        }
      },
    ],
    fallback: false
  }
}

function Ceps(props) {
  return <div> teste {props.cep} </div>
}

export default Ceps;