import FAQ from "../src/screens/FAQ";

export default FAQ;
// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// export async function getServerSideProps() {
//   console.log('roda a cada acesso que você recebe. Bom para caso seja necessário buscar dados atualizados sempre que a página for acessada.')
// }

export async function getStaticProps() {
  // console.log('roda SOMENTE em build time. Bom para caso a página não mude com frequência.')
  const faq = await fetch('https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Deu problema');

    })
 
  return {
    props: {
      faq,
    },
  }
}
